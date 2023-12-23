import { FC } from 'react';
import { Circle, Mouth } from './components';
import { MenuContextProvider } from './store/menuContext';
import './App.css'

const App: FC<{}> = () => {
	return (
		<div className='app'>
			<MenuContextProvider>
				<div className='eyes'>
					<Circle />
					<Circle />
				</div>
				<Mouth />
			</MenuContextProvider>
		</div>
	);
};

export default App;
