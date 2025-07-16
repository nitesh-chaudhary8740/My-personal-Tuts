function App() {
const arr = [1,3,43,54];

  return (
    <>
  {
    arr.map((e,i)=>{
      return <span key={i}>{e}</span>
    })
  }

    </>
  )
}

export default App
