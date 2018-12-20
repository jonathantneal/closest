import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isBrowser = String(process.env.NODE_ENV).includes('browser');
const targets = isBrowser ? 'last 2 versions, not dead' : { node: 6 };
const input = 'src/index.js';
const output = isBrowser
	? { file: 'browser.js', format: 'cjs' }
: [
	{ file: 'index.js', format: 'cjs', sourcemap: true },
	{ file: 'index.mjs', format: 'esm', sourcemap: true }
];
const plugins = [
	babel({
		presets: [
			['@babel/env', { targets }]
		]
	})
].concat(isBrowser
	? [
		trimContentForBrowser(),
		terser()
	]
: []);

export default { input, output, plugins };

function trimContentForBrowser() {
	return {
		name: 'trim-content-for-browser',
		renderChunk(code) {
			const updatedCode = code
				.replace(/\s*'use strict';\s*function polyfill/, '!function')
				.replace(/\s*module\.exports\s*=\s*polyfill;\s*/, '(window)');

			return updatedCode;
		}
	};
}
