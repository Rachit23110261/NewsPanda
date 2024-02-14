import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsComponent from './components/NewsComponent'
import Spinner from './components/Spinner'

import Another from './components/Another'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  
} from "react-router-dom";


export default class App extends Component {
  render() {
    const divstyle ={
      display: 'flex'
    }
    


    
    return (
      
      <Router>
            <div>
                <Navbar />
                <div className='twoways' style={divstyle}>
                <Routes>
                    <Route path="/" exact element={<NewsComponent key='buisness' pageSize={5} category={'business'}/>}>
                    </Route>
                    <Route path="/Business" exact element={<NewsComponent key='buisness' pageSize={5} category={'business'}/>}>
                    </Route>
                    <Route  path="/Technology" exact element={<NewsComponent key='technology' pageSize={5} category={'technology'}/>}>
                    </Route>
                    <Route  path="/Health"exact element={<NewsComponent key='health' pageSize={5} category={'health'}/>}>
                    </Route>
                    <Route  path="/Science"exact element={<NewsComponent key='science' pageSize={5} category={'science'}/>}>
                    </Route>
                    <Route  path="/General"exact element={<NewsComponent key='general' pageSize={5} category={'general'}/>}>
                    </Route>
                    <Route  path="/Sports"exact element={<NewsComponent key='sports' pageSize={5} category={'sports'}/>}>
                    </Route>
                    <Route  path="/Entertainment"exact element={<NewsComponent key='entertainment' pageSize={5} category={'entertainment'}/>}>
                    </Route>
                    

                    


                    


                    
                </Routes>
                    <Another />
                </div>
                
            </div>
        </Router>
      
     

    )
  }
}
