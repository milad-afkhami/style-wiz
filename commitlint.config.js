/**
 * @see https://commitlint.js.org/#/reference-configuration
 * @type {import("@commitlint/types").UserConfig}
 */
const Configuration = {
  extends: ["@commitlint/config-conventional"],
  /**
   * Any rules defined here will override rules from @commitlint/config-conventional
   *
   * @see https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js#L3
   */
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "fix",
        "feat",
        "refactor",
        "perf",
        "style",
        "test",
        "docs",
        "build",
        "ops",
        "chore",
        "revert",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        // components:
        "components",

        "configs",
        "helpers",
        "hooks",
        "scripts",
        "types",
        "utils",

        "git",
      ],
    ],
  },
  ignores: [
    (commit) =>
      ["initial commit", "༼ つ ◕_◕ ༽つ initial commit"].includes(commit),
  ],
};

module.exports = Configuration;
