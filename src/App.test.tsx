// I need to mock axios first so we don't get an error trying to import the outside module
jest.mock('axios', () => {
	return {
		create: jest.fn(() => jest.fn()),
		get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
	};
});

// Still need to import axios and work with it before other imports, I think
import axios from 'axios';
import { fetchScifiMock } from './__mocks__/fetchGenreMock';
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockReturnThis();
mockedAxios.get.mockImplementation(() => {
	return Promise.resolve({
		data: fetchScifiMock,
	});
});

import { describe, expect, test } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { reportMock } from './__mocks__/reportMock';

import App from './App';

// mock the useReport hook with the reportMock mock data
jest.mock('./services/ReportProvider', () => ({
	...jest.requireActual('./services/ReportProvider'),
	useReport: jest.fn(() => ({
		report: reportMock,
	})),
}));

describe('App component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

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
});
