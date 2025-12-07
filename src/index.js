import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import CleanerDashboard from './views/cleaner-dashboard'
import Services from './views/services'
import Contact from './views/contact'
import ClientDashboardPostAJobManageJobs from './views/client-dashboard-post-a-job-manage-jobs'
import About from './views/about'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={CleanerDashboard} exact path="/cleaner-dashboard" />
        <Route component={Services} exact path="/services" />
        <Route component={Contact} exact path="/contact" />
        <Route
          component={ClientDashboardPostAJobManageJobs}
          exact
          path="/client-dashboard-post-a-job-manage-jobs"
        />
        <Route component={About} exact path="/about" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
