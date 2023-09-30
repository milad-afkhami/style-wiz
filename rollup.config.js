import typescript from "@rollup/plugin-typescript";
import packageJson from "./package.json" assert { type: "json" };
import tsconfig from "./tsconfig.json" assert { type: "json" };

const { sourceMap, declaration, declarationDir } = tsconfig.compilerOptions;

/** @type {import('rollup').RollupOptions} */
const configurations = [
  {
    input: "src/index.ts",
    treeshake: true,
    output: [
      { file: packageJson.module, format: "cjs", sourcemap: sourceMap },
      { file: packageJson.main, format: "esm", sourcemap: sourceMap },
    ],
    external: Object.keys(packageJson.peerDependencies),
    plugins: [
      typescript({ tsconfig: "./tsconfig.json", declaration, declarationDir }),
    ],
  },
];

export default configurations;
