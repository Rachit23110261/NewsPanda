import React, { Component } from 'react'
import Navbar from '@components/Navbar';
import NewsComponent from '@components/NewsComponent';

// import Spinner from './components/Spinner'

// import Another from './components/Another'

export default class Appwithmenu extends Component {
  render() {
    const divstyle ={
      display: 'flex'
    }
    console.log('link clicked')


    
    return (
      
      <div>
        <Navbar/>
        
        
        <NewsComponent pageSize={5}  />
        
        </div>
      

    )
  }
}
