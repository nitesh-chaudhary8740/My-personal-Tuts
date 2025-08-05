import React, {  } from 'react'
import "./style.css"

function EachQuestion (props) {
const {calculateScore,answersList,setIsSubmitted,question,allOptions,totalQuestions,currentQuestionIndex,setCurrentQuestionIndex,userResponses,setUserResponse} = props

  //methods

function userResponseHandler(optionIndex,questionIndex){
setUserResponse({...userResponses,[questionIndex]:optionIndex})
 
}
function nextHandler(){
  if(!(currentQuestionIndex<totalQuestions-1)) return // response will not be added in attemp reached 10
  setCurrentQuestionIndex(prev=>prev+1)
}
function previousHandler(){
  if((currentQuestionIndex<1)) return // response will not be added in attemp reached 10
  setCurrentQuestionIndex(prev=>prev-1)
}

function checkResult(){
  setIsSubmitted(true) // for rendering the  Result component conditionally
  setCurrentQuestionIndex(0)
  calculateScore(userResponses,answersList)

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
           onClick={()=>{userResponseHandler(optionIndex,currentQuestionIndex) }}
           className={userResponses[currentQuestionIndex] === optionIndex ? "selected-option" : "not-selected"}
            >
              {option} 
          </button>
         }
      ):<div>option loading</div>}
    </div>

    <div className='controlBtns'>
      <button className='control buttons' onClick={previousHandler}>Previos</button>
      <button className='control buttons' onClick={checkResult} >Submit</button>
      <button className='control buttons' onClick={nextHandler}>Next</button>

    </div>   
    </>
  )
}

export default EachQuestion
