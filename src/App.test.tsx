import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';
import MockReport from './__mocks__/MockReport';

jest.mock('./Components/FlickList/FlickList', () => () => (
	<div>FlickList Mock</div>
));

jest.mock('./Services/ReportProvider', () => ({
	useReport: jest.fn().mockReturnValue({
		report: MockReport,
	}),
}));

describe('App component', () => {
	test('FlickList renders at the root path', () => {
		render(
			<MemoryRouter initialEntries={['/']}>
				<App />
			</MemoryRouter>
		);
		const flickListElement = screen.getByText(/FlickList Mock/i);
		expect(flickListElement).toBeInTheDocument();
	});

	test('renders FlickDetail component for a film route', () => {
		console.log('@@@ ', MockReport);
		const id = 1241534;
		render(
			<MemoryRouter initialEntries={[`/film/${id}`]}>
				<App />
			</MemoryRouter>
		);
		const flickDetailElement = screen.getByText('Shin Spider-Man');
		expect(flickDetailElement).toBeInTheDocument();
	});
});
