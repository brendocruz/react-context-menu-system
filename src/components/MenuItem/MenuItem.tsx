import { FC, Fragment, useState, useEffect, CSSProperties } from 'react';
import './MenuItem.css';
import { Menu } from '../';
import { useClientRect } from '../../hooks';

export interface MenuItemProps {
	title?: string;
	callback?: () => void;
	submenu?: MenuItemProps[];
}

export const MenuItem: FC<MenuItemProps> = ({
	title = '',
	callback = () => { },
	submenu = [],
}) => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [style, setStyle] = useState<CSSProperties>({
		top: '0%', left: '100%', visibility: 'hidden',
	});
	const { rect, ref } = useClientRect();

	useEffect(() => {
		if (!rect) return;

		if (rect.bottom > window.innerHeight && rect.right > window.innerWidth) {
			setStyle({ bottom: '0%', right: '100%', visibility: 'visible' });
			return;
		}

		if (rect.bottom > window.innerHeight) {
			setStyle({ bottom: '0%', left: '100%', visibility: 'visible' });
			return;
		}

		if (rect.right > window.innerWidth) {
			setStyle({ top: '0%', right: '100%', visibility: 'visible' });
			return;
		}

		setStyle((state) => ({ ...state, visibility: 'visible' }));

	}, [rect]);

	return (
		<Fragment>
			<div
				className='menu__item'
				onClick={callback}
				onMouseOver={() => setActiveMenu(true)}
				onMouseLeave={() => setActiveMenu(false)}
			>
				{title}
				{submenu.length > 0 && activeMenu && (
					<Menu
						menu={submenu}
						menuRef={ref}
						style={style}
					/>
				)}
			</div>
		</Fragment>
	);
};
