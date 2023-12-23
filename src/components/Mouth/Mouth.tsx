import { FC, useState } from 'react';
import './Mouth.css';
import { ContextMenu, MenuArea, MenuItem } from '..';

export const Mouth: FC<{}> = () => {
	const [face, setFace] = useState('neuter');

	return (
		<div className={`mouth mouth__${face}`}>
			<MenuArea
				className='mouth-menu'
				menu={(
					<ContextMenu>
						<MenuItem title='Sad' callback={() => setFace('sad')} />
						<MenuItem title='Happy' callback={() => setFace('happy')} />
						<MenuItem title='Neuter' callback={() => setFace('neuter')} />
					</ContextMenu>
				)}
			/>
		</div>
	);
};
