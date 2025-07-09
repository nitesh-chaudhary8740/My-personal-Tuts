import React, { useContext, useEffect, useRef } from 'react'
import { OtpContext } from './OtpContextProv';

const InputField = () => {
  const { setInputOtpArr, inputOtpArr, otp, refIndex, setRefIndex,setDisableGenerator } = useContext(OtpContext)

  const inpRefs = useRef([]);//all input will bw store in this array
  const submitRef = useRef(null);

  const addInpRefs = (e) => {
    if (e && !inpRefs.current.includes(e)) {
      inpRefs.current.push(e);
    }
  }
  useEffect(() => {
    if ((inpRefs.current && inpRefs.current[refIndex]) && refIndex < 5) {
      inpRefs.current[refIndex].focus();
    }
    else {
      if (submitRef.current) {
        submitRef.current.focus();
      }
    }
  }, [refIndex]);

  const removeElement = (index) => {
    const tempArr = [...inputOtpArr];
    tempArr[index] = '';
    setInputOtpArr(tempArr)
  }
  return (
    <div className='inputFieldCont'>
      Enter the OTP
      <br />
      <div className='inpCont'>
        {Array.from
          ({ length: 5 },
            (element, index) => <input
              // disabled={index>inputOtpArr.length}
              className='inputField' key={index} type="text" ref={addInpRefs}
              value={inputOtpArr[index] || ''} //Imp Note ReactJs #32
              onChange={(e) => {
                console.log("triggered.......", refIndex)
                if ((!isNaN(e.target.value)) && e.target.value.slice(-1) !== ' ' && e.target.value !== '') {
                  const tempArr = [...inputOtpArr];
                  tempArr[index] = e.target.value.slice(-1);
                  setInputOtpArr(tempArr);
                  if (refIndex < 5) {
                    setRefIndex(index + 1)
                  }
                }//IF
              }//onchnage handler
              }//onchnange
              onClick={() => {
                setRefIndex(index)
              }}

              onKeyDown={(e) => {
                if (e.key === 'Backspace') {
                  if (refIndex > 0) {
                    setRefIndex(refIndex - 1);
                  }
                  removeElement(index);
                }
              }}
            />//input tage
          )//from()
        }
      </div>
      <div>
        {/* {'Array: ' + inputOtpArr.map((element, index) => ` ${element}`)}
        <br />
        {'length: ' + inputOtpArr.length}
        <br />
        {'ref ' + refIndex}
        <br /> */}
        <br />
        <button className="submitBtn" ref={submitRef}
          disabled={inputOtpArr.includes('') || inputOtpArr.length < 5}
          onClick={() => {
            const tempArr = [...inputOtpArr];
            tempArr.join('') === otp ? alert("Success") : alert("Failed")
            setInputOtpArr([]);
            setRefIndex(0);

            setDisableGenerator(false);
          }
          }>SUBMIT</button>
      </div>
    </div>
  )
}

export default InputField
