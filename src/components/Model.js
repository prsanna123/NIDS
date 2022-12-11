
import axios from "axios";
import Notes from './Notes';
import React, {useState,useEffect} from "react";
import {useNavigate,Link} from "react-router-dom";
export const Model = (props) => {
    const {showAlert}=props
    let navigate = useNavigate();
    const [filename,setfilename] = useState({FileName:""})
    const [loading, setloading] = useState(false);

    const predictKNN = ()=>{
        document.getElementById('truth').textContent="";
        document.getElementById('Prediction').textContent = "";
        setloading(true);
        const url = `http://localhost:5000/api/auth/predictKNN?Input=${JSON.stringify(filename)}`
        axios.get(url).then(response=>{
            console.log(response);
            document.getElementById('truth').textContent = response.data.result;
            formatResult();
            setloading(false);
        }).catch(error=>{
            console.log(error)
        })
        
    }
    useEffect(() => {
        const func = ()=>{
            if(localStorage.getItem("token")===null)
            navigate("/login");
        }
        func()
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    const updateFileName=(e)=>{
        setfilename({...filename,[e.target.name]:e.target.value.slice(12)})
    }

    useEffect(() => {
        console.log(filename)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateFileName])
    const formatResult = ()=>{
        let result = document.getElementById("truth").textContent.split("\r\n");
        console.log(result)
        document.getElementById("truth").textContent = result[0]
        document.getElementById("Prediction").textContent = result[1]
    }
  return (
    <div>
        <div className="d-flex justify-content-center" style={{paddingTop:"3rem",paddingBottom:"3rem"}}>
            <h2>Choose File for Prediction</h2>
        </div>
        <div style={{paddingLeft:"25rem"}}>
        <div className="d-flex justify-content-center" style={{borderStyle: 'dashed',borderRadius: 0,width:"50%"}}>
            <input  id="file-input" type="file" className="btn btn-primary" accept=".txt" name="FileName" onChange={updateFileName}/> 
        </div>
        </div>
        <div className="d-flex justify-content-center" id="loading">
            {loading===true?<img src={require('D:/MERNdemostration/inotebook2/src/components/icons8-spinner.gif')} alt='loading...'/>:<img src="" alt=""/>}
        </div><br></br>
        <div className="text-center"><button className="btn btn-primary  text-center" role="button" onClick={predictKNN} disabled={filename.FileName===""?true:false}>Predict by KNN</button></div>
        
        {/* <button className="btn btn-primary" onClick={predictKNN} disabled={filename.FileName===""?true:false}>Predict by KNN</button> */}
            <p id="para"></p>
            <h5>Truth value:</h5>
            <h5 id="truth"></h5>
            <h5>Prediction:</h5>
            <h5 id="Prediction"></h5>


    </div>
  )
}
export default Model;