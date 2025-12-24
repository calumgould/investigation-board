import { registerSettings } from './settings'
import { registerControls } from './controls'
import { applyNoteTextWrapping } from './note'

Hooks.once('init', () => {
  registerSettings()
})

Hooks.once('ready', () => {})

Hooks.on('getSceneControlButtons', (controls) => {
  registerControls(controls)
})

Hooks.on('drawDrawing', (drawing: foundry.canvas.placeables.Drawing) => {
  applyNoteTextWrapping(drawing)
})

Hooks.on('refreshDrawing', (drawing: foundry.canvas.placeables.Drawing) => {
  applyNoteTextWrapping(drawing)
})
