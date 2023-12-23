import { FC, ReactNode } from 'react';
import './ContextMenu.css';
import { useMenuContext } from '../../store/menuContext';

interface ContextMenuProps {
	children: ReactNode;
}

export const ContextMenu: FC<ContextMenuProps> = ({ children }) => {
	const { position: { x, y } } = useMenuContext();
	return (
		<div className='context-menu' style={{
			top: `${y}px`,
			left: `${x}px`,
		}}>
			{children}
		</div>
	);
};
