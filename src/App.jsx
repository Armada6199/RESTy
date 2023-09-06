import React, { useEffect, useState } from 'react';
import axios from 'axios';


import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';

//test
function App() {

  const [data, setData] = useState(null)
  const [reqparams, setReqparams] = useState({})
  const [loading, setLoading] = useState([])

  const handleApiCall = async (requestParams) => {
    setReqparams(requestParams);
    if (requestParams.method !== "") setLoading(false)
  };

  useEffect(() => {

    updatePage()
    async function updatePage() {

      try {
        let fetchedData;

        if (reqparams.method === 'get') {
          fetchedData = await axios.get(reqparams.url);
        } else if (reqparams.method === 'post') {
          fetchedData = await axios.post(reqparams.url, reqparams.obj);
        } else if (reqparams.method === 'put') {
          fetchedData = await axios.put(reqparams.url, reqparams.obj);
        } else if (reqparams.method === 'delete') {
          fetchedData = await axios.delete(reqparams.url);
        }

        if (fetchedData) {

          console.log(fetchedData)
          setData(fetchedData);
          setLoading(true)
        }

      } catch (err) {
        console.log(err)
      }
    }


  }, [reqparams])

  console.log(loading)
  return (
    <>
      <Header />
      <div className='req-info' data-testid="Request_Method">Request Method: {reqparams.method}</div>
      <div className='req-info' data-testid="url">URL: {reqparams.url}</div>
      <Form handleApiCall={handleApiCall} />

      <Results data={data} loading={loading} setReqparams={setReqparams} reqparams={reqparams} setLoading={setLoading} />
      <Footer />
    </>
  );

}

export default App;