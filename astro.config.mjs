// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.perryivic.github.io",
  integrations: [preact(), mdx(), icon()]
});