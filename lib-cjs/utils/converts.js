"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.midiToFrequency = exports.frequencyToMidiNoteFloat = exports.frequencyToMidiNote = exports.setA4 = exports.getA4 = exports.intervalToFrequencyRatio = exports.gainToDb = exports.dbToGain = exports.equalPowerScale = exports.millisecondsToSeconds = exports.secondsToMilliseconds = void 0;
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
/**
 * Equal power gain scale. Good for cross-fading.
 * @param  percent (0-1)
 */
function equalPowerScale(percent) {
    var piFactor = 0.5 * Math.PI;
    return Math.sin(percent * piFactor);
}
exports.equalPowerScale = equalPowerScale;
/**
 * Convert decibels into gain.
 */
function dbToGain(db) {
    //   return Math.pow(10, 0.05 * db);
    return Math.pow(10, db / 20);
}
exports.dbToGain = dbToGain;
/**
 * Convert gain to decibels.
 */
function gainToDb(gain) {
    //   return 20 * Math.log10(volume);
    return 20 * (Math.log(gain) / Math.LN10);
}
exports.gainToDb = gainToDb;
/**
 * Convert an interval (in semitones) to a frequency ratio.
 * @param interval the number of semitones above the base note
 * @example
 * Tone.intervalToFrequencyRatio(0); // 1
 * Tone.intervalToFrequencyRatio(12); // 2
 * Tone.intervalToFrequencyRatio(-12); // 0.5
 */
function intervalToFrequencyRatio(interval) {
    return Math.pow(2, interval / 12);
}
exports.intervalToFrequencyRatio = intervalToFrequencyRatio;
/**
 * The Global [concert tuning pitch](https://en.wikipedia.org/wiki/Concert_pitch) which is used
 * to generate all the other pitch values from notes. A4's values in number.
 */
var A4 = 440;
function getA4() {
    return A4;
}
exports.getA4 = getA4;
function setA4(freq) {
    A4 = freq;
}
exports.setA4 = setA4;
/**
 * Convert a frequency value to a MIDI note.
 * @param frequency The value to frequency value to convert.
 * @example
 * Tone.ftom(440); // returns 69
 */
function frequencyToMidiNote(frequency) {
    return Math.round(frequencyToMidiNoteFloat(frequency));
}
exports.frequencyToMidiNote = frequencyToMidiNote;
/**
 * Convert a frequency to a floating point midi value
 */
function frequencyToMidiNoteFloat(frequency) {
    return 69 + 12 * Math.log2(frequency / A4);
}
exports.frequencyToMidiNoteFloat = frequencyToMidiNoteFloat;
/**
 * Convert a MIDI note to frequency value.
 * @param  midi The midi number to convert.
 * @return The corresponding frequency value
 * @example
 * Tone.mtof(69); // 440
 */
function midiToFrequency(midi) {
    return A4 * Math.pow(2, (midi - 69) / 12);
}
exports.midiToFrequency = midiToFrequency;
//# sourceMappingURL=converts.js.map