import React from 'react'

export const display = {
  atoms: true,
  molecules: true,
  organisms: true,
  templates: true,
  pages: true,
}

export const colors = {
  atoms: 'red',
  molecules: 'blue',
  organisms: 'aqua',
  templates: 'green',
  pages: 'yellow',
}

export const ADDisplayContext = React.createContext(display)
