/**
 * Summary. For server side rendering
 */
export const xwindow = typeof window !== 'undefined' ? window : ({} as Window);

/**
 * Summary. For server side rendering
 */
export const xnavigator = typeof navigator !== 'undefined' ? navigator : ({} as Navigator);

/**
 * Summary. For server side rendering
 */
export const xAudioContext =
  typeof window !== 'undefined'
    ? new (window.AudioContext || (window as any).webkitAudioContext)()
    : ({} as AudioContext);

// const AudioContext =
// typeof window !== 'undefined'
//   ? new (window.AudioContext || window.webkitAudioContext)() : {};

/**
 * Summary. For server side rendering
 */
export const xdocument = typeof document !== 'undefined' ? document : ({} as Document);
