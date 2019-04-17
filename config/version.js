const fs = require('fs')
const pack = require('../package.json')

// update installation.md
const installation = fs
  .readFileSync('./gitbook/installation.md', 'utf-8')
  .replace(
    /https:\/\/unpkg\.com\/vue-hello-plugin@[\d.]+.[\d]+\/dist\/vue-hello-plugin\.js/,
    'https://unpkg.com/vue-hello-plugin@' + pack.version + '/dist/vue-hello-plugin.js.'
  )
fs.writeFileSync('./gitbook/installation.md', installation)
