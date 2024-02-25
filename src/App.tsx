import { Routes, Route } from 'react-router-dom';

import { ReportProvider } from './Services/ReportProvider';

import FlickList from './Components/FlickList/FlickList';
import FlickDetail from './Components/FlickDetail/FlickDetail';
import GenrePicker from './Components/GenrePicker/GenrePicker';

import './App.css';

const App: React.FC = () => {
	return (
		// ReportProvider to pass global context to children via useReport
		<ReportProvider>
			<div className='App'>
				<GenrePicker />
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
