
import {useState,useEffect,useCallback, useRef} from 'react'

function App() {

  const [password , setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += 1234567890
    if(charAllowed) str += "<>?{}[]()%$₹^*#@!~`\|"

    for (let i = 0; i < length; i++) {
      let random = Math.random()
      let char = Math.floor(random * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass);

  },[length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = ()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    generatePassword();
  },[length,numberAllowed,charAllowed])
 
  return (
    <div className="h-screen py-10 bg-gray-900 ">
      <div className="max-w-screen-md rounded-xl bg-gray-800 mx-auto overflow-hidden text-white">
        <h1 
        className=" text-white text-center text-3xl font-medium py-2 ">
        Password Genereator App</h1>
        <div className=" py-5 px-5">
          <div className=' flex rounded-md overflow-hidden'>
            <input type="text"
            className="text-black w-full text-sm h-10 px-3 py-3 outline-none " 
            // style={{width:"300px"}}
            value={password}
            readOnly
            ref={passwordRef}
            />
            <button className=" bg-blue-600 px-5 h-10 text-white border-none "
            onClick={copyPasswordToClipboard}
            >COPY</button>
          </div>
          <br />
          <div className='flex flex-wrap gap-5'>
            <div>
              <input type="range"
              max={60}
              min={8}
              value={length}
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>{length}</label>
            </div>

            <div>
              <input type="checkbox" 
                className=''
                onChange={()=>setNumberAllowed((number)=> !number)}
                />
              <label >Numbers</label>
            </div>
            <div>
              <input type="checkbox" 
                className=''
                onChange={()=>setCharAllowed((char)=> !char)}
                />
            <label >Characters</label>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default App
