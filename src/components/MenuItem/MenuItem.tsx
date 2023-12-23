import { FC } from 'react';
import './MenuItem.css';

interface MenuItemProps {
	title: string;
	callback?: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({ title, callback = () => {} }) => {
	return (
		<div className='menu-item' onClick={callback}>
			{title}
		</div>
	);
};
