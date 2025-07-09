import React, { useContext} from 'react'
import Generator from './Generator';
import DisplayOtp from './DisplayOtp';
import InputField from './InputField';
import { OtpContext } from './OtpContextProv';
import Timer from './Timer';
const Main = () => {
const{showGeneratedOtp,disableGenerator}=useContext(OtpContext)
return ( 
  <div className='otpCont'> 
    <Generator/>
    {disableGenerator && <Timer/>}
    {showGeneratedOtp && <div className='inpAndDispCont'>  <DisplayOtp /> <InputField 
/></div>}
</div>
  )
}
export default Main
