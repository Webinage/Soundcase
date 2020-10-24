/**
 * Volume is expressed in percentage
 */

/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @see  Function/class relied on
 *
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @return {type} Return value description.
 */
export function dbToVolume(db: number) {
  return Math.pow(10, 0.05 * db);
}

/**
 * Volume is expressed in percentage
 */

/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @see  Function/class relied on
 *
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @return {type} Return value description.
 */
export function volumeToDb(volume: number) {
  return 20 * Math.log10(volume);
}
