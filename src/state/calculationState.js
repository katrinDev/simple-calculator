/**
 * Class for storing the state of the calculator.
 * @class
 */
class CalculationState {
	/**
	 * Initializes all properties to their default values.
	 */
	constructor() {
		/**
		 * The left operand.
		 * @type {string}
		 */
		this.x = '';
		/**
		 * The right operand.
		 * @type {string}
		 */
		this.y = '';
		/**
		 * The operator.
		 * @type {string}
		 */
		this.sign = '';

		/**
		 * Flag indicating whether the current operation is new.
		 * @type {boolean}
		 */
		this.isNewCalculation = false;
		/**
		 * Additional variable for complex expressions.
		 * @type {string}
		 */
		this.z = '';
		/**
		 * Additional sign variable for complex expressions.
		 * @type {string}
		 */
		this.sign0 = '';
	}

	/**
	 * Crears all calculator values
	 */
	clearAll() {
		this.x = '';
		this.y = '';
		this.sign = '';
		this.isNewCalculation = false;
		this.z = '';
		this.sign0 = '';
	}
}

export const calcData = new CalculationState();
