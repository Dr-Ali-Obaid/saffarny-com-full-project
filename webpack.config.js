const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  entry: {
    "/js/main": ["./src/js/main.js", "jquery"],
    "/js/journeys": ["./src/js/journeys.js", "jquery"],
    "/js/sign-up": ["./src/js/sign-up.js"],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  stats: "errors-only",



  module: {
    rules: [
      {
        test:/\.m?js$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader",
          options:{
            presets:['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",

          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /fonts/,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },

      {
        test: /\.(woff|woff2|svg|eot|ttf|otf)$/i,
        exclude: /images/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // compress: true,
    port: 9000,
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
  },

  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // but if i uncomment it, it produce txt files for every js file beside it in product folder
      // `...`,
      new CssMinimizerPlugin(),
    ],
  }, 
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["/js/main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/journey-1.html",
      filename: "journey-1.html",
      chunks: ["/js/main", "/js/journeys"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/journey-2.html",
      filename: "journey-2.html",
      chunks: ["/js/main", "/js/journeys"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/sign-in.html",
      filename: "sign-in.html",
      chunks: ["/js/main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/sign-up.html",
      filename: "sign-up.html",
      chunks: ["/js/main", "/js/sign-up"],
      inject: "body",
    }),

    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

  ],
};
