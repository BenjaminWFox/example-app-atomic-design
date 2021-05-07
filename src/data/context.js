import React from 'react'

export const display = {
  atoms: true,
  molecules: true,
  organisms: true,
  templates: true,
  pages: true,
}

export const ADDisplayContext = React.createContext(display)
