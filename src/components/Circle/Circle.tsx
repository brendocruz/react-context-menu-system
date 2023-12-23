import { FC, useState } from 'react';
import './Circle.css';
import { ContextMenu, MenuArea, MenuItem } from '..';

export const Circle: FC<{}> = () => {
	const [color, setColor] = useState('yellow');

	return (
		<div className='circle' style={{ backgroundColor: color }}>
			<MenuArea
				className='circle-menu'
				menu={(
					<ContextMenu>
						<MenuItem title='Red' callback={() => setColor('red')} />
						<MenuItem title='Green' callback={() => setColor('green')} />
						<MenuItem title='Blue' callback={() => setColor('blue')} />
						<MenuItem title='Yellow' callback={() => setColor('yellow')} />
					</ContextMenu>
				)}
			/>
		</div>
	);
};
