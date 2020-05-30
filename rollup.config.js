import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'obj/index.js',
    output: {
        file: 'index.js',
        format: 'cjs'
    },
    plugins: [resolve(), terser({
        compress: true,
        mangle: true,
    })]
};