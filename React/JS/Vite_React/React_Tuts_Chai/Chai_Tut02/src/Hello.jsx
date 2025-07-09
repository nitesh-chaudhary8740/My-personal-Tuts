import React from 'react'

const Hello = (props) => {
    const{...rest}=props
    
    // const isTrue = true;
    const objData = () => {
        for (let key in rest.extra) 
            return (<div> <h2>{[key]} </h2> <p>{rest.extra[key]}</p> </div>)
    }
  return (
    <div>
      <div>
        {rest.message}
      </div>
      <div>
       { rest.anotherProp}
      </div>
      <div>{
      rest.extra.hi + ' ' + rest.extra.name
        }
      </div>
      <br />
      <div>
        {objData}
      </div>
    </div>
  )
}

export default Hello
