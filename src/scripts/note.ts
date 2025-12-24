import { DRAWING_PROPERTIES, NOTE_DIMENSIONS, NOTE_COLORS } from './constants'
import { MODULE_ID } from './settings'

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
      shape: { width: noteWidth, height: noteHeight },
      fillType: foundry.CONST.DRAWING_FILL_TYPES.SOLID,
      fillColor: NOTE_COLORS.GREEN,
      fillAlpha: DRAWING_PROPERTIES.FILL_ALPHA,
      strokeWidth: 0,
      locked: false,
      flags: {
        [MODULE_ID]: {
          type: 'note',
          text: '',
        },
        'advanced-drawing-tools': {
          textStyle: {
            align: 'center',
            dropShadow: false,
            strokeThickness: 0,
          },
        },
      },
    } as Partial<foundry.documents.DrawingDocument.CreateData>,
  ])
}
