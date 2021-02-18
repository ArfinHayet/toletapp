import {useState} from 'react'
import {Redirect} from 'react-router-dom'
function Postelement({send, loads}){
	const [name,setName]=useState('')
	const [type,setType]=useState('')
     
	const [fileData, setFileData] = useState("");
	const getFile = (e) => {
	  setFileData(e.target.files[0]);
	};

	function submited(e){
		e.preventDefault();
		const data = new FormData();
        data.append("foo", fileData);
        data.append("name", name);
        data.append("type", type);
		console.log(data);
		send(data);
	}
	return(
	  <div className="container">
	   {loads? <Redirect to="/" /> :<div className="panel">
	        <form onSubmit={submited} encType="multipart/form-data">
			  <div className="form-group">
			    <label>Name</label>
			    <input type="text" className="form-control"
			     value={name} placeholder="name"
			     onChange={(e)=> setName(e.target.value)}
			     />
			  </div>
			  <div className="form-group">
			    <label>File Upload</label>
			    <input type="file" className="form-control"
			     placeholder="Image"
			     onChange={getFile}      
			     />
			  </div>
			  <div className="form-group">
			    <label>Type</label>
			    <select value={type} className="form-control"
			    onChange={(e)=> setType(e.target.value)}>
			      <option>Family</option>
			      <option>Mess</option>
			      <option>Sublet</option>
			      <option>Hostel</option>
			    </select>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
	   </div>}
	 </div>
	)
}

export default Postelement