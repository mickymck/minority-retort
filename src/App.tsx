import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchSciFi } from './Services/apiService';
import Flick from './Interfaces/Flick';

import FlickList from './Components/FlickList/FlickList';
import FlickDetail from './Components/FlickDetail/FlickDetail';

import './App.css';

const App: React.FC = () => {
	const [report, setReport] = useState<Flick[]>([]);

	useEffect(() => {
		const getFlicks = async () => {
			// fetch and transform logic goes into apiService
			const results = await fetchSciFi();
			setReport(results);
		};
		getFlicks();
		// note: this empty dependency array means this effect runs only once on mount
	}, []);

	// get that app header out of my detail view
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Minority Retort.</p>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={<FlickList report={report} />}
						/>
						<Route
							path='/film/:flickId'
							element={<FlickDetail />}
						/>
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
};

export default App;
