import { defineConfig } from '@rsbuild/core';
import { pluginAssetsRetry } from '@rsbuild/plugin-assets-retry';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';

export default defineConfig({
  // https://rsbuild.dev/plugins/list/index
  plugins: [
    pluginReact(),
    pluginSvgr(),
    pluginAssetsRetry(),
    pluginTypeCheck(),
    pluginImageCompress(),
  ],
  html: {
    template: './public/index.html',
  },
  tools: {
    // https://rsbuild.dev/config/plugins#rspack-plugins
    rspack(config, { appendPlugins }) {
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
  server: {
    // https://rsbuild.dev/config/server/open
    open: true,
  },
});
