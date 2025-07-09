import React, { Component } from 'react'
import Comp1 from './Comp1'

export class Main extends Component {
    
    constructor(){
        super()
        this.state={
            name:'nik',
            age:25,
            show:this.showName,
        }
    }
  render() {
    return (
      <div>
    
      </div>
    )
  }
}

export default Main
