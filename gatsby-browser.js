import React from 'react'
import { Provider } from 'unstated'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = <Provider>{element}</Provider>
  return ConnectedRootElement
}
