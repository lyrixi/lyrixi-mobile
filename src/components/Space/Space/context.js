import React from 'react'

export const SpaceContext = React.createContext({
  latestIndex: -1
})

export const SpaceContextProvider = SpaceContext.Provider

