import path from 'path'
import serve from '../dist/index.es.js'

export default {
  input: 'test/entry.js',
  output: {
    file: 'test/dest.js',
    format: 'cjs',
  },
  plugins: [
    serve({
      allowCrossOrigin: true,
      historyApiFallback: true,
      contentBase: path.dirname(__dirname)
    })
  ]
}
