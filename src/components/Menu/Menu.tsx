import { FC, CSSProperties, LegacyRef } from 'react';
import { MenuItem, MenuItemProps } from '..';
import './Menu.css';

export interface MenuProps {
	menu: MenuItemProps[];
	style?: CSSProperties;
	onClick?: () => void;
	menuRef?: LegacyRef<HTMLDivElement>
}

export const Menu: FC<MenuProps> = ({
	menu,
	style = {},
	onClick = () => { },
	menuRef = undefined,
}) => {
	return (
		<div className='menu' style={style} ref={menuRef}>
			{menu.map((menuItem, index) => (
				<MenuItem
					title={menuItem.title}
					callback={() => {
						onClick();
						menuItem.callback?.();
					}}
					submenu={menuItem.submenu}
					key={index}
				/>
			))}
		</div>
	);
};
