/**
 * @module main
 * @description Contains main logic for handling document events */

import { percentCount, changeSignLogic } from './calculations/specialOperators';
import { resultStringCropping } from './utils/resultFormatting';
import {
	basicCalculations,
	complexCalculation,
} from './calculations/mainCalculations';
import {
	DIGITS,
	ARITHMETIC_OPERATORS,
	SPECIAL_OPERATORS,
} from './static/textContentArrays';
import './style.css';
import { calcData } from './state/calculationState';

const output = document.getElementById('output');

document.addEventListener('DOMContentLoaded', () => {
	document.documentElement.classList.remove('hidden');
});

document.querySelector('.buttons').onclick = (event) => {
	/**
	 * If an empty space was clicked
	 */
	if (!event.target.classList.contains('btn')) {
		return;
	}
	/**
	 * If a "clear all" button was clicked
	 */
	if (event.target.id === 'ac') {
		calcData.clearAll();

		output.textContent = '0';
		return;
	}

	/**
	 * If there were incorrect operation before
	 */
	if (calcData.x === 'Error') {
		return;
	}

	output.textContent = '';

	/**
	 * Get clicked button text
	 */
	const key = event.target.textContent;

	/**
	 * If a digit button was clicked
	 */
	if (DIGITS.includes(key)) {
		if (calcData.y === '' && calcData.sign === '') {
			calcData.x += key;
			output.textContent = calcData.x;
		} else if (
			calcData.x !== '' &&
			calcData.y !== '' &&
			calcData.isNewCalculation
		) {
			calcData.y = key;
			calcData.isNewCalculation = false;
			output.textContent = calcData.y;
		} else {
			calcData.y += key;
			output.textContent = calcData.y;
		}
		return;
	}

	if (calcData.y === '' && calcData.x === '') {
		output.textContent = 0;
		return;
	}
	/**
	 * If an arithmetic operator button was clicked
	 */
	if (ARITHMETIC_OPERATORS.includes(key)) {
		output.textContent = key;
		if (calcData.sign !== '') {
			if (key === '/' || key === 'x') {
				if (calcData.z !== '') {
					basicCalculations();
					calcData.sign = key;
				} else {
					calcData.z = calcData.x;
					calcData.sign0 = calcData.sign;
					calcData.sign = key;
					calcData.x = calcData.y;
					calcData.isNewCalculation = true;
				}
			} else {
				complexCalculation();
				calcData.sign = key;
			}
		} else {
		/**
	 	* Waiting for the right operator
	 	*/
			calcData.sign = key;
		}
		return;
	}

	/**
	 * If a percentage or sign change button was clicked
	 */
	if (SPECIAL_OPERATORS.includes(key)) {
		switch (key) {
			case '%':
				percentCount();
				output.textContent = resultStringCropping(
					calcData.y.toString()
				);
				break;
			case '+/-':
				if (calcData.y !== '') {
					calcData.y = changeSignLogic(calcData.y);
					output.textContent = resultStringCropping(
						calcData.y.toString()
					);
				} else if (calcData.x !== '') {
					calcData.x = changeSignLogic(calcData.x);
					output.textContent = resultStringCropping(
						calcData.x.toString()
					);
				}
				break;
		}
		return;
	}

	/**
	 * If an equels button was clicked
	 */
	if (key === '=') {
		complexCalculation();
		calcData.sign = '';
	}
};
