import { useCallback, useEffect, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\"

    for (let i = 1; i < length; i++) {
      const index = Math.floor(Math.random() * str.length + 1)
      console.log(index)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, password])

  useEffect(() => {
    generatePassword
  }, [length, numAllowed, charAllowed])

  return (
    <>
      <div className="flex justify-center mt-9">
        <div className="bg-gray-700 w-[70%] h-[150px] rounded-lg">
          <h1 className='text-center mt-3 text-xl font-semibold'>Password generator</h1>
          {/* input field and copy button */}
          <div className="flex justify-center mt-5">
            <input type="text" readOnly className="w-[50%] bg-white focus:outline-none text-orange-500 font-semibold pl-2 rounded-l-md" />
            <button className="bg-blue-700 px-7 py-2 rounded-r-md font-semibold cursor-pointer">Copy</button>
          </div>
          {/* slider, length, Numbers checkbox, Charactors checkbox */}
          <div className="flex items-center justify-center text-orange-500 font-semibold mt-3">
            {/* slider */}
            <input type="range" min={8} max={20} onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="slider" className="ml-3">Length: {length}</label>

            {/* checkbox for numbers */}
            <input type="checkbox" className="ml-3 mr-2" defaultChecked={numAllowed} onChange={() => {
              setNumAllowed((prev) => !prev)
            }} />
            <label htmlFor="number" >Numbers</label>

            {/* checkbox for charactor */}
            <input type="checkbox" className="ml-3 mr-2" defaultChecked={charAllowed} onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label htmlFor="charactor" >Charactors</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
