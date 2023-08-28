import { useState } from "react";
import "./Form.scss";
function Form(props) {
  const [showBody, setShowBody] = useState(false);
  const [formData, setFormData] = useState({ method: '', url: '',body:'' });
  const { handleApiCall } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            onClick={() => {
              setFormData({ ...formData, method: "GET" });
            }}
            id="get"
          >
            GET
          </span>
          <span
            onClick={() => {
              setFormData({ ...formData, method: "POST" });
              setShowBody(true);
            }}
            id="post"
          >
            POST
          </span>
          <span
            onClick={() => {
              setFormData({ ...formData, method: "PUT" });
              setShowBody(true);
            }}
            id="put"
          >
            PUT
          </span>
          <span
            onClick={() => {
              setFormData({ ...formData, method: "DELETE" });
            }}
            id="delete"
          >
            DELETE
          </span>
        </label>
        <div>
          {showBody?<textarea onChange={(e)=>{setFormData({...formData,body:e.target.value})}} name="" id="" cols="30" rows="10" placeholder="Please Enter Your Body Here"></textarea>:''}
        </div>
      </form>
    </>
  );
}

export default Form;
