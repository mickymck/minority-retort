jest.mock('axios', () => {
	return {
		create: jest.fn(() => jest.fn()),
		get: jest.fn(() => Promise.resolve({ data: { results: [] } })),
	};
});
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
import App from './App';

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
			expect(screen.getByText(/Madame Web/i)).toBeInTheDocument();
		});
	});
});
