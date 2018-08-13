import path from 'path'
import fs from 'fs'
import serve from '../dist/index.es.js'

export default {
  input: 'test/entry.js',
  output: {
    file: 'test/dest.js',
    format: 'cjs',
  },
  plugins: [
    serve({
      port: 8081,
      host: '0.0.0.0',
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
        cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
        passphrase: ''
      }, 
      allowCrossOrigin: true,
      historyApiFallback: true,
      contentBase: path.dirname(__dirname)
    })
  ]
}
