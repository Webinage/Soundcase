/**
 * Summary. For server side rendering
 */
export const xwindow = typeof window !== 'undefined' ? window : {};
/**
 * Summary. For server side rendering
 */
export const xnavigator = typeof navigator !== 'undefined' ? navigator : {};
/**
 * Summary. For server side rendering
 */
export const xAudioContext = typeof window !== 'undefined'
    ? new (window.AudioContext || window.webkitAudioContext)()
    : {};
// const AudioContext =
// typeof window !== 'undefined'
//   ? new (window.AudioContext || window.webkitAudioContext)() : {};
/**
 * Summary. For server side rendering
 */
export const xdocument = typeof document !== 'undefined' ? document : {};
//# sourceMappingURL=ssr.cheats.js.map