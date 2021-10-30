/**
 * Convert seconds to milliseconds.
 *
 * @param {number}   seconds    Number of seconds.
 *
 * @return {number} Return the number of milliseconds
 */
export declare function secondsToMilliseconds(seconds: number): number;
/**
 * Convert milliseconds to seconds.
 *
 * @see  Function/class relied on
 *
 * @param {number}   milliseconds    Number of milliseconds.
 *
 * @return {number} Return the number of seconds
 */
export declare function millisecondsToSeconds(milliseconds: number): number;
/**
 * Equal power gain scale. Good for cross-fading.
 * @param  percent (0-1)
 */
export declare function equalPowerScale(percent: number): number;
/**
 * Convert decibels into gain.
 */
export declare function dbToGain(db: number): number;
/**
 * Convert gain to decibels.
 */
export declare function gainToDb(gain: number): number;
/**
 * Convert an interval (in semitones) to a frequency ratio.
 * @param interval the number of semitones above the base note
 * @example
 * Tone.intervalToFrequencyRatio(0); // 1
 * Tone.intervalToFrequencyRatio(12); // 2
 * Tone.intervalToFrequencyRatio(-12); // 0.5
 */
export declare function intervalToFrequencyRatio(interval: number): number;
export declare function getA4(): number;
export declare function setA4(freq: number): void;
/**
 * Convert a frequency value to a MIDI note.
 * @param frequency The value to frequency value to convert.
 * @example
 * Tone.ftom(440); // returns 69
 */
export declare function frequencyToMidiNote(frequency: number): number;
/**
 * Convert a frequency to a floating point midi value
 */
export declare function frequencyToMidiNoteFloat(frequency: number): number;
/**
 * Convert a MIDI note to frequency value.
 * @param  midi The midi number to convert.
 * @return The corresponding frequency value
 * @example
 * Tone.mtof(69); // 440
 */
export declare function midiToFrequency(midi: number): number;
