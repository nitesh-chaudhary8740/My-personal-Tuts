import React ,{useRef} from 'react'

const L1UseRef = () => {
  return (
    <div>
      <InputWrapper>
      {(inputRef,hello,withOutPassing)=>  (<><input  ref={inputRef} placeholder={hello}/> <div>{withOutPassing}</div></>)}
      {/* {(_,_,withOutPassing)=><div> {withOutPassing}</div>} */}
      </InputWrapper>
    </div>
  )
}

export default L1UseRef
const InputWrapper = ({ children }) => {
    const inputRef = useRef(null);
    const hello = 'This is Hello!';
    const withOutPassing = "withOut passing in children" //Am I can't pass it without {children(inputRef,hello,withoutPassing)}
  
    return (
      <div>
        {children(inputRef,hello,withOutPassing)}
      </div>
    );
  };