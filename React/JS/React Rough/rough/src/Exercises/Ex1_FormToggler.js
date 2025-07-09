import React, { useState } from 'react'

export default function Ex1FormToggler() {
  const [name,setName] =useState('');
     const [email,setEmail] =useState('');
     const [show,setShow]=useState(false);
     const [showHideBtnValue,setShowHideBtnValue]=useState('Show');   
   return (
     <div>
       
       <div className='container'>
         <form >
         Name:<input type="text"  value={name} onChange={(event)=>{setName(event.target.value)
 
             console.log(name)
         }}/>
 
         Email:<input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
         <input type="submit" value={showHideBtnValue} onClick={(event)=>{
         event.preventDefault()
         show===false?setShow(true):setShow(false);
         showHideBtnValue==='Show'?setShowHideBtnValue('Hide'):setShowHideBtnValue('Show');
            
         }} />
         </form>
       { show && (<div className='showDetails'>
         Name : <b>{name}</b>
         Email : <b>{email}</b>
         </div>)}
 
        
       </div>
     </div>
   )
}
