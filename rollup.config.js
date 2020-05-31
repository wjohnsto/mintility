import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'dist/index.js',
    output: {
        file: 'index.js',
        format: 'cjs',
        exports: 'named',
    },
    plugins: [resolve(), terser({
        module: true
    })]
};
