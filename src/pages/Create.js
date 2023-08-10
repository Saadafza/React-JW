import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';
import imageBg from "../image/candle.jpg"

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = () => {

    axios.post('http://localhost:3003/create-student/', {
      name: name,
      email: email,
      address: address,
      about: about,
      image: image
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    ).then((res) => {
      if (res.data.status == true) {
        navigate("/")
      } else {
        console.log(res.data.errors);
        if (res.data.status == false) {
          setErrors(res.data.errors);
        }

      }
    })

    // }


  }

  return (
    <>
    <div style={{backgroundImage:`url(${imageBg})`}}>
      <form onSubmit={(event) => { event.preventDefault() }}>
        <div style={{ width: "600px" }} className='mx-auto'>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label"><h1 style={{marginTop:'10px',color:"white"}}>ADD NEW BOOKS</h1></label>
            <input onChange={(event) => { setImage(event.target.files[0]) }} style={{border:'1px solid black'}} className="form-control" type="file" id="formFile" />
            {
              (errors.image) ? <p style={{ color: "red" }}>{errors.image}</p> : null
            }
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><h5 style={{fontFamily:'cursive' ,color:"white"}}>Name</h5></label>
            <input onChange={(event) => { setName(event.target.value) }} style={{border:'1px solid black'}} type="text" className="form-control" id="name"  placeholder='Enter name'/>
            {
              (errors.name) ? <p style={{ color: "red" }}>{errors.name}</p> : null
            }
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><h5 style={{fontFamily:'cursive' ,color:"white"}}>Author</h5></label>
            <input onChange={(event) => { setEmail(event.target.value) }} style={{border:'1px solid black'}} type="email" className="form-control" id="email" placeholder='Enter Author Name ' />
            {
              (errors.email) ? <p style={{ color: "red" }}>{errors.email}</p> : null
            }
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label"><h5 style={{fontFamily:'cursive',color:"white"}}>Address</h5></label>
            <input onChange={(event) => { setAddress(event.target.value) }} style={{border:'1px solid black'}} type="text" className="form-control" id="address" placeholder='Enter Address' />
            <p style={{ color: "red" }}>{errors.address}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><h5 style={{fontFamily:'cursive',color:"white"}}>About</h5></label>
            <textarea onChange={(event) => { setAbout(event.target.value) }} style={{border:'1px solid black'}} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your About'></textarea>
            <p style={{ color: "red" }}>{errors.about}</p>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary'>Create</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Create