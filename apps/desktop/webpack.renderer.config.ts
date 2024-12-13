/** Dependencies */
import type { Configuration } from 'webpack';
import { resolve } from 'path';

/** Webpack options */
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

/** use styles loaders for css/scss/sass files */
rules.push({
  test: /\.(css|scss|sass)$/,
  use: [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'resolve-url-loader'
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: () => [require('autoprefixer')]
        }
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sassOptions: {
          implementation: require('sass')
        }
      }
    }
  ]
});

/** Add the file loader for image assets */
rules.push({
  test: /\.(png|jpe?g|gif|svg|ico)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]',
        outputPath: 'images/',
        publicPath: 'images/'
      }
    }
  ]
});

/** Export the renderer webpack configuration */
export const rendererConfig: Configuration = {
  module: { rules },
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss']
  }
};
