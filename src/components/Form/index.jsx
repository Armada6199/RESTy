import { useState } from "react";
import "./Form.scss";
function Form(props) {
  const [showBody, setShowBody] = useState(false);
  const [formData, setFormData] = useState({ method: "", url: "", body: "" });
  const { handleApiCall } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>URL: </span>
        <input
          name="url"
          type="text"
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        />
        <label>
          <span
            onClick={() =>{
              setFormData({ ...formData, method: "GET" });
              setShowBody(false);
            } }
            className={`${
              formData.method === "GET" ? "active_method" : ""
            } method`}
            id="get"
          >
            GET
          </span>
          <span
            onClick={() => {
              setFormData({ ...formData, method: "POST" });
              setShowBody(true);
            }}
            className={`${
              formData.method === "POST" ? "active_method" : ""
            }  method`}
            id="post"
          >
            POST
          </span>
          <span
            onClick={() => {
              setFormData({ ...formData, method: "PUT" });
              setShowBody(true);
            }}
            className={`${
              formData.method === "PUT" ? "active_method" : ""
            } method`}
            id="put"
          >
            PUT
          </span>
          <span
            onClick={() =>
              {
                setShowBody(false);
                setFormData({ ...formData, method: "DELETE" })}
              } 
            className={`${
              formData.method === "DELETE" ? "active_method" : ""
            }  method`}
            id="delete"
          >
            DELETE
          </span>
        </label>
        <div>
          {showBody ? (
            <textarea
              onChange={(e) => {
                setFormData({ ...formData, body: e.target.value });
              }}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Please Enter Your Body Here"
            ></textarea>
          ) : (
            ""
          )}
        </div>
        <button type="submit">GO!</button>
      </form>
    </>
  );
}

export default Form;
