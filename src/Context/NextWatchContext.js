import React from 'react'

const NextWatchContext = React.createContext({
  lightMode: true,
  savedVideos: [],
  onClickMode: () => {},
  addToSavedList: () => {},
  deleteSavedVideo: () => {},
})

export default NextWatchContext
