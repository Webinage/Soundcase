/**
 * Convert decibels to percentage.
 * Volume is expressed in percentage
 *
 * @param {number}   db    Volume in decibels.
 *
 * @return {number} Return the volume in percentage.
 */
export function dbToVolume(db: number) {
  return Math.pow(10, 0.05 * db);
}

/**
 * Convert percentage to decibels.
 * Volume is expressed in percentage
 *
 * @param {number}   volume    Volume in percentage.
 *
 * @return {number} Return the volume in decibels.
 */
export function volumeToDb(volume: number) {
  return 20 * Math.log10(volume);
}
