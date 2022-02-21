import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home';
import ProjectPageTrybeTunes from '../Pages/ProjectPageTrybeTunes';

class Content extends Component {
  render() {
    return (
      <Switch>
        <Route path='/projects-TrybeTunes' component={ProjectPageTrybeTunes} />
        <Route path='/' component={Home} />
      </Switch>
    )
  }
}

export default Content