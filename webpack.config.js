const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: ['./src/js/main.js', 
        'jquery',],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
        clean: true,
    },
        
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

    stats: 'errors-only',

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },

          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            exclude: /fonts/,
            type: 'asset/resource',
            generator: {
              filename: './images/[name][ext]'
            }
          },

          {
            test: /\.(woff|woff2|svg|eot|ttf|otf)$/i,
            exclude: /images/,                                                                                  
            type: 'asset/resource',
            generator: {
              filename: './fonts/[name][ext]'
            }
          },

          {
            test: /\.html$/i,
            loader: "html-loader",
          },    
        ],
    },
    
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        // compress: true,
        port: 9000,
        devMiddleware: {
          writeToDisk: true,
        },
        open: true,
      },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/journey-1.html',
            filename: 'journey-1.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/journey-2.html',
            filename: 'journey-2.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/sign-in.html',
            filename: 'sign-in.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/sign-up.html',
            filename: 'sign-up.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
      
        


    ]
}