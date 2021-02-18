import {useState} from 'react'
function Login({send}){
	const [name,setName]=useState('')
	const [pass,setPass]=useState('')      

	function submited(e){
		e.preventDefault();
		send(name,pass);
	}
	return(
	 <>
	   <div className="container">
	     <div className="form-group">
	       <form onSubmit={submited}>
	        <input type="text" className="form-control" 
	          value={name}
	          placeholder="Name" 
	          onChange={(e)=> setName(e.target.value)}></input>
	        <input type="password" className="form-control"
	        value={pass}
	        placeholder="Password"
	        onChange={(e)=> setPass(e.target.value)}
	        />
	        <button className="btn btn-dark">Login</button>
	        </form>
	     </div>
	   </div>
	 </>
	)
}

export default Login