let x = '';
let y = '';
let sign = '';
let isNewCalculation = false;
let z = '';
let sign0 = '';

const DIGITS_ARRAY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const OPERATORS_ARRAY = ['-', '+', 'x', '/'];
const TRANSFORM_ARRAY = ['+/-', '%'];

const output = document.getElementById('output');

/**
 * Clears all the fields
 **/
function clearAll() {
	x = '';
	y = '';
	sign = '';
	isNewCalculation = false;
	output.textContent = '0';
}
/**
 * Checks if the argument is float
 * @param {number} num
 * @return {boolean}
 */
function isFloat(num) {
	return Number(num) === num && !Number.isInteger(num);
}
/**
 * Transforms the string result after calculation
 * @param {string} result
 * @return {string} - calculations result sutable for output
 */
function resultStringCropping(result) {
	const resultNumber = parseFloat(result);
	if (Math.abs(resultNumber) > 1e6 || Math.abs(resultNumber) < 1e-6) {
		return resultNumber.toExponential(5);
	}

	if (isFloat(resultNumber)) {
		return result.slice(0, 8);
	}

	return result;
}

/**
 * Percents calculation logic
 */
function percentCount() {
	if (sign === '' && y === '') {
		y = 1;
	} else if (sign !== '' && y === '') {
		y = x;
	}
	y = (x * y) / 100;
}

/**
 * Changes the sign of a numeric string
 * @param {string} value - Value to be changed
 * @return {string} - The result value with a changed sign
 */
function changeSignLogic(value) {
	return (-1 * parseFloat(value)).toString();
}

/**
 * Calculates depending on an operator
 */
function calculations() {
	if (y === '') y = x;
	switch (sign) {
		case '+':
			x = +x + +y;
			break;
		case '-':
			x = x - y;
			break;
		case 'x':
			x = x * y;
			break;
		case '/':
			if (y === '0') {
				output.textContent = 'Error';
				return;
			}
			x = x / y;
			break;
	}

	isNewCalculation = true;
}

/**
 * Calculates final result based on the complexity of the expression
 */
function complexResultCalculation() {
	if (z !== '') {
		calculations();
		y = x;
		x = z;
		sign = sign0;
		z = '';
		sign0 = '';
	}
	calculations();

	output.textContent = resultStringCropping(x.toString());
}

document.querySelector('.buttons').onclick = (event) => {
	/**
	 * An empty space was clicked, not a button
	 */
	if (!event.target.classList.contains('btn')) return;
	/**
	 * "Clear all" button was clicked
	 */
	if (event.target.id === 'ac') {
		clearAll();
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
	if (DIGITS_ARRAY.includes(key)) {
		if (y === '' && sign === '') {
			x += key;
			output.textContent = x;
		} else if (x !== '' && y !== '' && isNewCalculation) {
			y = key;
			isNewCalculation = false;
			output.textContent = y;
		} else {
			y += key;
			output.textContent = y;
		}
		return;
	}

	/**
	 * If an action button was clicked
	 */
	if (OPERATORS_ARRAY.includes(key)) {
		output.textContent = key;
		if (sign !== '') {
			if (key === '/' || key === 'x') {
				if (z !== '') {
					calculations();
					output.textContent = resultStringCropping(x.toString());
					sign = key;
				} else {
					z = x;
					sign0 = sign;
					sign = key;
					x = y;
					isNewCalculation = true;
				}
			} else {
				complexResultCalculation();
				sign = key;
			}
		} else {
			sign = key;
		}
		return;
	}

	if (TRANSFORM_ARRAY.includes(key)) {
		switch (key) {
			case '%':
				percentCount();
				output.textContent = resultStringCropping(y.toString());
				break;
			case '+/-':
				if (y !== '') {
					y = changeSignLogic(y);
					output.textContent = resultStringCropping(y.toString());
				} else if (x !== '') {
					x = changeSignLogic(x);
					output.textContent = resultStringCropping(x.toString());
				}
				break;
		}
		return;
	}

	/**
	 * If an equels button was clicked
	 */
	if (key === '=') {
		complexResultCalculation();
		sign = '';
	}
};
