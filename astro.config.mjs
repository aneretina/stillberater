import { defineConfig, squooshImageService } from 'astro/config'
import viteSassGlob from 'vite-plugin-sass-glob-import'
import icon from 'astro-icon'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  base: '/',
  devToolbar: {
    enabled: false
  },
  compressHTML: false,
  output: 'static',
  publicDir: './public',
  build: {
    format: 'file',
    assets: 'assets',
    assetsPrefix: '.'
  },
  image: {
    service: squooshImageService()
  },
  integrations: [icon({
    svgoOptions: {
      plugins: ['preset-default']
    }
  }), tailwind()],
  vite: {
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: 'scripts.js',
          assetFileNames: (assetInfo) => {
            return assetInfo.name === 'style.css' ? `${assetInfo.name}`
              : `assets/${assetInfo.name}`
          }
        }
      }
    },
    plugins: [viteSassGlob()]
  }
})
