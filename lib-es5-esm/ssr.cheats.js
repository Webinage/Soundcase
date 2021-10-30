/**
 * Summary. For server side rendering
 */
export var xwindow = typeof window !== 'undefined' ? window : {};
/**
 * Summary. For server side rendering
 */
export var xnavigator = typeof navigator !== 'undefined' ? navigator : {};
/**
 * Summary. For server side rendering
 */
export var xAudioContext = typeof window !== 'undefined'
    ? new (window.AudioContext || window.webkitAudioContext)()
    : {};
// const AudioContext =
// typeof window !== 'undefined'
//   ? new (window.AudioContext || window.webkitAudioContext)() : {};
/**
 * Summary. For server side rendering
 */
export var xdocument = typeof document !== 'undefined' ? document : {};
//# sourceMappingURL=ssr.cheats.js.map