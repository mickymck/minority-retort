import { useEffect, useState } from 'react';

function useDynamicTitleSize(
	ref: React.RefObject<HTMLElement>,
	defaultFont: number = 20
) {
	const [fontSize, setFontSize] = useState(defaultFont);

	useEffect(() => {
		// guard against ref.current being nil
		if (!ref.current) return;
		let currentFont = defaultFont;
		const adjustFontSize = () => {
			// guard against ref.current being nil
			if (!ref.current) return;
			ref.current.style.fontSize = `${currentFont}px`;
			// for vertical spacing (flex-grow in css) I need to look at the parent's height
			const titleHeight = ref.current.parentElement?.scrollHeight ?? 0;
			// this is maybe hacky, but this gets release height based on current structure
			const releaseHeight =
				ref.current.parentElement?.parentElement?.children[1]
					.scrollHeight ?? 0;
			// total height I have to work with
			const containerHeight =
				ref.current.parentElement?.parentElement?.offsetHeight ?? 0;
			// giving a 10% buffer for padding
			if ((titleHeight + releaseHeight) * 1.1 > containerHeight) {
				// decrement the font then check again
				currentFont -= 1;
				requestAnimationFrame(adjustFontSize);
			} else {
				setFontSize(currentFont);
			}
			requestAnimationFrame(adjustFontSize);
		};
		adjustFontSize();
	}, [ref]);
	return fontSize;
}

export { useDynamicTitleSize };
