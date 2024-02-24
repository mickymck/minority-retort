import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';
import MockReport from './__mocks__/MockReport';
import Flick from './Interfaces/Flick';

jest.mock('./Components/FlickList/FlickList', () => () => (
	<div>FlickList Mock</div>
));

jest.mock('./Services/ReportProvider', () => ({
	useReport: jest.fn().mockReturnValue({
		report: [
			new Flick(
				1241534,
				'Shin Spider-Man',
				'2024-02-04',
				2.611,
				'/h2ncfhfr3bwdtZ2CVtC1ky18owL.jpg'
			),
		],
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
		const id = MockReport.report[0].id;
		render(
			<MemoryRouter initialEntries={[`/film/${id}`]}>
				<App />
			</MemoryRouter>
		);
		const flickDetailElement = screen.getByText(MockReport.report[0].title);
		expect(flickDetailElement).toBeInTheDocument();
	});
});
