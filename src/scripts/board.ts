import { MODULE_ID } from './settings'
import { COLORS, BOARD_DIMENSIONS, DRAWING_PROPERTIES, Z_INDEX } from './constants'

export const createBlankBoard = async (): Promise<void> => {
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

  if (!game.user) {
    return
  }

  const boardWidth = BOARD_DIMENSIONS.WIDTH
  const boardHeight = BOARD_DIMENSIONS.HEIGHT

  const x = dimensions.width / 2 - boardWidth / 2
  const y = dimensions.height / 2 - boardHeight / 2

  // @ts-expect-error - Custom module IDs are not fully typed in v13 yet
  const backgroundColor = (game.settings?.get(MODULE_ID, 'boardBackgroundColor') as string) || COLORS.BACKGROUND_DEFAULT

  await canvas.scene.createEmbeddedDocuments('Drawing', [
    {
      type: 'r',
      author: game.user.id,
      x,
      y,
      z: Z_INDEX.BOARD,
      shape: { width: boardWidth, height: boardHeight },
      fillType: foundry.CONST.DRAWING_FILL_TYPES.SOLID,
      fillColor: backgroundColor,
      fillAlpha: DRAWING_PROPERTIES.FILL_ALPHA,
      strokeColor: COLORS.STROKE,
      strokeAlpha: DRAWING_PROPERTIES.STROKE_ALPHA,
      strokeWidth: DRAWING_PROPERTIES.STROKE_WIDTH,
      locked: false,
      flags: {
        [MODULE_ID]: {
          type: 'board',
          text: '',
        },
      } as Record<string, unknown>,
    } as Partial<foundry.documents.DrawingDocument.CreateData>,
  ])

  canvas.drawings.activate()

  if (ui?.notifications) {
    ui.notifications.info('Blank investigation board created!')
  }
}
