import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {withRouter} from 'react-router-dom'
function Property(props){
  const t = props.match.params.type;
  const [datas,setData] = useState([]);
  const [dload,setDload] = useState(false);

  const getdata = async() => {
  axios
      .post('http://localhost:5000/houselet',{
      	type : t,
      })
      .then(response=> { setData(response.data.row); setDload(true); } )
      .catch(err=> { console.log(err) })

  }


  useEffect(()=>{
    getdata();            
},[])


  const listItems = datas.map((number) =>
         <div className="col-sm-3" key={number.id}>
         <Link to={'/listing/'+number.id}>
         {number.photo? <img className="img-thumbnail" src={'http://localhost:5000/images/'+number.photo}/> : ''}
         <h6>{number.name}</h6>
         </Link>
         </div>
       )



  return(
    <>
      <div className="container">
       <div className="row">
           {dload ? listItems : 'loading'}
       </div>
      </div>
    </>
  )
}

export default withRouter(Property);