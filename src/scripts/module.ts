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

// Apply text wrapping to notes when drawings are rendered
Hooks.on('drawDrawing', (drawing: foundry.canvas.placeables.Drawing) => {
  applyNoteTextWrapping(drawing)
})

// Also apply when drawings are refreshed (e.g., after text updates)
Hooks.on('refreshDrawing', (drawing: foundry.canvas.placeables.Drawing) => {
  applyNoteTextWrapping(drawing)
})
