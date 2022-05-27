#!/usr/bin/env node
const rimraf = require('rimraf');
const { build } = require('esbuild');
const fs = require('fs').promises;
const postcss = require('postcss');

const cssMinifier = postcss([
  require('cssnano')({
    preset: 'default',
  }),
]);

rimraf.sync('dist');

build({
  entryPoints: ['src/index.js'],
  outfile: 'dist/index.js',
  bundle: true,
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  plugins: [
    // // Optimizing + inlining imported CSS
    {
      name: 'css',
      setup(build) {
        build.onLoad({ filter: /\.css$/ }, async ({ path }) => {
          const fileContents = await fs.readFile(path, 'utf8');
          const { css } = await cssMinifier.process(fileContents, {
            // silencing sourcemap warnings
            from: undefined,
          });

          return {
            loader: 'text',
            contents: css,
          };
        });
      },
    },
  ],
}).catch(() => {
  process.exit(1);
});
