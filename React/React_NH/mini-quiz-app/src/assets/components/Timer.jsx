import React, { useEffect, useState } from 'react'

function Timer({TIMER,setIsSubmitted,calculateScore,answersList,userResponses}) { //TIMER Is constant (value:30)
     const [countDown,setContDown] = useState(TIMER);
    useEffect(()=>{
     if(countDown<=0) {setIsSubmitted(true)
      calculateScore(userResponses,answersList)
         return}
    const timerInterval =  setInterval(() => {
        setContDown(prev=>prev-1)
  }, 1000);
  return (()=>{
    clearInterval(timerInterval)
  })
    
    
},[countDown])
  return (
    <div>
    Timer:  {countDown}
    </div>
  )
}

export default Timer
