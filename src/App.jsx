import { useState ,useCallback,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(8);
  const [nu,setnu]=useState(false);
  const [ch,setch]=useState(false);
  const [pass,setpass]=useState("");
  const passref=useRef(null)
  const passg=useCallback(()=>{
    let pass="";
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(nu){
      str+="0123456789";
    }
    if(ch){
      str+="!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
    for(let i=0; i<count; i++){
        let cv= Math.floor(Math.random()*str.length);
        pass+=str.charAt(cv);
    }
    setpass(pass);
  },[count,nu,ch])
   useEffect(()=>{
    passg();
   },[count,nu,ch,passg])
  const copyfuncn=()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(pass)
   }
  return (
     (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[500px]">
          
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            Password Generator
          </h1>
    
          <div className="flex mb-4">
            <input
              type="text"
              value={pass}
              readOnly
              ref={passref}
              className="flex-1 px-3 py-2 rounded-l-lg outline-none bg-gray-700 text-white"
            />
    
            <button
              onClick={copyfuncn}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg"
            >
              Copy
            </button>
          </div>
    
          <div className="space-y-4 text-white">
            <div>
              <label className="block mb-1">
                Length: {count}
              </label>
    
              <input
                type="range"
                min={8}
                max={100}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full cursor-pointer"
              />
            </div>
    
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={nu}
                  onChange={() => setnu(prev => !prev)}
                />
                Numbers
              </label>
    
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={ch}
                  onChange={() => setch(prev => !prev)}
                />
                Special Characters
              </label>
            </div>
          </div>
    
        </div>
      </div>
    )
  )
}
export default App
