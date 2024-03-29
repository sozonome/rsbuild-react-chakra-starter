import { defineConfig } from '@rsbuild/core';
import { pluginAssetsRetry } from '@rsbuild/plugin-assets-retry';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import million from 'million/compiler';

export default defineConfig({
  // https://rsbuild.dev/plugins/list/index
  plugins: [
    pluginReact(),
    pluginSvgr(),
    pluginAssetsRetry(),
    pluginTypeCheck(),
  ],
  html: {
    template: './public/index.html',
  },
  tools: {
    // https://rsbuild.dev/config/plugins#rspack-plugins
    rspack: {
      plugins: [
        million.webpack({ auto: true }),
        process.env.RSDOCTOR &&
          new RsdoctorRspackPlugin({
            features: {
              loader: false,
            },
          }),
      ].filter(Boolean),
    },
  },
  dev: {
    // https://rsbuild.dev/config/dev/start-url#starturl
    startUrl: true,
  },
});
