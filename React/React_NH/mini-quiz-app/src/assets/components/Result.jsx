import React from 'react'

function Result(props) {
const {answersList,score,setIsSubmitted,question,allOptions,totalQuestions,currentQuestionIndex,setCurrentQuestionIndex,userResponses} = props
  function nextHandler(){
  if(!(currentQuestionIndex<totalQuestions-1)) return // response will not be added in attemp reached 10
  setCurrentQuestionIndex(prev=>prev+1)
}
function previousHandler(){
  if((currentQuestionIndex<1)) return // response will not be added in attemp reached 10
  setCurrentQuestionIndex(prev=>prev-1)
}  
console.log("Anserlist in Result",answersList)
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
          if(answersList[currentQuestionIndex]===optionIndex) 
          {
            return <button 
           key={`${currentQuestionIndex}-${optionIndex}`} 
           className="correct-selected"
            >
              {option} 
          </button>
          }
         if(userResponses[currentQuestionIndex] === optionIndex && userResponses[currentQuestionIndex]!==answersList[currentQuestionIndex]){
            return    <button 
           key={`${currentQuestionIndex}-${optionIndex}`} 
           className="incorrect-selected"
            >
              {option} 
          </button>
          }
          if(answersList[currentQuestionIndex]!==optionIndex){
            return    <button 
           key={`${currentQuestionIndex}-${optionIndex}`} 
           className="unselected"
            >
              {option} 
          </button>
          }
         }
      ):<div>option loading</div>}
    </div>

    <div className='controlBtns'>
      <button className='control buttons' onClick={previousHandler}>Previos</button>
      <button className='control buttons' onClick={()=>{
        setIsSubmitted(false)
        setCurrentQuestionIndex(0)
      }} >DONE</button>
      <button className='control buttons' onClick={nextHandler}>Next</button>

    </div>  
    <h1>Total Score : {score}</h1> 
    </>
  )
}

export default Result
