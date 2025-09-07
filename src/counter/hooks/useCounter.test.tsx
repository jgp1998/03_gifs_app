import { describe, expect, test } from "vitest"
import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";



describe('useCounter', () => {
    test('should initialize with default value of 10', () => {
        const { result } = renderHook(() => useCounter());
        const { counter } = result.current;
        expect(counter).toBe(10);


    });

    test('should initialize with custom value', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    });
    test('should be increment counter with handleAdd is called', () => {


        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleAdd();

        })
        expect(result.current.counter).toBe(11);
    });
    test('should be decrement counter with handleSubstract is called', () => {


        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleSubstract();

        })
        expect(result.current.counter).toBe(9);
    });
    test('should be reset counter with handleReset is called', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.handleReset();

        })
        expect(result.current.counter).toBe(5);
    });
    test('should be reset counter with handleReset is called in useCounter with initial value', () => {
        const initialValue = 15;
        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.handleReset();
        })
        expect(result.current.counter).toBe(5);
    })
});
