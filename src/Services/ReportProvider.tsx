import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';

import { fetchGenre } from './apiService';

import Flick from '../Interfaces/Flick';

interface ReportContextType {
	report: Flick[];
	setReport: (newReport: Flick[]) => void;
}

// new Context object of type ReportContextType or undefined (undefined as a way to
// enforce type safety, forcing me to check for undefined before using the Context)
const ReportContext = createContext<ReportContextType | undefined>(undefined);

// React Functional Component that takes a prop of type ReactNode
export const ReportProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [report, setReport] = useState<Flick[]>([]);

	const value = { report, setReport };

	return (
		<ReportContext.Provider value={value}>
			{children}
		</ReportContext.Provider>
	);
};

export const useReport = () => {
	const context = useContext(ReportContext);
	if (context === undefined) {
		throw new Error(
			'ReportContext undefined: useReport must be used within a ReportProvider'
		);
	}
	return context;
};
