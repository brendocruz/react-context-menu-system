import { FC, ReactNode, useEffect, useState } from 'react';
import { useMenuContext } from '../../store/menuContext';
import { useRandomId } from '../../hooks';
import { ContextMenu, MenuItemProps } from '..';

interface MenuAreaProps {
	children?: ReactNode;
	className?: string;
	menu?: MenuItemProps[];
}

export const MenuArea: FC<MenuAreaProps> = ({
	children = '',
	menu = [],
	className = ''
}) => {
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
			{isActive && currentMenuId === menuId && (
				<ContextMenu menu={menu} />
			)}
		</div>
	);
};
