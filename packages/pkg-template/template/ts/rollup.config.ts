import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'
const pkg = require('./package.json')

const isDev = process.env.NODE_ENV !== 'production'

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'example'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [...Object.keys(pkg.dependencies)],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/
    }),
    json(),
    !isDev &&
      terser({
        format: {
          comments: (_, comment) => {
            // Only the current copyright information is retained
            return /@ifake/i.test(comment.value)
          }
        }
      }),
    typescript({
      tsconfig: './tsconfig.json'
    })
  ]
}
