"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keepNumberBetwwen = void 0;
/**
 * Keep the input number between two values
 *
 * @param {number}   number   Number to constrain.
 * @param {number}   min      Minimal value.
 * @param {number}   max      Maximum value.
 *
 * @return {type} Return a number
 */
function keepNumberBetwwen(number, min, max) {
    return number > max ? max : number < min ? min : number;
}
exports.keepNumberBetwwen = keepNumberBetwwen;
//# sourceMappingURL=keepNumberBetween.js.map