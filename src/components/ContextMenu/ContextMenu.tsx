import { FC, CSSProperties, useState, useEffect } from 'react';
import './ContextMenu.css';
import { useMenuContext } from '../../store/menuContext';
import { useClientRect } from '../../hooks';
import { Menu, MenuItemProps } from '..';

interface ContextMenuProps {
	menu?: MenuItemProps[];
}

export const ContextMenu: FC<ContextMenuProps> = ({ menu = [] }) => {
	const { position: { x, y } } = useMenuContext();
	const [style, setStyle] = useState<CSSProperties>({
		top: `${y}px`,
		left: `${x}px`,
		visibility: 'hidden',
	});
	const { rect, ref } = useClientRect();

	useEffect(() => {
		if (!rect) return;

		const newStyle: CSSProperties = {
			top: `${y}px`,
			left: `${x}px`,
		};

		if (rect.bottom > window.innerHeight) {
			newStyle.top = `${window.innerHeight - rect.height}px`;
		}

		if (rect.right > window.innerWidth) {
			newStyle.left = `${window.innerWidth - rect.width}px`;
		}

		setStyle((state) => ({ ...state, ...newStyle, visibility: 'visible' }));
	}, [rect, x, y]);

	return (
		<div
			className='context-menu'
			style={style}
			ref={ref}
		>
			<Menu menu={menu} />
		</div>
	);
};
