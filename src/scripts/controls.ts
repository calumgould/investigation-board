import { createBlankBoard } from './board'

export const registerControls = (): void => {
  Hooks.on('getSceneControlButtons', (controls) => {
    const drawingControls = controls.drawings || controls.notes

    if (!drawingControls) {
      console.warn('Investigation Board: Could not find drawings or notes control. Available controls:', Object.keys(controls))
      return
    }

    drawingControls.tools['createInvestigationBoard'] = {
      name: 'createInvestigationBoard',
      title: 'Create Investigation Board',
      icon: 'fas fa-clipboard',
      button: true,
      order: 100,
      onChange: (_event: Event, _active: boolean) => {
        createBlankBoard()
      },
    }

    console.log('Investigation Board: Button added to scene controls')
  })
}

