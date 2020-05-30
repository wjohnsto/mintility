import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'obj/index.js',
    output: {
        file: 'index.js',
        format: 'cjs'
    },
    plugins: [resolve()]
};
