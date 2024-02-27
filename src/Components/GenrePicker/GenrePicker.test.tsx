import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenrePicker from './GenrePicker';
import { useReport } from '../../services/ReportProvider';
import { Genre } from '../../interfaces/Genre';

// Mock the useReport hook
jest.mock('../../services/ReportProvider', () => ({
	...jest.requireActual('../../services/ReportProvider'),
	useReport: jest.fn(() => ({
		setSelectedGenre: jest.fn(),
	})),
}));

describe('GenrePicker Component', () => {
	afterEach(() => {
		jest.resetAllMocks();
	});

	test('setSelectedGenre is called with the appropriate Genre', async () => {
		const setSelectedGenre = jest.fn();

		(useReport as jest.Mock).mockReturnValue({
			setSelectedGenre,
		});

		render(<GenrePicker />);

		await userEvent.selectOptions(
			screen.getByRole('combobox'),
			Genre.Fantasy.valueOf().toString()
		);

		expect(setSelectedGenre).toHaveBeenCalledWith(parseInt('5'));
	});
});
