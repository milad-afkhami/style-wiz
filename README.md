# Style Wiz

<p align="center">
  <img src="./docs/cover.jpg" height="400" />
</p>

Powerful CSS-in-JS and build-time stylesheets tool designed to simplify CSS-in-JS Developer experience and streamline the process of generating minified CSS files at build-time tailored for your needs.

With the primary command "style-wiz", StyleWiz executes a series of scripts using the robust "child_process" library. These scripts utilize the provided JSON config files as input and generate custom stylesheets that align perfectly with your design requirements.

StyleWiz automates the generation of minified CSS files for multi-theme color palettes, Typographies, Spacings, and ..., ensuring optimal performance and reducing development time.
It does that by running a CLI command that generates minified stylesheets from config files.

## Usage

### Defining Config Files

Create a directory and place it anywhere you want based on your project's Architecture, this will be the place to put some JSON config files, default path that StyleWiz will look for is `constants/stylesheets`. We will call this directory `constantsDir` from now on.

#### 1. Themes

With `StyleWiz` you can define theme palettes and use a reference to that palette everywhere. This brings consistency to your code and helps you big time in the implementation of multi-theme structure.

For that, create another directory in `constantsDir` and call it `themes`. In there you can create your theme palettes by creating JSON files(e.g. `constants/stylesheets/themes/NAME_OF_YOUR_THEME.json`) and fill them with the format mentioned below:

<details>

<summary>
  <strong>Click to expand the format</strong>
</summary>

```json
{
  "brand": {
    "primary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "secondary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    }
  },
  "bg": {
    "primary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "secondary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "tertiary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "disabled": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    }
  },
  "text": {
    "primary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "secondary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "tertiary": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "disabled": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    }
  },
  "assistive": {
    "success": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "error": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "info": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "warning": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    }
  },
  "border": {
    "dark": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    },
    "light": {
      "main": "A valid CSS color, for example: #333",
      "hover": "A valid CSS color, for example: #333",
      "light": "A valid CSS color, for example: #333",
      "lighter": "A valid CSS color, for example: #333",
      "dark": "A valid CSS color, for example: #333",
      "darker": "A valid CSS color, for example: #333",
      "pale": "A valid CSS color, for example: #333",
      "paler": "A valid CSS color, for example: #333",
      "contrast": "A valid CSS color, for example: #333"
    }
  }
}
```

- I emphasize that this way, you can have multiple themes and the name of these theme files will be in `constants/stylesheets/themes/NAME_OF_YOUR_THEME.json` format. The `NAME_OF_YOUR_THEME` placeholder doesn't have any specific preferences and is obviously the name of your theme, so you can fill it with any word you want, although I recommend `LIGHT`, `DARK`, etc.
- See the [colors document](./docs/colors.md) to understand the definition for each color variation.

Doing that, StyleWiz will provide you a **minified** CSS file like below:

```css
:root[data-theme="LIGHT"] {
  --color-brand-primary-main: #f6be89;
  --color-bg-primary-main: #f5f5f5;
  --color-text-primary-main: #151515;
  .
  .
  .
}
```

And you can use these variables like: `var(--color-brand-primary-main)`. But using CSS variables in your code is not much of an interesting approach, right? hang in there, we have a far more intriguing workaround at the end of this document that will be the answer to your needs most of the time.

</details>

<br />

#### 2. Breakpoints

With StyleWiz you can add your desired breakpoints so that StyleWiz can use it to generate responsive designs for you and know how to behave across device or viewport sizes. For that, create a file named `breakpoints.json` in `constantsDir`(`constants/stylesheets/breakpoints.json` by default) and fill it with values in the format mentioned below:

<details>

<summary>
  <strong>Click to expand the format</strong>
</summary>

```json
{
  "xs": "a number in px, like 414",
  "sm": "a number in px, like 576",
  "md": "a number in px, like 768",
  "lg": "a number in px, like 992",
  "xl": "a number in px, like 1200",
  "xxl": "a number in px, like 1400"
}
```

</details>

