import { useState } from 'react';
import './Form.scss';
function Form (props){
  const [formData,setFormData]=useState({method:'',url:''})
const {handleApiCall}=props;
  const handleSubmit = e => {
    e.preventDefault();
  handleApiCall(formData);
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
            <span onClick={()=>setFormData({...formData,method:'GET'})} id="get">GET</span>
            <span onClick={()=>setFormData({...formData,method:'POST'})} id="post">POST</span>
            <span onClick={()=>setFormData({...formData,method:'PUT'})} id="put">PUT</span>
            <span onClick={()=>setFormData({...formData,method:'DELETE'})}  id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
}

export default Form;