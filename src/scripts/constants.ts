export const COLORS = {
  BACKGROUND_DEFAULT: '#222222',
  STROKE: '#8b7355',
  TEXT: '#ffffff',
} as const

export const BOARD_DIMENSIONS = {
  WIDTH: 2400,
  HEIGHT: 1600,
} as const

export const TEXT_PROPERTIES = {
  FONT_SIZE: 48,
  FONT_FAMILY: 'Signika',
  ALPHA: 1.0,
} as const

export const NOTE_TEXT_PROPERTIES = {
  FONT_SIZE: 16,
  COLOR: '#000000',
  OPACITY: 1.0,
  PADDING: 10, // Padding on each side for text wrapping
} as const

export const DRAWING_PROPERTIES = {
  FILL_ALPHA: 1.0,
  STROKE_ALPHA: 1.0,
  STROKE_WIDTH: 20,
} as const

export const NOTE_DIMENSIONS = {
  WIDTH: 200,
  HEIGHT: 200,
} as const

export const NOTE_COLORS = {
  YELLOW: '#fff9c4',
  RED: '#ef9a9a',
  GREEN: '#a5d6a7',
  BLUE: '#90caf9',
} as const

export const Z_INDEX = {
  BOARD: 10,
  NOTE: 11,
}
