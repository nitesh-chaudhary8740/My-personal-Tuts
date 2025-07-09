import React, { Component } from 'react'
export class Comp1 extends Component {
    constructor(props){
      super(); // Pass props to super
      this.newName = this.props.n + 'Kent'; // Access the prop as n
      this.state = {
        anotherName: this.props.n+ 'Wayne'
      }
    }
  
    render() {
      let {n,a}=this.props;
      return (
        <div>
          
        </div>
      )
    }
  }
  export default Comp1;