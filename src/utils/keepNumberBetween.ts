/**
 * Keep the input number between two values
 *
 * @param {number}   number   Number to constrain.
 * @param {number}   min      Minimal value.
 * @param {number}   max      Maximum value.
 *
 * @return {type} Return a number
 */
export function keepNumberBetwwen(number: number, min: number, max: number) {
  return number > max ? max : number < min ? min : number;
}
