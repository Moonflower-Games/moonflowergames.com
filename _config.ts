import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import filter_pages from "lume/plugins/filter_pages.ts";
import minify_html from "lume/plugins/minify_html.ts";
import og_images from "lume/plugins/og_images.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(date());
site.use(favicon());
site.use(filter_pages());
site.use(minify_html());
site.use(og_images());
site.use(robots());
site.use(sitemap());
site.use(tailwindcss());
site.use(postcss());

export default site;
