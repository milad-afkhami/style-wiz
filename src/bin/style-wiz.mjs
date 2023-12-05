#!/usr/bin/env node
import fs from "fs";

function getFlagValue(flagKey) {
  const flags = process.argv?.slice(2).map((flag) => flag.split("="));
  const resolvedFlagBinary = flags.find((flag) => flag[0] === flagKey);
  return resolvedFlagBinary?.[1];
}

/** The path to the directory that contains generated minified css files */
const destinationDir =
  getFlagValue("destinationDir") || "public/stylesheets/style-wiz";
/** The path to the directory that contains the json config files */
const constantsDir = getFlagValue("constantsDir") || "constants/stylesheets";

async function generateCurves() {
  // getting curves
  const curves = JSON.parse(
    fs.readFileSync(`./${constantsDir}/curves.json`, "utf-8")
  );

  const variables = Object.entries(curves).reduce((acc, [key, value]) => {
    acc += `--curve-${key}:${value};`;
    return acc;
  }, "");

  const styles = `:root{${variables}}`;

  fs.writeFileSync(`./${destinationDir}/curves.min.css`, styles);
}

async function generatePaces() {
  // getting paces
  const paces = JSON.parse(
    fs.readFileSync(`./${constantsDir}/paces.json`, "utf-8")
  );

  const variables = Object.entries(paces).reduce((acc, [key, value]) => {
    acc += `--pace-${key}:${value}s;`;
    return acc;
  }, "");

  const styles = `:root{${variables}}`;

  fs.writeFileSync(`./${destinationDir}/paces.min.css`, styles);
}

async function generateShadows() {
  // getting shadows
  const shadows = JSON.parse(
    fs.readFileSync(`./${constantsDir}/shadows.json`, "utf-8")
  );

  const variables = Object.entries(shadows).reduce((acc, [key, value]) => {
    acc += `--shadow-${key}:${value};`;
    return acc;
  }, "");

  const styles = `:root{${variables}}`;

  fs.writeFileSync(`./${destinationDir}/shadows.min.css`, styles);
}

async function generateSpacings() {
  // getting spacings
  const spacings = JSON.parse(
    fs.readFileSync(`./${constantsDir}/spacings.json`, "utf-8")
  );

  const variables = Object.entries(spacings).reduce((acc, [key, value]) => {
    acc += `--spacing-${key}:${value};`;
    return acc;
  }, "");

  const styles = `:root{${variables}}`;

  fs.writeFileSync(`./${destinationDir}/spacings.min.css`, styles);
}

async function generateTypographies() {
  let styles = ``;

  const typographies = JSON.parse(
    fs.readFileSync(`./${constantsDir}/typographies.json`, "utf-8")
  );
  const breakpoints = JSON.parse(
    fs.readFileSync(`./${constantsDir}/breakpoints.json`, "utf-8")
  );

  Object.keys(typographies).map((rule) => {
    // extracting variables
    const variables = Object.entries(typographies[rule]).reduce(
      (acc, [key, value]) => {
        acc += `--font-size-${key}:${value.fontSize}px;`;
        return acc;
      },
      ""
    );

    if (rule === "default") {
      styles += `:root{${variables}}`;
    } else {
      styles += `@media (min-width: ${breakpoints[rule]}px){:root{${variables}}}`;
    }
  });

  fs.writeFileSync(`./${destinationDir}/typographies.min.css`, styles);
}

/**
 * generates color variables
 * @param {string} name
 * @param  {Object} variants
 * @returns {string}
 *
 * @example
 * color("brand", { main: "#A", hover: "#B" })
 * // --color-brand-main:#A;--color-brand-hover:#B;
 */
function generateCSSColorVariable(name, variants) {
  return Object.entries(variants || []).reduce((acc, [key, value]) => {
    if (value) acc += `--${name}-${key}: ${value};`;
    return acc;
  }, "");
}

/** Specifies if the input is a Color model(contains variations of the Color model) or is it a parent Color(that contains Color models) */
const isInstanceofColorModel = (instance) => {
  return typeof instance === "object" && instance.main;
};

const prepareCSSColorVariables = (name, variants) => {
  if (isInstanceofColorModel(variants)) {
    return generateCSSColorVariable(name, variants);
  } else {
    return Object.keys(variants).reduce((acc, variant) => {
      const _name = `${name ? `${name}-` : ""}${variant}`;
      acc += prepareCSSColorVariables(_name, variants[variant]);
      return acc;
    }, "");
  }
};

async function generateThemes() {
  let styles = ``;

  const themeFileNames = fs.readdirSync(`./${constantsDir}/themes/`);

  themeFileNames.map((themeFileName) => {
    // removing file extension
    const name = themeFileName.split(".")[0];

    // getting current theme palette
    const palette = JSON.parse(
      fs.readFileSync(`./${constantsDir}/themes/${name}.json`, "utf-8")
    );
    // extracting variables
    const variables = prepareCSSColorVariables("color", palette);

    styles += `:root[data-theme='${name}']{${variables}}`;
  });

  fs.writeFileSync(`./${destinationDir}/themes.min.css`, styles);
}

function logSuccess(entity) {
  console.log("Generating", entity, "stylesheets succeeded");
}

fs.mkdirSync(`./${destinationDir}`, { recursive: true });

fs.writeFileSync(`./${destinationDir}/.gitignore`, "*.min.css");

const barrelFileContent = `@import url(./themes.min.css);
@import url(./paces.min.css);
@import url(./curves.min.css);
@import url(./shadows.min.css);
@import url(./spacings.min.css);
@import url(./typographies.min.css);
`;

fs.writeFileSync(`./${destinationDir}/index.css`, barrelFileContent);

generateCurves();
logSuccess("curves");
generatePaces();
logSuccess("paces");
generateShadows();
logSuccess("shadows");
generateSpacings();
logSuccess("spacings");
generateThemes();
logSuccess("themes");
generateTypographies();
logSuccess("typographies");
