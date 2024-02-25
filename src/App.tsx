import { Routes, Route } from 'react-router-dom';

import { ReportProvider } from './services/ReportProvider';

import FlickList from './components/FlickList/FlickList';
import FlickDetail from './components/FlickDetail/FlickDetail';

import './App.css';

const App: React.FC = () => {
	return (
		// ReportProvider to pass global context to children via useReport
		<ReportProvider>
			<div className='App'>
				<h1 className='app-header'>Minority Retort.</h1>
				<Routes>
					<Route
						path='/'
						element={<FlickList />}
					/>
					<Route
						// :id is a route param, used in Detail to find the flick
						path='/film/:id'
						element={<FlickDetail />}
					/>
				</Routes>
			</div>
		</ReportProvider>
	);
};

export default App;
