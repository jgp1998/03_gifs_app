
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';


describe('CustomHeader', () => {

    const title = 'Test Title';
    const description = 'Test Description';

    test('should render correctly', () => {
        render(<CustomHeader title={'Test Title'} />);
        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);


    });

    test('should render the description when provided', () => {

        render(<CustomHeader title={title} description={description} />);

        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByText(description).innerHTML).toBe(description);
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    });
    test('should not render description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);
        const divElement = container.querySelector('.content-center');
        expect(divElement?.querySelector('p')).toBeNull();
    });
}
);
