"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._ = exports.clamp = void 0;
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
function clamp(value, min, max) {
    // return Math.min(Math.max(number, min), max);
    if (value < min)
        return min;
    if (max && value > max)
        return max;
    return value;
    // return number > max ? max : number < min ? min : number;
}
exports.clamp = clamp;
/**
 * Switch two items in an array.
 *
 * @param {Array<T>}  array     Array to switch items from.
 * @param {number}    iIndex    First item to switch position.
 * @param {number}    jIndex    Second item to switch position.
 *
 * @return {Array<T>} Return a new array
 */
function exchange(array, iIndex, jIndex) {
    var clonedArray = cloneArray(array);
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
function cloneArray(arr) {
    var clonedArr = __spreadArray([], arr);
    return clonedArr;
}
exports._ = {
    cloneArray: cloneArray,
    exchange: exchange
};
//# sourceMappingURL=hidash.js.map