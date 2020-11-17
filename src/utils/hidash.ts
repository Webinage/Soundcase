/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} value The number to clamp
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
// TO DO : overload ( min , max , min + max )
export function clamp(value: number, min: number, max?: number) {
  // return Math.min(Math.max(number, min), max);

  if (value < min) return min;
  if (max && value > max) return max;
  return value;

  // return number > max ? max : number < min ? min : number;
}

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
