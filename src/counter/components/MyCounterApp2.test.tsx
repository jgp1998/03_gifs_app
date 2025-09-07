import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 50,
        handleAdd: handleAddMock,
        handleSubstract: handleSubstractMock,
        handleReset: handleResetMock,
    })
}));
describe('MyCounterApp2', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Counter: 50`);
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    })
    test('should call handleAdd when +1 button is clicked', () => {
        render(<MyCounterApp />);
        const addButton = screen.getByRole('button', { name: '+1' });
        fireEvent.click(addButton);
        expect(handleAddMock).toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
        expect(handleSubstractMock).not.toHaveBeenCalled();
        expect(handleAddMock).toHaveBeenCalledTimes(1);
    })

})