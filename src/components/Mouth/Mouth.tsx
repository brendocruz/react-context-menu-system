import { FC, useState } from 'react';
import './Mouth.css';
import { MenuArea } from '..';

export const Mouth: FC<{}> = () => {
	const [face, setFace] = useState('neuter');

	const menu = [
		{ title: 'Sad', callback: () => setFace('sad') },
		{ title: 'Happy', callback: () => setFace('happy') },
		{ title: 'Neuter', callback: () => setFace('neuter') },
	];

	return (
		<div className={`mouth mouth__${face}`}>
			<MenuArea
				className='mouth-menu'
				menu={menu}
			/>
		</div>
	);
};
