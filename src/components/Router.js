import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DebatePicker from './DebatePicker'
import Debate from './Debate'
import NotFound from './NotFound'
import FileUploader from './FileUploader'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={DebatePicker}></Route>
      <Route path="/debate/:id/files-uploader" component={FileUploader}></Route>
      <Route path="/debate/:id" component={Debate}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
)

export default Router
