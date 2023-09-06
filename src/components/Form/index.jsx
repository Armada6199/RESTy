import { useState } from 'react';
import './Form.scss';

function Form ({handleApiCall}) {
  const [ method , setMethod ] = useState('')
  const [ url , setUrl ] = useState('')
  const [ obj , setObj ] = useState('')

  const handleSelectMethod = (e) => {
      setMethod(e.target.id)
     
      
  }
  const handleUrl = (e) => {
    setUrl(e.target.value)
  }
  const handleObj = (e) => {
    setObj(e.target.value)
  }
  const  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:method || "get",
      url: url || 'https://swapi.dev/api/people/',
      obj: obj
    };
    handleApiCall(formData);
  }

  //test
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={handleUrl} />
            <button type="submit" data-testid ="submitBtn" >GO!</button>
          </label>
          <label >
            <textarea name= "textArea" placeholder='Enter The Body' onChange={handleObj}></textarea>
          </label>
          <label className="methods">
            <span data-testid="get"className={method === 'get'?'active':''}id="get" onClick={handleSelectMethod}>GET</span>
            <span className={method === 'post'?'active':''}id="post" onClick={handleSelectMethod}>POST</span>
            <span className={method === 'put'?'active':''}id="put" onClick={handleSelectMethod}>PUT</span>
            <span className={method === 'delete'?'active':''}id="delete" onClick={handleSelectMethod}>DELETE</span>
          </label>
        </form>
      </>
    );

}

export default Form;