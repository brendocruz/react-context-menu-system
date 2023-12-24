import { useState, useCallback } from 'react';

export const useClientRect = () => {
	const [rect, setRect] = useState<DOMRect | null>(null);
	const ref = useCallback((node: HTMLDivElement) => {
		if (node !== null) {
			setRect(node.getBoundingClientRect());
		}
	}, []);

	return { rect, ref };
}

