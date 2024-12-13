/** Dependencies */
import type { Configuration } from 'webpack';
import { resolve } from 'path';

/** Webpack configurations */
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

/** Export the main webpack configuration */
export const mainConfig: Configuration = {
  entry: './src/index.ts',
  module: { rules },
  plugins,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.json']
  }
};
