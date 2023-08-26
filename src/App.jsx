import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const handleApiCall = async (requestParams) => {
    const axiosRequest={
      url:requestParams.url,
      method:requestParams.method,
    };
    const returneData=await axios.request(axiosRequest);
    setRequestParams(requestParams);
    setData(returneData);
  };

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={handleApiCall} />

      {data?<Results data={data} />:null}
      
      <Footer />
    </>
  );
};

export default App;
