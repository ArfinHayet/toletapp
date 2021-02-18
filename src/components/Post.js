import {useState} from 'react'
import Postelement from './Postelement';
import axios from 'axios'
import {Link} from 'react-router-dom'
function Post({log}){
  const [load,setLoad]=useState(false)
  const postadd = (data)=>{
     axios
     .post("http://localhost:5000/postadd",data)
     .then(response=> response.data.message? setLoad(true) : '' )
     .catch(err=> console.log(err))
  }
  return(
   <div>{log ? <Postelement send={postadd} loads={load}/> : <div><h1>Please Login</h1>
   	<Link className="btn btn-dark" to="/login">Login</Link>
   	</div>}</div>
  )
}
export default Post