import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector ,useDispatch } from 'react-redux'
import { addCount } from './redux/countSlice'

function App() {
  let fetchCount = useSelector((state)=>state.counter.counts)
  // const [count, setCount] = useState(fetchCount)
  
  const dispatch  = useDispatch();
  


  return (
    <>
      <div>
        <button onClick={()=> dispatch(addCount())}>Count</button>
        <h1>fetchCount , {fetchCount} </h1>
      </div>
    </>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //     {/* <button onClick={() => useDispatch(addCount)}> */}
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more   {fetchCount}
    //   </p>
    // </>
  )
}

export default App
