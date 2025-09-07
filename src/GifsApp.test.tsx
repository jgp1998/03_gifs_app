import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { GifsApp } from './GifsApp';

describe('GifsApp', () => {
    it('should render correctly', () => {
        const { container } = render(<GifsApp />);
        expect(container).toMatchSnapshot();

    });
});
