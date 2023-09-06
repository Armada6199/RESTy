import { useReducer } from 'react';
import './Form.scss';
import { formStateReducer, initialState } from '../../utils/fReducer';

function Form({ handleApiCall }) {

  const [state, dispatch] = useReducer(formStateReducer, initialState)
  const handleSelectMethod = (e) => {
    // setMethod(e.target.id)
    dispatch({ type: 'methodStatus', payload: e.target.id })


  }
  const handleUrl = (e) => {
    // setUrl(e.target.value)
    dispatch({ type: 'urlStatus', payload: e.target.value })
  }
  const handleObj = (e) => {
    // setObj(e.target.value)
    dispatch({ type: 'objStatus', payload: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: state.method || "get",
      url: state.url || 'https://swapi.dev/api/people/',
      obj: state.obj
    };
    handleApiCall(formData);
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handleUrl} />
          <button type="submit" data-testid="submitBtn" >GO!</button>
        </label>
        <label >
          <textarea name="textArea" placeholder='Enter JSON OBJ only' onChange={handleObj}></textarea>
        </label>
        <label className="methods">
          <span data-testid="get" className={state.method === 'get' ? 'active' : ''} id="get" onClick={handleSelectMethod}>GET</span>
          <span className={state.method === 'post' ? 'active' : ''} id="post" onClick={handleSelectMethod}>POST</span>
          <span className={state.method === 'put' ? 'active' : ''} id="put" onClick={handleSelectMethod}>PUT</span>
          <span className={state.method === 'delete' ? 'active' : ''} id="delete" onClick={handleSelectMethod}>DELETE</span>
        </label>
      </form>
    </div>
  );

}

export default Form;