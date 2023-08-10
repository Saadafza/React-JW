import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom"


function Search() {
  const [products, setProducts] = useState([]);
  const [searchParams, setParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    axios.get("http://localhost:3003/search?q=" + searchQuery).then((res) => {
      setProducts(res.data.products)
    })
  }, [searchParams])

  return (
    <div className="search">
      {
        products.map((item) => {
          return (<>
            <div className="row">
            <div className="card-body" key={products._id}>
                                <h5 className="card-title" style={{ 'marginLeft': '50px' }}>{products.details}</h5>
              <div className="col-md-6">
                <img src={item.image} style={{height:"250px", width:"250px", "marginLeft":"10px", borderRadius:"10px"}} />
              </div>
              <div className="col-md-6">
              <h1 style={{"marginLeft":"10px"}}>{item.name}</h1> 
              <Link to={`/student/${item._id}`} style={{ fontFamily: "harrington","marginLeft":"10px" }} className="btn btn-dark" >View Details</Link>
              </div>
            </div>
            </div>
          </>)
        })
      }
    </div>
  )
}

export default Search