import {
	FC,
	ReactNode,
	createContext,
	useReducer,
	useContext,
	useEffect,
	useCallback,
} from 'react';


interface MenuContextState {
	isActive: boolean;
	position: { x: number, y: number };
	activeMenu: () => void;
	desactiveMenu: () => void;
	setPosition: (x: number, y: number) => void;
	currentMenuId: string;
	setCurrentMenuId: (id: string) => void;
	// registerMenu: (id: string) => void;
}

type MenuContextAction =
	| { type: 'ACTIVE_MENU' }
	| { type: 'DESACTIVE_MENU' }
	| { type: 'TOGGLE_MENU' }
	| { type: 'SET_POSITION', payload: { x: number, y: number } }
	| { type: 'SET_CURRENT_MENU', payload: string }
	// | { type: 'REGISTER_MENU', payload: string }
	;


const reducer = (
	state: MenuContextState,
	action: MenuContextAction
): MenuContextState => {

	switch (action.type) {
		case 'ACTIVE_MENU':
			return { ...state, isActive: true };
		case 'DESACTIVE_MENU':
			return { ...state, isActive: false };
		case 'TOGGLE_MENU':
			return { ...state, isActive: !state.isActive };
		case 'SET_POSITION':
			return {
				...state,
				position: {
					x: action.payload.x,
					y: action.payload.y,
				},
			};
		case 'SET_CURRENT_MENU':
			return {
				...state,
				currentMenuId: action.payload
			};
		default:
			return { ...state };
	};
};

const initialValue: MenuContextState = {
	isActive: false,
	activeMenu: () => { },
	desactiveMenu: () => { },
	setPosition: () => { },
	setCurrentMenuId: () => { },
	currentMenuId: '',
	position: {
		x: 1,
		y: 1,
	},
};

const MenuContext = createContext<MenuContextState>(initialValue);

export const useMenuContext = () => { return useContext(MenuContext); };

export const MenuContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialValue);

	const activeMenu = useCallback(() => {
		dispatch({ type: 'ACTIVE_MENU' });
	}, []);

	const desactiveMenu = useCallback(() => {
		dispatch({ type: 'DESACTIVE_MENU' });
	}, []);

	const setPosition = useCallback((x: number, y: number) => {
		dispatch({ type: 'SET_POSITION', payload: { x, y } });
	}, []);

	const setCurrentMenuId = useCallback((id: string) => {
		dispatch({ type: 'SET_CURRENT_MENU', payload: id });
	}, []);

	useEffect(() => {
		const handleClick = () => { desactiveMenu(); }
		document.addEventListener('click', handleClick);

		const handleContextMenu = (event: globalThis.MouseEvent) => {
			event.preventDefault();
			desactiveMenu();
			setCurrentMenuId('');
		}
		document.addEventListener('contextmenu', handleContextMenu);

		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('contextmenu', handleContextMenu);
		};
	}, []);

	return (
		<MenuContext.Provider value={{
			...state,
			activeMenu,
			desactiveMenu,
			setPosition,
			setCurrentMenuId
		}}>
			{children}
		</MenuContext.Provider>
	);
}