These breakpoints will play a crucial role in creating both [responsive typographies](#3-typographies) and [responsive stylesheets](#responsive-stylesheets), which will be explained in more detail shortly.

<br />

#### 3. Typographies

Since we defined breakpoints for different viewport sizes, StyleWiz offers a way to have different font sizes based on the current viewport size. for that, create a file named `typographies.json` in `constantsDir`(`constants/stylesheets/typographies.json` by default) and fill it with values in the format mentioned below:

<details>

<summary>
  <strong>Click to expand the format</strong>
</summary>

```json
{
  "default": {
    "h-xxl": { "fontSize": "a number in px, like 32" },
    "h-xl": { "fontSize": "a number in px, like 26" },
    "h-lg": { "fontSize": "a number in px, like 24" },
    "h-md": { "fontSize": "a number in px, like 20" },
    "h-sm": { "fontSize": "a number in px, like 18" },
    "lg": { "fontSize": "a number in px, like 16" },
    "md": { "fontSize": "a number in px, like 14" },
    "sm": { "fontSize": "a number in px, like 12" },
    "xsm": { "fontSize": "a number in px, like 10" }
  },
  // a breakpoint key, for example:
  "sm": {
    "h-xxl": { "fontSize": "a number in px, for example: 42" },
    "h-xl": { "fontSize": "a number in px, for example: 34" },
    "h-lg": { "fontSize": "a number in px, for example: 28" },
    "h-md": { "fontSize": "a number in px, for example: 24" },
    "h-sm": { "fontSize": "a number in px, for example: 20" },
    "lg": { "fontSize": "a number in px, for example: 18" },
    "md": { "fontSize": "a number in px, for example: 16" },
    "sm": { "fontSize": "a number in px, for example: 14" },
    "xsm": { "fontSize": "a number in px, for example: 12" }
  },
  // or
  "lg": {
    "h-xxl": { "fontSize": "a number in px, for example: 58" },
    "h-xl": { "fontSize": "a number in px, for example: 42" },
    "h-lg": { "fontSize": "a number in px, for example: 34" },
    "h-md": { "fontSize": "a number in px, for example: 28" },
    "h-sm": { "fontSize": "a number in px, for example: 24" },
    "lg": { "fontSize": "a number in px, for example: 20" },
    "md": { "fontSize": "a number in px, for example: 18" },
    "sm": { "fontSize": "a number in px, for example: 16" },
    "xsm": { "fontSize": "a number in px, for example: 14" }
  }
}
```

- The `default` key is a reserved word and its values will be applied to all viewport sizes unless another more specific viewport overrides them (mobile-first).

- The _sm_ and _lg_ keys, are breakpoints and can be any of the keys mentioned in the breakpoints section.

Doing that, StyleWiz will provide you a **minified** CSS file like below:

```css
:root {
  --font-size-h-xxl: 32px;
  .
  .
  .
  --font-size-xsm: 10px;
}
@media (min-width: 576px) {
  :root {
    --font-size-h-xxl: 42px;
    .
    .
    .
    --font-size-xsm: 12px;
  }
}
@media (min-width: 992px) {
  :root {
    --font-size-h-xxl: 58px;
    .
    .
    .
    --font-size-xsm: 14px;
  }
}
```

You can use these variables like: `var(--font-size-h-xxl)` and don't worry about what viewport you are in, CSS will take care of that and will recognize what value to return. But using CSS variables in your code is not much of an interesting approach, right? hang in there, we have a far more intriguing workaround at the end of this document that will be the answer to your needs most of the time.

</details>

<br />

#### 4. Spacings

Using StyleWiz, you no longer have to worry about margins and paddings and whether you need to use what value for them. Just create a file named `spacings.json` in `constantsDir`(`constants/stylesheets/spacings.json` by default) and fill it with values in the format mentioned below:

<details>

<summary>
  <strong>Click to expand the format</strong>
</summary>

```json
{
  "auto": "auto",
  "0": "0rem",
  "0_5": "a value for margin & padding, like 0.125rem",
  "1": "a value for margin & padding, like 0.25rem",
  "2": "a value for margin & padding, like 0.5rem",
  "3": "a value for margin & padding, like 0.75rem",
  "4": "a value for margin & padding, like 1rem",
  "5": "a value for margin & padding, like 1.5rem",
  "6": "a value for margin & padding, like 2rem",
  "7": "a value for margin & padding, like 3rem",
  "8": "a value for margin & padding, like 5rem"
}
```

With this approach, you don't need to use values with units inside of your code or try to remember them, you only need to mention the corresponding shorthands, for example, `1` for `0.25rem`.

Doing that, StyleWiz will provide you a **minified** CSS file like below:

```css
:root {
  --spacing-0: 0rem;
  --spacing-0_5: 0.125rem;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.5rem;
  --spacing-6: 2rem;
  --spacing-7: 3rem;
  --spacing-8: 5rem;
  --spacing-auto: auto;
}
```

And you can use these variables like: `var(--spacing-1)`. But using CSS variables in your code is not much of an interesting approach, right? hang in there, we have a far more intriguing workaround at the end of this document that will be the answer to your needs most of the time.

</details>

<br />

#### 5. Paces

StyleWiz also handles paces for time-dependent CSS properties like `transition-duration` or `animation-duration`. For that, create a file named `paces.json` in `constantsDir`(`constants/stylesheets/paces.json` by default) and fill it with values in the format mentioned below:

<details>

<summary>
  <strong>Click to expand the format</strong>
</summary>

```json
{
  "x-fast": "a number in seconds, like 0.1",
  "fast": "a number in seconds, like 0.3",
  "normal": "a number in seconds, like 0.6",
  "slow": "a number in seconds, like 0.9",
  "x-slow": "a number in seconds, like 1.5"
}
```

With this approach, you don't need to use values with units inside of your code or try to remember them, you only need to mention the corresponding shorthands, for example, `x-fast` for `0.1s`.

Doing that, StyleWiz will provide you a **minified** CSS file like below:

```css
:root {
  --pace-x-fast: 0.15s;
  --pace-fast: 0.3s;
  --pace-normal: 0.6s;
  --pace-slow: 0.9s;
  --pace-x-slow: 1.5s;
}
```

And you can use these variables like: `var(--pace-x-fast)`. But using CSS variables in your code is not much of an interesting approach, right? hang in there, we have a far more intriguing workaround at the end of this document that will be the answer to your needs most of the time.

</details>

<br />

#### 6. Curves

Like Paces, StyleWiz will handle curves for border radiuses as well. For that, create a file named `curves.json` in `constantsDir`(`constants/stylesheets/curves.json` by default) and fill it with values in the format mentioned below:

<details>

<summary>
  <strong>Click to expand the format</strong>
</summary>

```json
{
  "xlg": "a value for border-radius, like 2rem",
  "lg": "a value for border-radius, like 1.5rem",
  "md": "a value for border-radius, like  1rem",
  "sm": "a value for border-radius, like 0.5rem",
  "xsm": "a value for border-radius, like 0.25rem",
  "xxsm": "a value for border-radius, like 0.125rem",
  "circle": "50%"
}
```

With this approach, you don't need to use values with units inside of your code or try to remember them, you only need to mention the corresponding shorthands, for example, `sm` for `0.5rem`.

Doing that, StyleWiz will provide you a **minified** CSS file like below:

```css
:root {
  --curve-xlg: 2rem;
  .
  .
  .
  --curve-circle: 50%;
}
```

And you can use these variables like: `var(--curve-circle)`. But using CSS variables in your code is not much of an interesting approach, right? hang in there, we have a far more intriguing workaround at the end of this document that will be the answer to your needs most of the time.

</details>

<br />

#### 7. Shadows

Like Curves & Paces, StyleWiz will handle shadows for box shadows as well. For that, create a file named `shadows.json` in `constantsDir`(`constants/stylesheets/shadows.json` by default) and fill it with values in the format mentioned below:

<details>

<summary>
  <strong>Click to expand the format</strong>
</summary>

```json
{
  "sm": "a value for box-shadow, like 0px 1px 3px var(--color-text-primary-pale)",
  "md": "a value for box-shadow, like 0px 1px 10px var(--color-text-primary-pale)",
  "lg": "a value for box-shadow, like 0px 3px 14px 2px var(--color-text-primary-pale)",
  "xlg": "a value for box-shadow, like 0px 8px 38px 7px var(--color-text-primary-pale)"
}
```

With this approach, you don't need to use messy shadow values inside of your code or try to remember them, you only need to mention the corresponding shorthands, for example, `sm` for `0px 1px 3px var(--color-text-primary-pale)`.

</details>

<br />

Doing that, StyleWiz will provide you a **minified** CSS file like below:

```css
:root {
  --shadow-sm: 0px 1px 3px var(--color-text-primary-pale);
  --shadow-md: 0px 1px 10px var(--color-text-primary-pale);
  --shadow-lg: 0px 3px 14px 2px var(--color-text-primary-pale);
  --shadow-xlg: 0px 8px 38px 7px var(--color-text-primary-pale);
}
```

And you can use these variables like: `var(--shadow-sm)`. But using CSS variables in your code is not much of an interesting approach, right? hang in there, we have a far more intriguing workaround at the end of this document that will be the answer to your needs most of the time.

### Generating Global Stylesheets

As I mentioned, StyleWiz generates minified global stylesheets based on the configuration files you provided. For that you need to run this CLI command in order to generate minified CSS files.

```sh
style-wiz
```

In case you got the `style-wiz: command not found` error, you can replace `style-wiz` with one of the following options:

1. Add a new script in `package.json` like this:

```json
{
  "scripts": {
    "stylesheets": "style-wiz"
  }
}
```

And run it like this:

```sh
yarn stylesheets
```

This is what you do in most of the npm packages.

2. Point to the exact path of the generated binary:

Ignore this option if the first one works for you.

```sh
node_modules/.bin/style-wiz
```

#### Constants Directory

StyleWiz looks for `constantsDir` placed in `constants/stylesheets` by default. If you desire to override this default behavior, you can do so like this:

```sh
style-wiz constantsDir=stylesheets/constants
```

#### Destination Directory

StyleWiz places minified generated files in `public/stylesheets/style-wiz` by default. If you desire to override this default behavior, you can do so like this:

```sh
style-wiz destinationDir=ANOTHER/PATH/style-wiz
```

#### Using minified stylesheets

Once you run the above commands with preferred arguments, StyleWiz will generate some minified stylesheets in the `destinationDir` like below:

- public
  - stylesheets
    - style-wiz
      - themes.min.css
      - curves.min.css
      - paces.min.css
      - shadows.min.css
      - spacings.min.css
      - typographies.min.css
      - index.css

all the files with `public/stylesheets/style-wiz/*.min.css` format was automatically added to `.gitignore` by StyleWiz. There is also a barrel file(index.css) which contains the below content:

```css
@import url(./themes.min.css);
@import url(./paces.min.css);
@import url(./curves.min.css);
@import url(./shadows.min.css);
@import url(./spacings.min.css);
@import url(./typographies.min.css);
@import url(./breakpoints.min.css);
```

This file is responsible for gathering all of the minified stylesheets together so you only have one file to import to your stylesheets. It's your decision to make where you want to import this file but all of the projects no matter which architecture they use probably have an `index.css` file, so it's probably a good place for the barrel file to be imported to.

```css
/* index.css or src/index.css or ... */
@import url("public/stylesheets/style-wiz/index.css");
```

The above path will change if you [customize the destination directory](#destination-directory).

### Components

Powered by [Goober](https://goober.rocks)(an alternative to Styled Components), StyleWiz offers a collection of styled React components inspired by Material UI's popular `Box` and `Typography` components, enhancing your development experience.

```tsx
import { Div } from "style-wiz";

<Div bg="bg-primary-main" curve="sm" mx="3" width="100px">
  ...
</Div>;
```

```tsx
import { Text } from "style-wiz";

<Text color="text-primary-main" size="sm">
  ...
</Text>;
```

This way you don't need to prefix CSS variables and they are available in a more compelling manner.

Explore a list of accessible properties for the `Div` component available [here](./docs/components/div.md),
and access a list of available attributes for the `Text` component [here](./docs/components/text.md),
accompanied by their respective definitions.

StyleWiz focuses on CSS minification, prioritizing file size optimization without compromising performance.

To ensure the reliability and quality of the StyleWiz package, comprehensive unit tests have been implemented using Jest. The styled React components are thoroughly tested using React Testing Library, guaranteeing robustness and compatibility with your projects.

Get started with StyleWiz today and unlock the potential of effortless CSS generation with JSON-powered workflows. Let StyleWiz handle the heavy lifting while you focus on creating beautiful and performant web applications.

### Usage With Next.js

Like Goober and other stylesheet-related libraries, you need to do some extra stuff in order to make StyleWiz work with [next.js](https://nextjs.org). For that open the \_document.jsx file and add the below code to it:

```ts
import { extractCss } from "goober";
import { extractCss as styleWizExtractCss } from "style-wiz";

export default class Document extends NextDocument<Props> {
  static async getInitialProps({
    renderPage,
  }: DocumentContext): Promise<DocumentInitialProps> {
    const page = await renderPage();
    const css = `${extractCss()} ${styleWizExtractCss()}`;

    return { ...page, css };
  }

  render() {}
}
```

Since this library relies on Goober, the approach you need to take is pretty much the same as [Goober's approach](https://github.com/vercel/next.js/tree/canary/examples/with-goober).

### Responsive Stylesheets

StyleWiz lacks access to stylesheet constants at runtime, preventing it from generating responsive stylesheets with media queries using responsive breakpoints. Accessing stylesheet constants at runtime requires a provider(which StyleWiz doesn't have) or `fs` module which interferes with client-side rendering and edge runtime.

However, although StyleWiz does not directly support responsive stylesheets, there is a workaround to achieve responsive styling. You previously defined a breakpoints config in the [breakpoints section](#2-breakpoints), which was used for creating responsive typographies, you can also utilize it to create responsive stylesheets. Follow this workaround:

Create a helper function named `responsiveStyles`. You can place it wherever it fits best in your project architecture; for instance, in `helpers/responsiveStyles.ts`:

````ts
import breakpoints from "@constants/stylesheets/breakpoints.json";
import type { CSSAttribute } from "goober";

/**
 * This method helps us in generating responsive stylesheet objects
 * @param breakpoint the lower bound breakpoint,
 * the stylesheets will apply to layouts with a width bigger than this breakpoint value(mobile first)
 * @param styles CSS stylesheets object
 * @example
 * ```tsx
 * <Div styles={responsiveStyles("md", { display: "flex" })} />
 * ```
 */
const responsiveStyles = (breakpoint: Breakpoints, styles: CSSAttribute) => {
  if (styles) {
    return { [`@media (min-width: ${breakpoints[breakpoint]}px)`]: styles };
  }
  return {};
};

export default responsiveStyles;
````

As its jsDoc clearly explains, the `responsiveStyles` helper is designed to generate responsive stylesheet objects. It takes two parameters: the first one is the identifier for the lower bound breakpoint, and the second one is just an ordinary CSS object(it will have complete intellisense).

The implementation illustrates that `responsiveStyles` takes the breakpoint key (e.g., "sm") and generates stylesheets that apply to layouts with a width larger than the breakpoint's value (e.g., "576px"). By default, it follows a mobile-first approach, but you can customize this behavior if needed. For usage, refer to the provided jsDoc or follow this example:

```tsx
import { Div } from "style-wiz";

const FancyComponent = (props) => {
  return (
    <>
      <Div styles={responsiveStyles("sm", { display: "none" })}>...</Div>
      {/* You can even mix them up: */}
      <Div
        // "100px" for screens with a width smaller than the `sm` breakpoint
        height="100px"
        styles={{
          // "200px" for screens with a width bigger than the `sm` breakpoint(and smaller than the `md` breakpoint)
          ...responsiveStyles("sm", { height: "200px" }),
          // "200px" for screens with a width bigger than the `md` breakpoint(and smaller than the `lg` breakpoint)
          ...responsiveStyles("md", { height: "300px" }),
          // "200px" for screens with a width bigger than the `lg` breakpoint
          ...responsiveStyles("lg", { height: "400px" }),
        }}
      >
        ...
      </Div>
    </>
  );
};
```

### Pseudo Classes And Pseudo Elements

Although I personally prefer creating separate styled-components to contain complex stylesheets, including pseudo-classes and pseudo-elements, it is still possible to style them using StyleWiz. Here's how you can achieve it:

```tsx
import { Div } from "style-wiz";

const FancyComponent = (props) => {
  return (
    <Div
      styles={{
        "&:hover": {
          // hover pseudo-class stylesheets
        },
        "&:before": {
          // before pseudo-element stylesheets
        },
        "&:after": {
          // after pseudo-element stylesheets
        },
      }}
    >
      ...
    </Div>
  );
};
```
