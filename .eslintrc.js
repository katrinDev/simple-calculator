module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'google',
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'object-curly-spacing': ['error', 'always'],
		'quote-props': ['error', 'as-needed'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-unused-vars': 1,
		'space-before-function-paren': 0,
	},
};
