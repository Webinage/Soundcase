/**
 * Convert seconds to milliseconds.
 *
 * @param {number}   seconds    Number of seconds.
 *
 * @return {number} Return the number of milliseconds
 */
export function secondsToMilliseconds(seconds: number) {
  return seconds * 1000;
}

/**
 * Convert milliseconds to seconds.
 *
 * @see  Function/class relied on
 *
 * @param {number}   milliseconds    Number of milliseconds.
 *
 * @return {number} Return the number of seconds
 */
export function millisecondsToSeconds(milliseconds: number) {
  return milliseconds / 1000;
}
