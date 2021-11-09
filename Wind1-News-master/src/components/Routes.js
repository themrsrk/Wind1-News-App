import React, { Component } from 'react'
import News from './News';
// import Navbar from './Navbar';
import LoadingBar from 'react-top-loading-bar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";
// import Navbar from './Navbar';
  
export class Routes extends Component {
    state = {
        progress: 0
    }


    setProgress=(progress)=>{
        this.setState({progress:progress})
    }
 
    render() {
    
        return (
            
        <>
           <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        {/* <Navbar title="Wind1 News" />  */}
        <Router> 
        <Switch>
          <Route exact path="/"><News setprogress={this.setProgress}   key="general" country="in" category="general"/></Route> 
          <Route exact path="/business"><News setprogress={this.setProgress}   key="business" country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setprogress={this.setProgress}   key="entertainment"  country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setprogress={this.setProgress}   key="general" country="in" category="general"/></Route> 
          <Route exact path="/health"><News setprogress={this.setProgress}   key="health" country="in" category="health"/></Route> 
          <Route exact path="/science"><News setprogress={this.setProgress}   key="science" country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setprogress={this.setProgress}   key="sports" country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setprogress={this.setProgress}   key="technology" country="in" category="technology"/></Route> 
        </Switch>
        </Router>
            </>
        )
    }
}

export default Routes
