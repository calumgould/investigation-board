import { DRAWING_PROPERTIES, NOTE_DIMENSIONS, NOTE_COLORS, NOTE_TEXT_PROPERTIES, Z_INDEX } from './constants'
import { MODULE_ID } from './settings'

export const applyNoteTextWrapping = (drawing: foundry.canvas.placeables.Drawing): void => {
  const document = drawing.document
  // @ts-expect-error - Custom module flags may not be fully typed
  const flags = document.flags?.[MODULE_ID] as { type?: string } | undefined

  // Only apply to notes
  if (flags?.type !== 'note') {
    return
  }

  setTimeout(() => {
    const text = drawing.text

    if (!text) {
      return
    }

    const noteWidth = document.shape?.width || NOTE_DIMENSIONS.WIDTH

    const wrapWidth = noteWidth - NOTE_TEXT_PROPERTIES.PADDING * 2

    if (text.style) {
      text.style.wordWrap = true
      text.style.wordWrapWidth = wrapWidth
      text.style.breakWords = true
      text.style.strokeThickness = 0
      text.style.dropShadow = false

      // Update the text to trigger re-rendering with new style
      const currentText = document.text || ''

      if (currentText) {
        text.text = currentText
      }
    }
  }, 10)
}

export const createNote = async (): Promise<void> => {
  if (!canvas?.scene || !canvas.drawings) {
    if (ui?.notifications) {
      ui.notifications.error('No active scene found')
    }

    return
  }

  const dimensions = canvas.dimensions

  if (!dimensions) {
    return
  }

  const noteWidth = NOTE_DIMENSIONS.WIDTH
  const noteHeight = NOTE_DIMENSIONS.HEIGHT

  const x = dimensions.width / 2 - noteWidth / 2
  const y = dimensions.height / 2 - noteHeight / 2

  if (!game.user) {
    return
  }

  await canvas.scene.createEmbeddedDocuments('Drawing', [
    {
      type: 'r',
      author: game.user.id,
      x,
      y,
      z: Z_INDEX.NOTE,
      shape: { width: noteWidth, height: noteHeight },
      fillType: foundry.CONST.DRAWING_FILL_TYPES.SOLID,
      fillColor: NOTE_COLORS.GREEN,
      fillAlpha: DRAWING_PROPERTIES.FILL_ALPHA,
      strokeWidth: 0,
      locked: false,
      text: '',
      textColor: NOTE_TEXT_PROPERTIES.COLOR,
      fontSize: NOTE_TEXT_PROPERTIES.FONT_SIZE,
      textOpacity: NOTE_TEXT_PROPERTIES.OPACITY,
      dropShadow: false,
      strokeThickness: 0,
      flags: {
        [MODULE_ID]: {
          type: 'note',
          text: '',
        },
      },
    } as Partial<foundry.documents.DrawingDocument.CreateData>,
  ])
}
