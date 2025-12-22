/// <reference types="fvtt-types" />

// Define module flags interface
interface InvestigationBoardFlags {
  type?: 'board' | 'sticky' | 'photo' | 'index' | 'test'
  text?: string
  image?: string
  identityName?: string
  pinColor?: string
}

// Extend the DocumentFlags to include our module's flags
declare global {
  interface DocumentFlags {
    'investigation-board'?: InvestigationBoardFlags
  }
}

export {}
