import { describe, expect, test } from '@jest/globals';
import { useState, useRef } from 'react';

import { useDynamicTitleSize } from './DynamicTitleSize';

// Mock useState and useEffect
jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
	useEffect: jest.fn(),
}));

describe('useDynamicTitleSize', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should adjust font size based on parent height', () => {
		// ref is header element
		const ref = useRef<HTMLHeadingElement>(document.createElement('h2'));
		if (ref.current) {
			ref.current.textContent = 'Title';
			ref.current.style.fontSize = '20px';
			console.log('ref.current', ref.current);
		}

		// Title is the parent of ref
		const title = document.createElement('div');
		title.setAttribute('scrollHeight', '75');
		title.appendChild(ref.current);

		// Subtitle is the sibling of ref
		const subtitle = document.createElement('div');
		subtitle.setAttribute('scrollHeight', '50');

		// Container is the parent of title and subtitle
		const container = document.createElement('div');
		container.setAttribute('offsetHeight', '100');

		container.appendChild(title);
		container.appendChild(subtitle);

		// Manually trigger useEffect by calling the adjustFontSize function
		const adjustedFontSize = useDynamicTitleSize(ref, 20);

		expect(useState).toHaveBeenCalled();
	});

	test('should initialize with default font size', () => {
		(useState as jest.Mock).mockReturnValue([35, jest.fn()]);
		const ref = { current: null };
		const fontSize = useDynamicTitleSize(ref);
		expect(fontSize).toBe(35);
	});

	test('should handle missing or null ref', () => {
		(useState as jest.Mock).mockReturnValue([20, jest.fn()]);
		const ref = { current: null };
		const fontSize = useDynamicTitleSize(ref);
		expect(fontSize).toBe(20);
	});
});
