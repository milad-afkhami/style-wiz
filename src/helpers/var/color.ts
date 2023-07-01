/** helps to set color variable */
const colorVar = (color: Colors) => {
  if (!color) return "";

  /**
   * from benchmark POV, one RegExp.test call takes less executing time than three String.includes calls
   *
   * static color names are also supported
   *
   * var(--color-red, red) : there is no --color-red variable so it will fallback to second parameter(red)
   */
  const isStaticColor = /^(rgb|#|var\().*/.test(color);

  return isStaticColor ? color : `var(--color-${color}, ${color})`;
};

export default colorVar;
