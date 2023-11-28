import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    alpinejs(),
    tailwind({
      configFile: './tailwind.config.mjs',
      applyBaseStyles: false,
    }),
  ]
});
