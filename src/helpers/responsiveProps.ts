// import mediaFeatures from "@configs/mediaFeatures";
// import __reduce from "lodash/reduce";
// import type DivProps from "@components/Div/props";

// /**
//  * @description
//  * Wraps arrived responsive props into corresponded media queries
//  *
//  * @example
//  * responsiveProps({ sm: { mx: 3 } });
//  *
//  * // returns: { "@media (min-width: 576px)": { mx: 3 } }
//  */
// export default function responsiveProps(
//   responsive: NonNullable<DivProps["responsive"]>
// ): Dictionary<DivProps> {
//   return __reduce(
//     responsive,
//     (result, rspValue, rspKey) => {
//       if (rspValue) {
//         // eslint-disable-next-line no-param-reassign
//         result[`@media ${mediaFeatures[rspKey as MediaFeatures]}`] = rspValue;
//       }
//       return result;
//     },
//     {} as Dictionary<DivProps>
//   );
// }
