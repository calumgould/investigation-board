import moduleData from '../module.json'
import { COLORS } from './constants.js'

export const MODULE_ID = moduleData.id

/**
 * Register all module settings
 */
export function registerSettings(): void {
  if (!game.settings) {
    console.error('game.settings is not available')
    return
  }

  // Register background color setting
  // @ts-expect-error - Custom module IDs are not fully typed in v13 yet
  game.settings.register(MODULE_ID, 'boardBackgroundColor', {
    name: 'Board Background Color',
    hint: 'The background color for investigation boards (hex color code)',
    scope: 'world',
    config: true,
    type: String,
    default: COLORS.BACKGROUND_DEFAULT
  })
}

