import { registerSettings } from './settings'
import { registerControls } from './controls'

Hooks.once('init', () => {
  console.log('Investigation Board module initializing...')
  registerSettings()
})

Hooks.once('ready', () => {
  console.log('Investigation Board module is ready!')
  registerControls()
})
