import { Link } from "react-router-dom";
import { useState } from "react";


function Searchfeild() {
  const [inputTxt, setInputTxt] = useState("");


  return (
    
    <div className='Search'>
      <input onChange={(e) => setInputTxt(e.target.value)} type='text' className='inputField' style={{ 'border-radius': '5px', 'height': '40px', 'width': '50%', 'border': '1px solid black',padding:'10px' }} />
      <Link to={`/search?q=${inputTxt}`} className='btn  btn-dark' style={{ width: '140px', "margin-left": "15px", 'height': '40px', 'margin-bottom': '5px' }}>Search</Link>
    </div>
  )
}

export default Searchfeild