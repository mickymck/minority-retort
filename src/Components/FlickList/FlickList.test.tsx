// mock the ReportProvider module
jest.mock('../../services/ReportProvider', () => ({
	useReport: jest.fn().mockReturnValue({
		report: [],
		setReport: jest.fn(),
	}),
}));

const { render } = require('@testing-library/react');
const FlickList = require('./FlickList').default;
import { useReport } from '../../services/ReportProvider';

describe('FlickList', () => {
	test('uses useReport on mount', () => {
		render(<FlickList />);
		expect(useReport).toHaveBeenCalled();
	});
});
