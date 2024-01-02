/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from '@rsbuild/core';
import { pluginAssetsRetry } from '@rsbuild/plugin-assets-retry';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr(),
    pluginAssetsRetry(),
    pluginTypeCheck(),
  ],
  html: {
    template: './public/index.html',
  },
});
