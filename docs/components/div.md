# Div Component

`Div` is a versatile and flexible CSS-in-JS component that allows you to create layout structures
and apply styling to your React applications with a great developer experience.
It serves as a fundamental building block for designing and arranging elements within your user interface.

With the `Div` component, you can easily control the spacing, alignment, positioning,
and other styling properties since it provides a wide range of props and styling options,
enabling you to customize the appearance and behavior of the components.

The `Div` component supports both its own styling solutions and also CSS properties,
allowing you to apply the powerful CSS-in-JS API for styling consistency and maintainability or leverage inline styles.

Whether you need to create a simple layout, group related elements, or implement complex designs,
the `Div` component provides a simple and intuitive way to achieve your desired visual structure.

In addition to its layout capabilities, the `Div` component also supports all other HTML div element properties such as role, className, onClick, and etc.

## Usage

```tsx
import { Div } from "style-wiz";

<Div bg="bg-primary-main" curve="sm" mx="3" width="100px">
  ...
</Div>;
```

## Props

Here is a full list of available props in order to get the most out of this component.

<!-- Links: -->

[Colors]: ../colors.md
[Spacings]: https://github.com/milad-afkhami/style-wiz/blob/main/src/typings/stylesheets.ts#L3
[Paces]: https://github.com/milad-afkhami/style-wiz/blob/main/src/typings/stylesheets.ts#L32
[Shadows]: https://github.com/milad-afkhami/style-wiz/blob/main/src/typings/stylesheets.ts#L30
[Curves]: https://github.com/milad-afkhami/style-wiz/blob/main/src/typings/stylesheets.ts#L23
[BorderSide]: https://github.com/milad-afkhami/style-wiz/blob/main/src/components/Div/props.ts#L4-L10
[Dimensions]: https://github.com/milad-afkhami/style-wiz/blob/main/src/components/Div/props.ts#L11-L18
[FlexProps]: https://github.com/milad-afkhami/style-wiz/blob/main/src/components/Div/props.ts#L22-L27
[GridProps]: https://github.com/milad-afkhami/style-wiz/blob/main/src/components/Div/props.ts#L28-L36

