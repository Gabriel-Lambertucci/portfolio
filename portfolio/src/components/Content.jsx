import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    )
  }
}

export default Content