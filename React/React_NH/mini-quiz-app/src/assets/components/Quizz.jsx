import { useEffect, useState } from "react";
import EachQuestion from "./EachQuestion";
import "./style.css"
import Result from "./Result";
import Timer from "./Timer";
function Quizz() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [allOptions,setAllOptions] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersList,setAnwersList] = useState({})
  const [userResponses, setUserResponse] = useState({});
  const [isSubmitted,setIsSubmitted] = useState(false)
  const [score,setScore] = useState(null)
 
  const TIMER = 5;
  let tempAnswersHolderObject = {}; //used to++

  async function fetchQuizData(signal) {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple",
        {
          signal: signal,
        }
      );
      const responseData = await response.json(); //to extract json response which arrived in body of response
      
      setData(responseData.results);
      setAllOptions(shuffleOptionsOrder(responseData.results))
      setAnwersList(tempAnswersHolderObject);
      setLoading(false);
    } catch (e) {
      console.log("error", e);
    }
  }
  useEffect(() => {
    const controller = new AbortController();
    const requestSignal = controller.signal;
    fetchQuizData(requestSignal);
   
    return () => {
      controller.abort();
    };
  },[]);
 function calculateScore(userResponses,answerList){
 
        let score = 0
       
        for (const key in userResponses){
                if(userResponses[key] === answerList[key]) score+=3;
                else if(key===key && userResponses[key] !== answerList[key] ) score-=2;
        }
        setScore(score)      //calculated score 
}
 function shuffleOptionsOrder(questionsArray){

   const arrayOfShuffledOptions =  questionsArray.map((each_question,i)=>{
          const tempArr = [...each_question.incorrect_answers,each_question.correct_answer]
          const randomIndex = Math.floor(Math.random()*tempArr.length)
          const tempOption  = tempArr[randomIndex];
          // setting answer
          tempAnswersHolderObject = {...tempAnswersHolderObject,[i]:randomIndex}
          tempArr[randomIndex] = each_question.correct_answer;
          tempArr[tempArr.length-1] = tempOption;
          return tempArr;
        
   })
   return arrayOfShuffledOptions;
}




  return (
    <>
      <div>
        {loading ? (
          "Loading............"
        ) :  (
         <div className="container">
          <h1>Mini Quizz APP</h1>
         {!isSubmitted && <Timer 
         TIMER={TIMER} 
         setIsSubmitted={setIsSubmitted} 
         calculateScore= {calculateScore} 
         userResponses = {userResponses}
         answersList = {answersList}
         />}
       <div> <strong>Category: </strong>{data[currentQuestionIndex].category}</div>
          
         {!isSubmitted? (<EachQuestion 
         calculateScore ={calculateScore}
          key={`q-${currentQuestionIndex + 1}`}
          totalQuestions = {data?.length}
          allQuestions = {data}
          answersList = {answersList}
          question={data[currentQuestionIndex]}
          allOptions = {allOptions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          userResponses={userResponses}
          setUserResponse={setUserResponse}
          setScore = {setScore}
          setIsSubmitted = {setIsSubmitted}
          />):
          (<Result 
          score={score}
          key={`result-${currentQuestionIndex + 1}`}
          totalQuestions = {data?.length}
          answersList = {answersList}
          question={data[currentQuestionIndex]}
          allOptions = {allOptions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          userResponses={userResponses}
          setUserResponse={setUserResponse}
        
          setIsSubmitted = {setIsSubmitted}
          />) }
          </div>
        )}
      </div>
    </>
  );
}

export default Quizz;

