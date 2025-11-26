// @ts-check
import { defineConfig } from 'astro/config';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://beaty-portfolio.edgeone.app/',
  adapter: edgeoneAdapter()
});
