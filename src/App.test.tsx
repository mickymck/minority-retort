// I need to mock axios first so we don't get an error trying to import the outside module
jest.mock('axios', () => {
	return {
		create: jest.fn(() => jest.fn()),
		get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
	};
});

// Still need to import axios and work with it before other imports, I think
import axios from 'axios';
import { fetchGenreMock } from './__mocks__/fetchGenreMock';
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockReturnThis();
mockedAxios.get.mockImplementation(() => {
	console.log('axios.get mock called');
	return Promise.resolve({
		data: fetchGenreMock,
	});
});

import { describe, expect, test } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { ReportProvider } from './services/ReportProvider';
import { reportMock } from './__mocks__/reportMock';

import App from './App';

// mock the useParams hook with the Dune id
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn().mockReturnValue({ id: '693134' }),
}));

// mock the useReport hook with the reportMock data
jest.mock('./services/ReportProvider', () => ({
	...jest.requireActual('./services/ReportProvider'),
	useReport: jest.fn(() => ({
		report: reportMock,
	})),
}));

describe('App component', () => {
	test('FlickList renders at the root path', async () => {
		await act(async () => {
			render(
				<MemoryRouter initialEntries={['/']}>
					<App />
				</MemoryRouter>
			);
		});
		await waitFor(() => {
			expect(screen.getByText(/Shin Spider-Man/i)).toBeInTheDocument();
		});
	});

	test('FlickDetail renders the proper movie details', async () => {
		await act(async () => {
			render(
				<MemoryRouter initialEntries={['/film/693134']}>
					<ReportProvider>
						<App />
					</ReportProvider>
				</MemoryRouter>
			);
		});
		await waitFor(() => {
			expect(screen.getByText(/Dune: Part Two/i)).toBeInTheDocument();
			expect(screen.getByText(/Back/i)).toBeInTheDocument();
		});
	});
});
