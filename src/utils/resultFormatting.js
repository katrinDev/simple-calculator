/**
 * @module resultFormatting
 * @description Contains functions for formatting
 * calculation results into sutable for output form
 */
/**
 * Checks if the argument is float
 * @param {number} num - Number to be checked
 * @return {boolean} Indicates whether number is float
 */
function isFloat(num) {
	return Number(num) === num && !Number.isInteger(num);
}
/**
 * Transforms the string result after calculation
 * @param {string} result - Calculations result
 * @return {string} Calculations result sutable for output
 */
export function resultStringCropping(result) {
	const resultNumber = parseFloat(result);
	if (Math.abs(resultNumber) > 1e6 || Math.abs(resultNumber) < 1e-6) {
		return resultNumber.toExponential(5);
	}

	if (isFloat(resultNumber)) {
		return result.slice(0, 8);
	}

	return result;
}
