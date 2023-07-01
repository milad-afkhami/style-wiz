import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import path from "path";
import { fileURLToPath } from "url";
import builtins from "rollup-plugin-node-builtins";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    input: "src/index.ts",
    treeshake: true,
    output: [
      {
        file: "build/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      builtins(),
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
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
    ],
    external: ["react", "react-dom"],
  },
];
