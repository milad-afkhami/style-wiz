import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };

/** @type {import('rollup').RollupOptions} */
const configurations = [
  {
    input: "src/index.ts",
    treeshake: true,
    output: [
      { file: packageJson.module, format: "cjs", sourcemap: false },
      { file: packageJson.main, format: "esm", sourcemap: false },
    ],
    external: Object.keys(packageJson.peerDependencies),
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        // declaration: true,
        // declarationDir: "build/types",
      }),
    ],
  },
];

export default configurations;
