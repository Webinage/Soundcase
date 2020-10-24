/**
 * Switch two items in an array.
 *
 * @param {Array<T>}  array     Array to switch items from.
 * @param {number}    iIndex    First item to switch position.
 * @param {number}    jIndex    Second item to switch position.
 *
 * @return {Array<T>} Return a new array
 */
function exchange<T>(array: T[], iIndex: number, jIndex: number): T[] {
  let clonedArray = cloneArray(array);
  clonedArray.splice(iIndex, 1, array[jIndex]);
  clonedArray.splice(jIndex, 1, array[iIndex]);
  return clonedArray;
}

/**
 * Clone an array.
 *
 * @see  Function/class relied on
 *
 * @param {Array<T>}   array    Array to clone.
 *
 * @return {Array<T>} Return a new array
 */
function cloneArray<T>(arr: T[]): T[] {
  const clonedArr = [...arr];
  return clonedArr;
}

export const _ = {
  cloneArray,
  exchange
};
