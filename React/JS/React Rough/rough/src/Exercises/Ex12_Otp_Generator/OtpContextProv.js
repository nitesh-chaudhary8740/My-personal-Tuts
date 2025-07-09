import React , { useState } from 'react'
export const OtpContext = React.createContext()
const OtpContextProv = ({children}) => {
    const [otp,setOtp]= useState('');
    const [showGeneratedOtp,setShowGeneratedOtp] = useState(false);
    const [inputOtpArr,setInputOtpArr]= useState([]);
    const [disableGenerator, setDisableGenerator] = useState(false);
    const [countdown, setCountdown] = useState(10);
    const [refIndex, setRefIndex] = useState(0);
    const resetCountDown = () =>{
        setCountdown(10);
      }
  return (
    <OtpContext.Provider value={
        {otp,setOtp,//otp random generated
        inputOtpArr,setInputOtpArr,//entered otp will be stored in array
        showGeneratedOtp,setShowGeneratedOtp,//toggle hide/show generated otp
        disableGenerator, setDisableGenerator,//toggle enable/disable generate button
        countdown, setCountdown,//countdown state
        refIndex, setRefIndex,//for targeting refs (input refs)
        resetCountDown
        }}>
        {children}
    </OtpContext.Provider>
  )
}

export default OtpContextProv
