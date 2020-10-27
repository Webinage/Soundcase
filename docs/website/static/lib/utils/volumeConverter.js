"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeToDb = exports.dbToVolume = void 0;
/**
 * Convert decibels to percentage.
 * Volume is expressed in percentage
 *
 * @param {number}   db    Volume in decibels.
 *
 * @return {number} Return the volume in percentage.
 */
function dbToVolume(db) {
    return Math.pow(10, 0.05 * db);
}
exports.dbToVolume = dbToVolume;
/**
 * Convert percentage to decibels.
 * Volume is expressed in percentage
 *
 * @param {number}   volume    Volume in percentage.
 *
 * @return {number} Return the volume in decibels.
 */
function volumeToDb(volume) {
    return 20 * Math.log10(volume);
}
exports.volumeToDb = volumeToDb;
//# sourceMappingURL=volumeConverter.js.map