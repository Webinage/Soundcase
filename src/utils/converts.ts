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

/**
 * Equal power gain scale. Good for cross-fading.
 * @param  percent (0-1)
 */
export function equalPowerScale(percent: number): number {
  const piFactor = 0.5 * Math.PI;
  return Math.sin(percent * piFactor);
}

/**
 * Convert decibels into gain.
 */
export function dbToGain(db: number): number {
  //   return Math.pow(10, 0.05 * db);
  return Math.pow(10, db / 20);
}

/**
 * Convert gain to decibels.
 */
export function gainToDb(gain: number): number {
  //   return 20 * Math.log10(volume);
  return 20 * (Math.log(gain) / Math.LN10);
}

/**
 * Convert an interval (in semitones) to a frequency ratio.
 * @param interval the number of semitones above the base note
 * @example
 * Tone.intervalToFrequencyRatio(0); // 1
 * Tone.intervalToFrequencyRatio(12); // 2
 * Tone.intervalToFrequencyRatio(-12); // 0.5
 */
export function intervalToFrequencyRatio(interval: number): number {
  return Math.pow(2, interval / 12);
}

/**
 * The Global [concert tuning pitch](https://en.wikipedia.org/wiki/Concert_pitch) which is used
 * to generate all the other pitch values from notes. A4's values in number.
 */
let A4: number = 440;

export function getA4(): number {
  return A4;
}

export function setA4(freq: number): void {
  A4 = freq;
}

/**
 * Convert a frequency value to a MIDI note.
 * @param frequency The value to frequency value to convert.
 * @example
 * Tone.ftom(440); // returns 69
 */
export function frequencyToMidiNote(frequency: number): number {
  return Math.round(frequencyToMidiNoteFloat(frequency));
}

/**
 * Convert a frequency to a floating point midi value
 */
export function frequencyToMidiNoteFloat(frequency: number): number {
  return 69 + 12 * Math.log2(frequency / A4);
}

/**
 * Convert a MIDI note to frequency value.
 * @param  midi The midi number to convert.
 * @return The corresponding frequency value
 * @example
 * Tone.mtof(69); // 440
 */
export function midiToFrequency(midi: number): number {
  return A4 * Math.pow(2, (midi - 69) / 12);
}
