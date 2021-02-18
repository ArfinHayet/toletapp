import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {useEffect} from 'react'
function Listing(props){
	const t = props.match.params.uid;
    function fetch(){
    	axios.post("http://localhost:5000/fetch",{
    		id : t,
    	}).then(response=> console.log(response.data.message))
    	  .catch(err=> console.log(err))

    	}

    useEffect(()=>{
    	fetch()
    })
 return(
 	 <h1>Works</h1>
 	)
}
export default withRouter(Listing);