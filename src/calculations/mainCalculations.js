/**
 * @module mainCalculations
 * @description Stores computational logic for arithmetic operators */

import { resultStringCropping } from '../utils/resultFormatting';

import { calcData } from '../state/calculationState';

const output = document.getElementById('output');
/**
 * Calculates simple operations
 */
function basicCalculations() {
	if (calcData.y === '') calcData.y = calcData.x;
	switch (calcData.sign) {
		case '+':
			calcData.x = +calcData.x + +calcData.y;
			break;
		case '-':
			calcData.x = calcData.x - calcData.y;
			break;
		case 'x':
			calcData.x = calcData.x * calcData.y;
			break;
		case '/':
			if (calcData.y === '0') {
				calcData.x = 'Error';
				output.textContent = calcData.x;

				return;
			}
			calcData.x = calcData.x / calcData.y;
			break;
	}

	calcData.isNewCalculation = true;
	output.textContent = resultStringCropping(calcData.x.toString());
}

/**
 * Calculates complex expressions
 */
function complexCalculation() {
	if (calcData.z !== '') {
		/**
		 * Calculation of the first part
		 */
		basicCalculations();
		calcData.y = calcData.x;
		calcData.x = calcData.z;
		calcData.sign = calcData.sign0;
		calcData.z = '';
		calcData.sign0 = '';
	}
	/**
	 * Calculation of the second part
	 */
	basicCalculations();
}

export { basicCalculations, complexCalculation };
