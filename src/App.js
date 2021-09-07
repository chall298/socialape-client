import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import  { createTheme, ThemeProvider }  from '@material-ui/core/styles';
import themeFile from './util/theme'
import jwtDecode from 'jwt-decode'

// Components
import Navbar from './components/Navbar'
import AuthRoute from './util/AuthRoute'
// Pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

const theme = createTheme(themeFile)

let authenticated;
const token = localStorage.FBIdToken
if(token){
  const decodedToken = jwtDecode(token)
  console.log(decodedToken)
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login'
    authenticated = false
  } else {
    authenticated = true
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <AuthRoute exact path="/login" component={login}/>
            <AuthRoute exact path="/signup" component={signup}/>
          </Switch>
        </div>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
