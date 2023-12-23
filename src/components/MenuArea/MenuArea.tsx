import { FC, ReactNode, ReactElement, useEffect, useState } from 'react';
import { useMenuContext } from '../../store/menuContext';
import { useRandomId } from '../../hooks';

interface MenuAreaProps {
	children?: ReactNode
	menu: ReactElement
	className?: string
}

export const MenuArea: FC<MenuAreaProps> = ({ children = '', menu, className = '' }) => {
	const {
		activeMenu,
		isActive,
		setPosition,
		currentMenuId,
		setCurrentMenuId,
	} = useMenuContext();

	const [menuId, setMenuId] = useState('');

	useEffect(() => {
		setMenuId(useRandomId());
	}, []);

	return (
		<div
			className={className}
			onContextMenu={(event) => {
				event.preventDefault();
				activeMenu();
				setCurrentMenuId(menuId);
				setPosition(event.pageX, event.pageY);
				event.stopPropagation();
			}}>
			{children}
			{isActive && currentMenuId === menuId && menu}
		</div>
	);
};
