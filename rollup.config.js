import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const pkg = require("./package.json");

let cache;

const config = {
	entry: 'src/install.js',
	targets: [
		{format: 'es', dest: `dist/${pkg.name}.js`},
		{format: 'cjs', dest: `dist/${pkg.name}.common.js`}
	],
	plugins: [
		buble(),
		resolve({
			jsnext: true,
			main: true,
			browser: true,
		}),
		commonjs()
	],
	useStrict: false,
	cache
};

export default config;