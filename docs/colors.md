[Div]: ./components/div.md
[Text]: ./components/text.md

# Colors

## 1. Introduction

The StyleWiz design platform incorporates an expansive theme palette that gets used in the [Div] and [Text] components. This documentation outlines the architecture of this theme palette, delving into the significance of each palette, variation, and shade within it.

## 2. Palette Structure

The StyleWiz theme palette comprises a total of 144 colors, thoughtfully categorized across five high-level palettes.

### 2.1. Brand Palette

The "brand" palette involves the selection of specific colors aimed at consistently representing a brand across various design assets.
These colors play a pivotal role in establishing brand identity and fostering recognition.

To enable precise color selection, the brand palette is segmented into two variations: primary and secondary. These variations further encompass tertiary and disabled shades.

In order to achieve more precise color choices, the brand palette is divided into two variations: **primary** and **secondary**.

- **Primary** Colors: These form the foundation of the color palette they are in.

- **Secondary** Colors: Intended to complement primary colors, secondary colors expand the design options. They offer versatility for accents, supporting elements, or alternative choices.

By categorizing colors into "primary" and "secondary" variations, designers can create a structured system that promotes consistency, balance, and accessibility within their designs. These categorizations provide guidance for selecting colors based on their intended roles and maintain coherence throughout a design system.

### 2.2. BG(Background) Palette(Group)

The background palette refers to specific colors that are chosen and included within the palette for the purpose of being used as backgrounds in a design.
These background colors serve as the foundation for the overall visual composition and provide a base for other elements to be placed upon.

In order to achieve more precise color choices, the background palette is divided into four variations: **primary**, **secondary**, **tertiary**, and **disabled**.

- **Primary** colors are a set of colors that form the foundation of the palette they are in.

- **Secondary** colors are used to complement the primary colors and expand the range of available options. They provide additional variety and flexibility when creating designs. Secondary colors can be used for supporting elements, accents, or as alternatives to primary colors when needed.

- **Tertiary** colors are derived from mixing primary and secondary colors within the palette they are in. This variation offers more nuanced shades. Tertiary variation can be used to add depth, richness, or to create gradients within a design. They provide finer control over color choices while maintaining consistency with the overall palette.

- **Disabled** colors , also known as accessibility colors, refer to colors specifically chosen and adjusted to meet accessibility guidelines. These colors are designed to provide sufficient contrast and legibility for users with visual impairments or color vision deficiencies. These colors should meet the minimum contrast ratios recommended by accessibility guidelines to ensure readability and usability for all users.

Like the "brand" palette, categorizing colors into "primary", "secondary", "tertiary", and "disabled" variations, promotes consistency, balance, and accessibility in design.
These categorizations provide guidance for selecting colors based on their intended roles and maintain coherence throughout a design system.

### 2.3. Text Palette(Group)

The text palette refers to the specific colors that are chosen and included within the palette for the purpose of being used for text elements in a design.
These colors are thoughtfully chosen to ensure readability and legibility of the text while complementing the overall design and maintaining visual consistency.

Similar to the prior palettes, the text palette also utilizes "primary", "secondary", "tertiary", and "disabled" variations to enable more precise color choices.

### 2.4. Assistive Palette(Group)

The Assistive palette, also known as status, action, or alert palette, refers to the specific colors
that are chosen to convey different types of messages or indicate various states in a design.
These colors are commonly associated with success, warning, error, and information messages.
Including assistive colors in a color palette helps maintain consistency and clarity when communicating important information to users.

As mentioned, the assistive palette is divided into four variations: "success", "warning", "error", and "info".

- _Success_ colors are set of colors for indicating the successful completion of an action that the user triggered.
- _Warning_ colors are set of colors for potentially dangerous actions or important messages.
- _Error_ colors are set of colors for elements that the user should be made aware of.
- _Info_ colors are set of colors for highlighting neutral information.

### 2.5. Border Palette(Group)

The Border palette refers to the specific colors that are chosen and included within the palette for the purpose of being used in borders or outlines of design elements.
Border colors help delineate boundaries of elements, create visual separation, and add emphasis or structure to the overall design.

To ensure precision in color choices, the border palette is divided into two variations: "dark" and "light".

## 3. Detailed Color Variations

So till now, we have the below structure:

- brand
  - primary
  - secondary
- bg
  - primary
  - secondary
  - tertiary
  - disabled
- text
  - primary
  - secondary
  - tertiary
  - disabled
- assistive
  - success
  - error
  - info
  - warning
- border
  - dark
  - light

Within each of the above variations, 9 distinct shades are employed, rendering the StyleWiz color palette truly comprehensive. These variations are:

- main: The core shade, representing the main shade of the variation.
- hover: The complementary shade for the main shade, activated when hovering over an element with a main shade background.
- light: A lighter iteration shade of the main shade.
- lighter: An even lighter version of the main shade.
- dark: A darker rendition of the main shade.
- darker: An even darker interpretation of the main shade.
- pale: A pale and subdued form of the main shade.
- paler: An even more pale and subdued form of the main shade.
- contrast: A shade intended to provide contrast against the main shade.

## 4. Complete Structure of A Theme Palette

- brand
  - primary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - secondary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
- bg
  - primary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - secondary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - tertiary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - disabled
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
- text
  - primary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - secondary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - tertiary
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - disabled
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
- assistive
  - success
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - error
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - info
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - warning
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
- border
  - dark
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast
  - light
    - main, hover, light, lighter, dark, darker, pale, paler, and contrast

## 5. Glossary

- Theme: representing the theme of our app, for example "light", "dark", "sky", "ocean", and ...
  - Palette: Constituting the top-level grouping in the theme, including "brand", "BG", "text", "assistive", and "border".
    - Variation: Representing categories for precise color selection and maintaining design system coherence.
      - Shade: The lowest level in the theme hierarchy, encompassing specific color values.

With this comprehensive color and theme palette structure, StyleWiz empowers designers to craft visually appealing, accessible, and harmonious designs, effectively conveying brand identity while ensuring user-centricity.
