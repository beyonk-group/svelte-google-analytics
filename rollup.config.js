import pkg from './package.json'
import svelte from 'rollup-plugin-svelte-hot'
import resolve from '@rollup/plugin-node-resolve'
import hmr from 'rollup-plugin-hot'

const dev = process.env.WATCH

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default {
  input: dev ? 'example/main.js' : 'src/index.js',
  output: dev ? {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  } : [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name }
  ],
  plugins: [
    svelte(dev ? {
      dev: true,
      hot: {
        optimistic: true,
        noPreserveState: false
      }
    } : {}),
    resolve(),
    dev && hmr({
      public: 'example',
      inMemory: true,
      compatModuleHot: true
    })
  ]
}
