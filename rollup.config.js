import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const isBrowser = String(process.env.NODE_ENV).includes('browser');
const targets = isBrowser ? 'ie >= 9' : { node: '0.12' };
const input = 'src/index.js';
const output = isBrowser
	? { file: 'browser.js', format: 'cjs', strict: false }
: [
	{ file: 'index.js', format: 'cjs', sourcemap: true, strict: false },
	{ file: 'index.mjs', format: 'esm', sourcemap: true, strict: false }
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
				.replace(/\s*function polyfill/, '!function')
				.replace(/\s*module\.exports\s*=\s*polyfill;\s*/, '(window)');

			return updatedCode;
		}
	};
}
