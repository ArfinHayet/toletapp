import {BrowserRouter as Router,Link } from 'react-router-dom'
function Header(){
  return(
  	<>
    <div className="container">
      <h1>Hey this is first part</h1>
    </div>
    <div className="container">
       <Link to="/property/Family" className="btn btn-dark">Family</Link>
       <Link to="/property/Mess" className="btn btn-dark">Mess</Link>
       <Link to="/property/Sublet" className="btn btn-dark">Sublet</Link>
       <Link to="/property/Hostel" className="btn btn-dark">Hostel</Link>
    </div>
    </>
  )
}

export default Header