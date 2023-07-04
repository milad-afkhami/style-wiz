/**
 * @type {import('rollup').RollupOptions}
 */

import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript"; // "rollup-plugin-typescript2"
import path from "path";
import { fileURLToPath } from "url";

// const projectRootDir = path.resolve(__dirname);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import packageJson from "./package.json" assert { type: "json" };

const plugins = [
  json(),
  peerDepsExternal(),
  nodeResolve({
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  }),
  // typescript({
  //   exclude: ["*.d.ts", "**/*.d.ts", "**/*.stories.tsx", "**/*.spec.tsx"],
  //   // rollupCommonJSResolveHack: true,
  //   clean: true,
  // }),
  typescript({ tsconfig: "./tsconfig.json" }),
  commonjs({
    ignoreGlobal: true,
    include: /\/node_modules\//,
  }),
  alias(
    {
      find: "@components",
      replacement: path.resolve(__dirname, "/src/components"),
    },
    {
      find: "@utils",
      replacement: path.resolve(__dirname, "/src/utils"),
    },
    {
      find: "@constants",
      replacement: path.resolve(__dirname, "/src/constants"),
    },
    {
      find: "@typings",
      replacement: path.resolve(__dirname, "/src/typings"),
    },
    {
      find: "@helpers",
      replacement: path.resolve(__dirname, "/src/helpers"),
    },
    {
      find: "@configs",
      replacement: path.resolve(__dirname, "/src/configs"),
    }
  ),
  babel({
    babelrc: false,
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    exclude: "node_modules/**",
  }),
];

export default [
  {
    input: "src/index.ts",
    // treeshake: true,
    output: [
      { file: packageJson.module, format: "cjs", sourcemap: false },
      { file: packageJson.main, format: "esm", sourcemap: false },
    ],
    external: ["react", "react-dom", "goober", "lodash"],
    plugins,
  },
];
