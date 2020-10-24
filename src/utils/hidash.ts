/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @see  Function/class relied on
 *
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @return {type} Return value description.
 */
function exchange<T>(array: T[], iIndex: number, jIndex: number): T[] {
  let clonedArray = cloneArray(array);
  clonedArray.splice(iIndex, 1, array[jIndex]);
  clonedArray.splice(jIndex, 1, array[iIndex]);
  return clonedArray;
}

/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @see  Function/class relied on
 *
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @return {type} Return value description.
 */
function cloneArray<T>(arr: T[]): T[] {
  const clonedArr = [...arr];
  return clonedArr;
}

export const _ = {
  cloneArray,
  exchange
};
