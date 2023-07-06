/**
 * @type {import('rollup').RollupOptions}
 */

import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };

// const projectRootDir = path.resolve(__dirname);

export default [
  {
    input: "src/index.ts",
    treeshake: true,
    output: [
      { file: packageJson.module, format: "cjs", sourcemap: false },
      { file: packageJson.main, format: "esm", sourcemap: false },
    ],
    external: ["react", "react-dom", "goober", "lodash"],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