|     **Property**      |                             **Summary**                             |                                      **type**                                       | **defaultValue** |               **additionalDescription**               |
| :-------------------: | :-----------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :--------------: | :---------------------------------------------------: |
|          as           |                  change the rendered element type                   |                                       unknown                                       |      "span"      |
|         width         |                   represents css `width` property                   |                                       string                                        |    undefined     |                                                       |
|          mw           |                 represents css `min-width` property                 |                                       string                                        |    undefined     |                                                       |
|          Mw           |                 represents css `max-width` property                 |                                       string                                        |    undefined     |                                                       |
|        height         |                  represents css `height` property                   |                                       string                                        |    undefined     |                                                       |
|          mh           |                represents css `min-height` property                 |                                       string                                        |    undefined     |                                                       |
|          Mh           |                represents css `max-height` property                 |                                       string                                        |    undefined     |                                                       |
|    hiddenScrollbar    |             makes scrollbar hidden for current element              |                                       boolean                                       |    undefined     |                                                       |
|     thinScrollbar     |              makes scrollbar thin for current element               |                                       boolean                                       |    undefined     |                                                       |
|    thickScrollbar     |              makes scrollbar thick for current element              |                                       boolean                                       |    undefined     |                                                       |
|      matchParent      |                 match dimensions of parent element                  |                                       boolean                                       |    undefined     |                                                       |
|         curve         |                   controls radius of the element                    |                                      [Curves]                                       |    undefined     |                                                       |
|        shadow         |                   controls shadow of the element                    |                                      [Shadows]                                      |    undefined     |                                                       |
|         pace          |                 controls transition of the element                  |                                       [Paces]                                       |    undefined     |                                                       |
|        border         |                        controls border color                        |                                      [Colors]                                       |    undefined     | sets `border-width` to `1px` if no `borderW` provided |
|        borderW        |               represents css `border-width` property                |                                       string                                        |      "1px"       |                                                       |
|      borderSide       |                controls side of the border provided                 |                                    [BorderSide]                                     |        ""        |                                                       |
|          bg           |              controls background color of the element               |                                      [Colors]                                       |    undefined     |                                                       |
|        bgImage        |              represent css `background-image` property              |                                       string                                        |    undefined     |                                                       |
|         color         |                 controls text color of the element                  |                                      [Colors]                                       |    undefined     |                                                       |
|        opacity        |                  represent css `opacity` property                   |                                  number \| string                                   |    undefined     |                                                       |
|        hoverBg        |        controls background color of the element when hovered        |                                      [Colors]                                       |    undefined     |                                                       |
|      hoverColor       |           controls text color of the element when hovered           |                                      [Colors]                                       |    undefined     |                                                       |
|      hoverShadow      |             controls shadow of the element when hovered             |                                       Shadows                                       |    undefined     |                                                       |
|           m           |                   controls margin of the element                    |                           [Spacings] \| Array\<Spacings\>                           |    undefined     |                                                       |
|        mStart         |                controls start margin of the element                 |                                     [Spacings]                                      |    undefined     |                                                       |
|         mEnd          |                 controls end margin of the element                  |                                     [Spacings]                                      |    undefined     |                                                       |
|          mx           |              controls horizontal margin of the element              |                                     [Spacings]                                      |    undefined     |                                                       |
|          my           |               controls vertical margin of the element               |                                     [Spacings]                                      |    undefined     |                                                       |
|          mt           |                 controls top margin of the element                  |                                     [Spacings]                                      |    undefined     |                                                       |
|          mb           |                controls bottom margin of the element                |                                     [Spacings]                                      |    undefined     |                                                       |
|          mr           |                controls right margin of the element                 |                                     [Spacings]                                      |    undefined     |                                                       |
|          ml           |                 controls left margin of the element                 |                                     [Spacings]                                      |    undefined     |                                                       |
|           p           |                   controls padding of the element                   |                           [Spacings] \| Array\<Spacings\>                           |    undefined     |                                                       |
|        pStart         |                controls start padding of the element                |                                     [Spacings]                                      |    undefined     |                                                       |
|         pEnd          |                 controls end padding of the element                 |                                     [Spacings]                                      |    undefined     |                                                       |
|          px           |             controls horizontal padding of the element              |                                     [Spacings]                                      |    undefined     |                                                       |
|          py           |              controls vertical padding of the element               |                                     [Spacings]                                      |    undefined     |                                                       |
|          pt           |                 controls top padding of the element                 |                                     [Spacings]                                      |    undefined     |                                                       |
|          pb           |               controls bottom padding of the element                |                                     [Spacings]                                      |    undefined     |                                                       |
|          pr           |                controls right padding of the element                |                                     [Spacings]                                      |    undefined     |                                                       |
|          pl           |                controls left padding of the element                 |                                     [Spacings]                                      |    undefined     |                                                       |
|         flex          |                    controls flex of the element                     |                                     [FlexProps]                                     |    undefined     |                                                       |
|      flexPortion      |                   represents css `flex` property                    |      [MDN/flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex#values)       |    undefined     |                                                       |
|         grid          |                     controls configs of a grid                      |                                     [GridProps]                                     |    undefined     |                                                       |
|        display        |                  represents css `display` property                  |   [MDN/display](https://developer.mozilla.org/en-US/docs/Web/CSS/display#values)    |    undefined     |                                                       |
|          gap          |                  controls flex gap of the element                   |                                     [Spacings]                                      |    undefined     |                                                       |
|       overflow        |                 represents css `overflow` property                  |  [MDN/overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#values)   |    undefined     |                                                       |
|       overflowX       |                represents css `overflow-x` property                 | [MDN/overflowX](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x#values) |    undefined     |                                                       |
|       overflowY       |                represents css `overflow-y` property                 | [MDN/overflowY](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y#values) |    undefined     |                                                       |
|        cursor         |                  represents css `cursor` property                   |    [MDN/cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#values)     |    undefined     |                                                       |
|       position        |                 represents css `position` property                  |  [MDN/position](https://developer.mozilla.org/en-US/docs/Web/CSS/position#values)   |    undefined     |                                                       |
|      dimensions       | controls dimensions of and absolutely/relatively positioned element |                                    [Dimensions]                                     |    undefined     |                                                       |
|        zIndex         |                  represents css `z-index` property                  |    [MDN/zIndex](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index#values)    |    undefined     |                                                       |
|         order         |                   represents css `order` property                   |     [MDN/order](https://developer.mozilla.org/en-US/docs/Web/CSS/order#values)      |    undefined     |                                                       |
|        rotate         |                   controls rotation of an element                   |              "1q" \| "2q" \| "3q" \| "-1q" \| "-2q" \| "-3q" \| number              |    undefined     |                  [x]q === x \* 90deg                  |
|        styles         |                    represents html `style` prop                     |                                    CSSProperties                                    |    undefined     |       it doesn't render props as inline styles        |
| other HTML attributes |        All of the available Attributes for HTML div element         |                              HTMLAttributes\<Element\>                              |        -         |                                                       |
