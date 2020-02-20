const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  devServer: {
    port: 4200,
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
          options: {
            pretty: true,
          }
        }
      },
      {
        test: /\.s[ac]ss/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true
            }
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'img'),
        to: path.resolve(__dirname, 'dist', 'img')
      },
      {
        from: path.resolve(__dirname, 'src', 'libs'),
        to: path.resolve(__dirname, 'dist', 'libs')
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'pages', 'index.pug'),
      filename: path.resolve(__dirname, 'dist', 'index.html')
    }),
    new MiniCSSExtractPlugin({
      filename: `./css/[name].css`
    })
  ]
}

