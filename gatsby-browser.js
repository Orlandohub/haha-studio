import React from 'react'
import { Provider } from 'unstated'

export const wrapRootElement = ({ element }) => {
  sessionStorage.setItem('pathOnStart', window.location.pathname)
  const ConnectedRootElement = <Provider>{element}</Provider>
  return ConnectedRootElement
}
