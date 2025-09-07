import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest"
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
    test('should render searchbar correctly', () => {
        const btnText = "Buscar";
        const placeholder = "Busca un gif...";
        const { container } = render(<SearchBar placeholder={placeholder} btnText={btnText} onQuery={() => { }} />);
        expect(container).toMatchSnapshot();
    })
    test('should call onQuery with the correct value after 700ms', () => {
        const btnText = "Buscar";
        const placeholder = "Busca un gif...";
        const onQuery = vi.fn();

        render(<SearchBar placeholder={placeholder} btnText={btnText} onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        })
    })

    test('should call only once with the last value (debounce)', async () => {
        const btnText = "Buscar";
        const placeholder = "Busca un gif...";
        const onQuery = vi.fn();

        render(<SearchBar placeholder={placeholder} btnText={btnText} onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        await waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        })
    });
    test('should call onQuery when the button is clicked', () => {
        const btnText = "Buscar";
        const placeholder = "Busca un gif...";
        const onQuery = vi.fn();

        render(<SearchBar placeholder={placeholder} btnText={btnText} onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
    })

    test('should the input has the correct placeholder value', () => {
        const btnText = "Buscar";
        const placeholder = "Busca un gif";
        const onQuery = vi.fn();
        render(<SearchBar placeholder={placeholder} btnText={btnText} onQuery={onQuery} />);
        expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
        screen.debug();
    })
})