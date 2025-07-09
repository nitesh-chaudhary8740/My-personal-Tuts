import React ,{useState} from 'react'
import Button from './Button'
const MyAppEx8 = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <Button count={count} setCount={setCount}/>
      <Button count={count} setCount={setCount}/>
      {/* <Button/> */}
    </div>
  )
}

export default MyAppEx8
