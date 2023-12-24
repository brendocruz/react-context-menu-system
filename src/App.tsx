import { FC } from 'react';
import { Circle, Mouth } from './components';
import { MenuContextProvider } from './store/menuContext';
import './App.css'

// const ctxMenu = [
// 	{ title: 'Red', callback: () => { console.log('red') } },
// 	{ title: 'Green', callback: () => { console.log('green') } },
// 	{ title: 'Blue', callback: () => { console.log('blue') } },
// 	{
// 		title: 'Rotate',
// 		callback: () => { console.log('Rotate') },
// 		submenu: [
// 			{ title: '90°', callback: () => { console.log('Rotate 90°') } },
// 			{ title: '180°', callback: () => { console.log('Rotate 180°') } },
// 			{ title: '270°', callback: () => { console.log('Rotate 270°') } },
// 			{
// 				title: 'More',
// 				submenu: [
// 					{ title: 'More 1' },
// 					{ title: 'More 2' },
// 					{ title: 'More 3' },
// 				],
// 			},
// 		],
// 	},
// 	{ title: 'Yellow', callback: () => { console.log('yellow') } },
// ];

const App: FC<{}> = () => {
	return (
		<div className='app'>
			<MenuContextProvider>
				<div className='eyes'>
					<Circle />
				</div>
				<Mouth />
			</MenuContextProvider>
		</div>
	);
};

export default App;
