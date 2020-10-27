"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._ = void 0;
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
    var clonedArr = __spreadArrays(arr);
    return clonedArr;
}
exports._ = {
    cloneArray: cloneArray,
    exchange: exchange
};
//# sourceMappingURL=hidash.js.map