import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
	render(<App />);
});
