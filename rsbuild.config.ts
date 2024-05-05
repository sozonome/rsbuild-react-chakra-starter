import { defineConfig } from '@rsbuild/core';
import { pluginAssetsRetry } from '@rsbuild/plugin-assets-retry';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';

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
    rspack(config, { appendPlugins }) {
      // enable when million is compatible again with rspack
      // appendPlugins(million.webpack({ auto: true }));

      // Only register the plugin when RSDOCTOR is true, as the plugin will increase the build time.
      if (process.env.RSDOCTOR) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // plugin options
          }),
        );
      }
    },
  },
  dev: {
    // https://rsbuild.dev/config/dev/start-url#starturl
    startUrl: true,
  },
});
