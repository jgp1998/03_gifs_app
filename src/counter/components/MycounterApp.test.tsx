import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";

describe('MyCounterApp', () => {
    test('should render the component', () => {
        render(<MyCounterApp />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(`Counter: 10`);
        expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
        expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
        expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    })
    test('should increment the counter when +1 button is clicked', () => {
        render(<MyCounterApp />);
        const labelH1 = screen.getByRole('heading', { level: 1 });
        const addButton = screen.getByRole('button', { name: '+1' });
        act(() => {
            addButton.click();
        })
        expect(labelH1.innerHTML).toContain(`Counter: 11`);
    })
    test('should decrement the counter when -1 button is clicked', () => {
        render(<MyCounterApp />);
        const labelH1 = screen.getByRole('heading', { level: 1 });
        const substractButton = screen.getByRole('button', { name: '-1' });
        fireEvent.click(substractButton);
        expect(labelH1.innerHTML).toContain(`Counter: 9`);
    })
    test('should reset the counter when Reset button is clicked', () => {
        render(<MyCounterApp />);
        const labelH1 = screen.getByRole('heading', { level: 1 });
        const ResetButton = screen.getByRole('button', { name: 'Reset' });
        fireEvent.click(ResetButton);
        expect(labelH1.innerHTML).toContain(`Counter: 5`);
    })
})