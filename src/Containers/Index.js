import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nearest_Rides from '../Pages/Nearest_Rides'
import Upcoming_Rides from '../Pages/Upcoming_Rides'
import Past_Rides from '../Pages/Past_Rides'

export function Index() {
  return (
    <Router>

      <Switch>
        <Route path='/' exact>
          <Nearest_Rides/>
        </Route>

        <Route path='/Nearest-Rides' exact>
          <Nearest_Rides/>
        </Route>

        <Route path='/Upcoming-Rides' exact>
          <Upcoming_Rides/>
        </Route>

        <Route path='/Past-Rides' exact>
          <Past_Rides/>
        </Route>
        
        <Route  render={()=><h1 className='text-center align-middle bg-gradient '>404 Page Not Found</h1>}/>

      </Switch>
    </Router>
  );
}