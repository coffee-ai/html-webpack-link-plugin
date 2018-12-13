# html-webpack-link-plugin

## Installation
```shell
npm install html-webpack-link-plugin -D
```
## Usage
```js
const HtmlWebpackLinkPlugin = require('html-webpack-link-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackLinkPlugin({
      js: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'],
      suffix: true
    })
  ]
}
```
