import Navbar from './components/Navbar'
import Header from './components/Header'
import Property from './components/Property'
import Login from './components/Login'
import Post from './components/Post'
import Listing from './components/Listing'
import {useState,useEffect} from 'react'   
import axios from 'axios'
import {BrowserRouter as Router,Route,Redirect } from 'react-router-dom'
function App() {

  const [log,setLog] = useState()
  const sendval = async(name,pass)=>{
  	console.log(name+pass)
    axios.post('http://localhost:5000/sendval',{
        name : name,
        password: pass,
      })
      .then(response=> {
        setLog(true)
        localStorage.setItem('token',response.data.token); }
        )
      .catch(err=> console.log(err))
  }


  function auth(){
    axios
     .post('http://localhost:5000/auth',{
        token : localStorage.getItem("token"),
     })
     .then(response=> {
        console.log(response.data.auth)
        if(response.data.auth){
          setLog(true);
        }

        else {
          setLog(false);
       }


    })  
     .catch(err=>console.log(err))
  }

  useEffect(()=>{
     auth();
  },[])
  return (
    <Router>
    <div>   
      <Navbar log={log}/> 
    </div>   
     <Route exact path="/"><Header/></Route>                                                               
     <Route path="/property/:type"><Property/></Route>
     <Route path="/post"><Post log={log}/></Route>
     <Route path="/login">{log ? <Redirect to="/"/> : <Login send={sendval}/>}</Route>
     <Route path="/listing/:uid"><Listing/></Route>
    </Router>
  );
}

export default App;   
