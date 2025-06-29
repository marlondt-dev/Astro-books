// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; 

export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ 
        default: true, 
        context: "server", 
        access: "public" 
      }),
      SCORE_API_ENDPOINT: envField.string({
        context: 'server', 
        access: 'public'
      })
    }
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});