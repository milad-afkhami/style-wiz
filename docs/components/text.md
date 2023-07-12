# Text Component

The `Text` component is a powerful and versatile tool for managing text styles and typography within your web application. It provides a simple and consistent way to control the appearance and behavior of text elements.

The `Text` component allows you to define and apply typographic styles to your text in a declarative manner. It offers a wide range of customization options, including font size, font weight, text color, text alignment, line height, and etc.

By using the `Text` component and its advanced features, you can efficiently manage and style text elements, ensuring a consistent and visually pleasing typographic experience across your web application.

## Usage

```tsx
import { Text } from "style-wiz";

<Text color="text-primary-main" size="sm">
  ...
</Text>;
```

## Props

Here is a full list of available props in order to get the most out of this component.

<!-- Links: -->

[Typography]: https://github.com/milad-afkhami/style-wiz/blob/main/src/typings/stylesheets.d.ts#L20
[Colors]: https://github.com/milad-afkhami/style-wiz/blob/main/src/typings/stylesheets.d.ts#L11
[MDN/text-transform]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform#values
[MDN/user-select]: https://developer.mozilla.org/en-US/docs/Web/CSS/user-select#values
[MDN/text-align]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align#values

|     **Property**      |                      **Summary**                      |                 **type**                 | **defaultValue** |        **additionalDescription**         |
| :-------------------: | :---------------------------------------------------: | :--------------------------------------: | :--------------: | :--------------------------------------: |
|          as           |           change the rendered element type            |                 unknown                  |      "span"      |
|         size          |          controls typography of the element           | [Typography] \| CSSAttribute["fontSize"] |    undefined     |
|         color         |          controls text color of the element           |                 [Colors]                 |    undefined     |                                          |
|      hoverColor       |    controls text color of the element when hovered    |                 [Colors]                 |    undefined     |                                          |
|       maxLines        |            controls line clamp of the text            |                  number                  |    undefined     |                                          |
|         bold          |          controls font weight of the element          |                 boolean                  |    undefined     |                                          |
|       truncate        |          controls truncation of the element           |                 boolean                  |    undefined     |                                          |
|       transform       |  controls transformation of the text inside element   |           [MDN/text-transform]           |    undefined     |                                          |
|      userSelect       |         represents css `user-select` property         |            [MDN/user-select]             |    undefined     |                                          |
|         align         |         represents css `text-align` property          |             [MDN/text-align]             |    undefined     |                                          |
|        styles         |           represents html `style` attribute           |              CSSProperties               |    undefined     | it doesn't render props as inline styles |
| other HTML attributes | All of the available Attributes for HTML span element |        HTMLAttributes\<Element\>         |        -         |                                          |
