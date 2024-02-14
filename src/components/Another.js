import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// import "./components/NewsComponent.css"
import './NewsItem.css'
import  SearchBar  from './SearchBar.js';
// import { Link } from 'react-router-dom'
export class Another extends Component {
  static propTypes = {

  }
  state

  render() {
    return ( 
                  <div className='sidesection'>
                    <div className='search outline'>
                    <h3 className='breaki'> !! Search Here !!</h3>
                    <div className='search'><SearchBar/>
                    <div class="button-row">
                    <h3 className='breaki'> !! Categories !!</h3>
                   
                            <Link to="/Business" className="button">Business</Link>
                            <Link to="/Entertainment" className="button">Entertainment</Link>
                            <Link to="/General" className="button">General</Link>
                            <Link to="/Health" className="button">Health</Link>
                            <Link to="/Science" className="button">Science</Link>
                            <Link to="/Sports" className="button">Sports</Link>
                            <Link to="/Technology" className="button">Technology</Link>
                        
            </div></div>
                    </div>
                  </div>
                )
              }
            }

export default Another
