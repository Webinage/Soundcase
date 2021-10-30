"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xdocument = exports.xAudioContext = exports.xnavigator = exports.xwindow = void 0;
/**
 * Summary. For server side rendering
 */
exports.xwindow = typeof window !== 'undefined' ? window : {};
/**
 * Summary. For server side rendering
 */
exports.xnavigator = typeof navigator !== 'undefined' ? navigator : {};
/**
 * Summary. For server side rendering
 */
exports.xAudioContext = typeof window !== 'undefined'
    ? new (window.AudioContext || window.webkitAudioContext)()
    : {};
// const AudioContext =
// typeof window !== 'undefined'
//   ? new (window.AudioContext || window.webkitAudioContext)() : {};
/**
 * Summary. For server side rendering
 */
exports.xdocument = typeof document !== 'undefined' ? document : {};
//# sourceMappingURL=ssr.cheats.js.map