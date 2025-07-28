import React, {  } from 'react'
import "./style.css"

function EachQuestion (props) {
const {answersList,setScore,setIsSubmitted,question,allOptions,totalQuestions,currentQuestionIndex,setCurrentQuestionIndex,userResponses,setUserResponse} = props

console.log("user respnse",userResponses)

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
function calculateScore(userResponses,answerList){
        let score = 0
        for (const key in userResponses){
                if(userResponses[key] === answerList[key]) score+=3;
                else if(key===key && userResponses[key] !== answerList[key] ) score-=2;
        }
        setScore(score)      //calculated score 
}
function checkResult(){
  setIsSubmitted(true) // for rendering the  Result component conditionally
  setCurrentQuestionIndex(0)
  calculateScore(userResponses,answersList)
  console.log("Answer List",answersList)
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
