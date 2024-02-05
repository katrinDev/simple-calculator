/**
 * @module transformOperators
 * @description Stores computational logic for nonarithmetic operators */

import { calcData } from '../state/calculationState';
/**
 * Calculates percentages of the number
 */
function percentCount() {
	const { x, y, sign } = calcData;
	if (sign === '' && y === '') {
		calcData.y = 1;
	} else if (sign !== '' && y === '') {
		calcData.y = x;
	}
	calcData.y = calcData.x * calcData.y / 100;
}

/**
 * Changes the sign of a numeric string
 * @param {string} value - Value to be changed
 * @return {string} Value with a changed sign
 */
function changeSignLogic(value) {
	return (-1 * parseFloat(value)).toString();
}

export { percentCount, changeSignLogic };
