import React,{useContext,useEffect}from 'react'
import { OtpContext } from './OtpContextProv';
const Timer = () => {
    const {disableGenerator, setDisableGenerator,countdown,setCountdown} = useContext(OtpContext);
    
    useEffect(() => {
        if(disableGenerator){
        const countdownIntervalId = setInterval(() => {
            if(countdown>0){
                setCountdown(prev=>prev-1)
            }
            else{
                setDisableGenerator(false);              
                    clearInterval(countdownIntervalId);
                }
            }, 1000);
            return (()=>{
                clearInterval(countdownIntervalId);
            })
        }
    }, [disableGenerator,countdown,setCountdown,setDisableGenerator]);
  return (
    <div>
      <span className='timer-text'>Try again in: </span> <span className='timer-text countdown'>{countdown}</span>
    </div>
  )
}

export default Timer
