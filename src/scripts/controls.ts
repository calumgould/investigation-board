import { createBlankBoard } from './board'
import { createNote } from './note'

export const registerControls = (controls: Record<string, SceneControls.Control>): void => {
  const drawingControls = controls.drawings || controls.notes

  if (!drawingControls) {
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

  drawingControls.tools['createNote'] = {
    name: 'createNote',
    title: 'Create Note',
    icon: 'fas fa-sticky-note',
    button: true,
    order: 101,
    onChange: (_event: Event, _active: boolean) => {
      createNote()
    },
  }
}
