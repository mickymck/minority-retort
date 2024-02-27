// I need to mock axios first so we don't get an error trying to import the outside module
jest.mock('axios', () => {
	return {
		create: jest.fn(() => jest.fn()),
		get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
	};
});

// Still need to import axios and work with it before other imports, I think
import axios from 'axios';
import {
	fetchFlickApiReponse,
	selectedFlick,
} from '../../__mocks__/fetchFlickMock';
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create.mockReturnThis();
mockedAxios.get.mockImplementation(() => {
	console.log('axios.get mock called');
	return Promise.resolve({
		data: fetchFlickApiReponse,
	});
});

import { describe, expect, test } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { ReportProvider } from '../../services/ReportProvider';

import FlickDetail from './FlickDetail';

// mock the useReport hook with the selectedFlick mock data
jest.mock('../../services/ReportProvider', () => ({
	...jest.requireActual('../../services/ReportProvider'),
	useReport: jest.fn(() => ({
		selectedFlick: selectedFlick,
	})),
}));

describe('App component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	test('FlickDetail renders the proper movie details', async () => {
		console.log();
		await act(async () => {
			render(
				<MemoryRouter initialEntries={['/film/693134']}>
					<ReportProvider>
						<FlickDetail />
					</ReportProvider>
				</MemoryRouter>
			);
		});
		await waitFor(() => {
			expect(screen.getByText(/Dune: Part Two/i)).toBeInTheDocument();
		});
	});
});
