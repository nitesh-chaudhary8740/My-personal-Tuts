import React, { Component } from 'react'
import InfiniteComp from './InfiniteComp';

export class InfiniteScrol extends Component {
  render() {
    let element = [];
    return (
      <div>
        { 
        <InfiniteComp/>
        }
        
      </div>
    )
  }
}

export default InfiniteScrol
