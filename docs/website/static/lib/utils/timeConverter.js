"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.millisecondsToSeconds = exports.secondsToMilliseconds = void 0;
/**
 * Convert seconds to milliseconds.
 *
 * @param {number}   seconds    Number of seconds.
 *
 * @return {number} Return the number of milliseconds
 */
function secondsToMilliseconds(seconds) {
    return seconds * 1000;
}
exports.secondsToMilliseconds = secondsToMilliseconds;
/**
 * Convert milliseconds to seconds.
 *
 * @see  Function/class relied on
 *
 * @param {number}   milliseconds    Number of milliseconds.
 *
 * @return {number} Return the number of seconds
 */
function millisecondsToSeconds(milliseconds) {
    return milliseconds / 1000;
}
exports.millisecondsToSeconds = millisecondsToSeconds;
//# sourceMappingURL=timeConverter.js.map