import { useEffect, useState, useRef } from 'react';

function useDynamicTitleSize(
	ref: React.RefObject<HTMLElement>,
	defaultFont: number = 20
) {
	const [fontSize, setFontSize] = useState(defaultFont);

	useEffect(() => {
		const adjustFontSize = () => {
			if (ref.current) {
				const parentWidth = ref.current.parentElement?.offsetWidth ?? 0;
				console.log('containerWidth: ', parentWidth);
				const textWidth = ref.current.scrollWidth;
				console.log('textWidth: ', textWidth);
				if (textWidth > parentWidth && parentWidth > 0) {
					const scaleFactor = parentWidth / textWidth;
					setFontSize(defaultFont * scaleFactor);
				} else {
					setFontSize(defaultFont);
				}
			}
		};
		window.addEventListener('resize', adjustFontSize);
		adjustFontSize();
		return () => {
			window.removeEventListener('resize', adjustFontSize);
		};
	}, [ref, defaultFont]);
	console.log('fontSize: ', fontSize);
	return fontSize;
}

export { useDynamicTitleSize };
