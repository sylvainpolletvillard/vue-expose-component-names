// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	extends: "eslint:recommended",
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: "module"
	},
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1}
		],
		"no-mixed-spaces-and-tabs": [
			"error",
			"smart-tabs"
		],
		"no-console": "off"
	}
}
