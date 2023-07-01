import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import path from "path";
import { fileURLToPath } from "url";
import builtins from "rollup-plugin-node-builtins";
import json from "@rollup/plugin-json";
import babel from "rollup-plugin-babel";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const plugins = [
  json(),
  external(),
  resolve(),
  commonjs({ ignoreGlobal: true, include: /\/node_modules\// }),
  builtins(),
  peerDepsExternal(),
  typescript({
    exclude: ["*.d.ts", "**/*.d.ts"],
    rollupCommonJSResolveHack: true,
    clean: true,
  }),
  terser(),
  alias({
    entries: [
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
      },
    ],
  }),
  babel({
    babelrc: false,
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    exclude: "node_modules/**",
  }),
];

export default [
  {
    input: "src/index.ts",
    treeshake: true,
    output: [
      {
        file: "build/index.js",
        format: "cjs",
      },
      // {
      //   file: packageJson.module,
      //   format: "cjs",
      //   sourcemap: false,
      // },
      // {
      //   file: packageJson.main,
      //   format: "esm",
      //   sourcemap: false,
      // },
    ],
    plugins,
    external: ["react", "react-dom", "goober", "lodash"],
  },
];
