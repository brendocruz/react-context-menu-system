import { FC, useState } from 'react';
import './Circle.css';
import { MenuArea, MenuItemProps } from '..';

export const Circle: FC<{}> = () => {
	const [color, setColor] = useState('yellow');

	const ctxMenu: MenuItemProps[] = [
		{ title: 'Red', callback: () => { setColor('red') } },
		{ title: 'Green', callback: () => { setColor('green') } },
		{ title: 'Blue', callback: () => { setColor('blue') } },
		{
			title: 'Rotate',
			callback: () => { console.log('Rotate')},
			submenu: [
				{ title: '90°', callback: () => { console.log('Rotate 90°')} },
				{ title: '180°', callback: () => { console.log('Rotate 180°')} },
				{ title: '270°', callback: () => { console.log('Rotate 270°')} },
			],
		},
		{ title: 'Yellow', callback: () => { setColor('yellow') } },
	];

	return (
		<div className='circle' style={{ backgroundColor: color }}>
			<MenuArea className='circle-menu' menu={ctxMenu} />
		</div>
	);
};
