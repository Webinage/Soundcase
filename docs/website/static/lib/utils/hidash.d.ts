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
