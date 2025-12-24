import { registerSettings } from './settings'
import { registerControls } from './controls'

Hooks.once('init', () => {
  registerSettings()
})

Hooks.once('ready', () => {})

Hooks.on('getSceneControlButtons', (controls) => {
  registerControls(controls)
})
