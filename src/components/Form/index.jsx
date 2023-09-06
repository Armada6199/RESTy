import { useState } from 'react';
import './Form.scss';
function Form (props){
  const [formData,setFormData]=useState({method:'',url:''})
const {handleApiCall}=props;
  const handleSubmit = e => {
    e.preventDefault();
  handleApiCall(formData);
  console.log(formData)
  }
return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(e)=>setFormData({...formData,url:e.target.value})}/>
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            
            <span onClick={()=>setFormData({...formData,method:'GET'})} className={`${formData.method==='GET'?'active_method':''} method`} id="get">GET</span>
            <span onClick={()=>setFormData({...formData,method:'POST'})} className={`${formData.method==='POST'?'active_method':''}  method`} id="post">POST</span>
            <span onClick={()=>setFormData({...formData,method:'PUT'})}  className={`${formData.method==='PUT'?'active_method':''} method`} id="put">PUT</span>
            <span onClick={()=>setFormData({...formData,method:'DELETE'})}   className={`${formData.method==='DELETE'?'active_method':''}  method`} id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;