import React, { useCallback, useContext} from 'react'
import { OtpContext } from './OtpContextProv';

const Generator = () => {
const {setOtp, setShowGeneratedOtp,disableGenerator, setDisableGenerator,resetCountDown,setInputOtpArr, setRefIndex} = useContext(OtpContext)
    const displayGeneratedOtp = useCallback(() => {
        setShowGeneratedOtp(true);
    }, [setShowGeneratedOtp]);
    
    const generateOtp = () => {
        const generatedOtp = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)).join('');
        setOtp(generatedOtp);
        displayGeneratedOtp();
        resetCountDown();
        setDisableGenerator(true);
        setInputOtpArr([]);
        setRefIndex(0);
    }
    return (
        <div>
            <button disabled={disableGenerator} className='generatorBtn' onClick={generateOtp}>Generate Otp</button>
         
        </div>
    )
}

export default Generator
