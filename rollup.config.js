export default {
  input: {
    main: 'src/index.js',
    app1: 'src/app1/index.js',
    app2: 'src/app2/index.js'
  },
  output: {
    dir: 'lib',
    entryFileNames: '[name].js',
    format: 'es'
  }
}