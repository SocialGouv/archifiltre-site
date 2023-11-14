/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Typescript parsing
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("source-map-support").install();
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});
