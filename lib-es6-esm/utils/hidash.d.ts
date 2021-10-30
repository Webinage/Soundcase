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
export declare function clamp(value: number, min: number, max?: number): number;
/**
 * Switch two items in an array.
 *
 * @param {Array<T>}  array     Array to switch items from.
 * @param {number}    iIndex    First item to switch position.
 * @param {number}    jIndex    Second item to switch position.
 *
 * @return {Array<T>} Return a new array
 */
declare function exchange<T>(array: T[], iIndex: number, jIndex: number): T[];
/**
 * Clone an array.
 *
 * @see  Function/class relied on
 *
 * @param {Array<T>}   array    Array to clone.
 *
 * @return {Array<T>} Return a new array
 */
declare function cloneArray<T>(arr: T[]): T[];
export declare const _: {
    cloneArray: typeof cloneArray;
    exchange: typeof exchange;
};
export {};
