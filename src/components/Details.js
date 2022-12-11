import React,{useContext,useEffect} from 'react'
import noteContext from "../context/notes/noteContext"
import {Link} from 'react-router-dom'
import profilepic from './jkicon.png'
// import './jk.css'
export const Details = () => {
  const context = useContext(noteContext);
  const {info,getdetails} = context;
  let id;
  let name;
  let email;
  useEffect(() => {
    if(localStorage.getItem('token')){
        getdetails()
    }
    
    // eslint-disable-next-line
}, [])
  {info.map((note) => {
    id=note._id;
    name=note.name;
  email=note.email})}

    
  return (
    <div>
    <form>
      <div className="container text-center bg-secondary w-25 mt-3">
       {/* <i className="fa fa-user-o fa-10x mt-2" aria-hidden="true" ></i> */}
       <img
                      src={profilepic}
                      className="rounded-circle mb-3"
                      alt=""
                      width="120px"
                      height="130px"
                    />
   <div className="mb-3 ">
     <label htmlFor="exampleInputEmail1" className="form-label mt-2">{name} </label>
     <label></label>
    
   </div>
   <div className="mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label mt-2">{email}</label>
    
   </div>
   <div>
   <Link className="btn btn-primary mx-1"  to="/"role="button">close</Link></div></div>
 </form> 
{/* <div className="container-fluid" >
<div className="card" >
    <br></br>
    {/* <img className="card-img-top" src="jkicon.png" alt="Card image cap"></img> */}
    {/* <img src={profilepic}></img>
    <br></br>
    <h5 className="card-title ">{name}</h5>
    <label htmlFor="exampleInputPassword1" className="form-label mt-2">{email}</label>
    <Link className="btn btn-primary mx-1"  to="/"role="button">close</Link>
    <br></br>
</div> */}
{/* </div> */} 
</div> 
  )
}
export default Details