import React from 'react'

function Result(props) {
const {answersList,setScore,setIsSubmitted,question,allOptions,totalQuestions,currentQuestionIndex,setCurrentQuestionIndex,userResponses,setUserResponse} = props
  function nextHandler(){
  if(!(currentQuestionIndex<totalQuestions-1)) return // response will not be added in attemp reached 10
  setCurrentQuestionIndex(prev=>prev+1)
}
function previousHandler(){
  if((currentQuestionIndex<1)) return // response will not be added in attemp reached 10
  setCurrentQuestionIndex(prev=>prev-1)
}  
  return (
  <>
 <span>
  <h2 style={{ display: 'inline-block', marginRight: '10px' }}>
    {currentQuestionIndex+1}.
  </h2>
  <span>{question.question}</span>
</span>
    <div className="options">
      {allOptions?allOptions[currentQuestionIndex].map((option,optionIndex)=>{
           return <button 
           key={`${currentQuestionIndex}-${optionIndex}`} 
           className={userResponses[currentQuestionIndex] === optionIndex ? "selected-option" : "not-selected"}
            >
              {option} 
          </button>
         }
      ):<div>option loading</div>}
    </div>

    <div className='controlBtns'>
      <button className='control buttons' onClick={previousHandler}>Previos</button>
      <button className='control buttons' >Submit</button>
      <button className='control buttons' onClick={nextHandler}>Next</button>

    </div>   
    </>
  )
}

export default Result
