import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import NextWatchContext from './Context/NextWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import SaveVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import VideoItem from './components/VideoItem'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    lightMode: true,
    savedVideos: [],
  }

  onChangeMode = () => {
    this.setState(prev => ({lightMode: !prev.lightMode}))
  }

  addToSavedVideos = video => {
    this.setState(prev => ({savedVideos: [...prev.savedVideos, video]}))
  }

  deleteSavedVideo = id => {
    const {savedVideos} = this.state
    const newList = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: newList})
  }

  render() {
    const {lightMode, savedVideos} = this.state

    return (
      <BrowserRouter>
        <NextWatchContext.Provider
          value={{
            lightMode,
            savedVideos,
            addToSavedList: this.addToSavedVideos,
            onClickMode: this.onChangeMode,
            deleteSavedVideo: this.deleteSavedVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/saved-videos" component={SaveVideos} />
            <ProtectedRoute exact path="/videos/:id" component={VideoItem} />
            <Route component={NotFound} />
          </Switch>
        </NextWatchContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
