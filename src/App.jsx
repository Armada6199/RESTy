import { useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';
import History from './components/History';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [requestHistory,setRequestHistory]=useState([]);
  const [showHistory,setShowHistory]=useState(false);
  const handleApiCall = async (requestParams) => {
    const axiosRequest={
      url:requestParams.url,
      method:requestParams.method,
      data:requestParams.body,
      headers: {'X-Requested-With': 'XMLHttpRequest'},
    };
    const returneData=await axios.request(axiosRequest);
    const newRequest={
      requestDetails:requestParams,
      results:returneData
    }
    requestHistory.push(newRequest);
    const newHistory=requestHistory;
    setRequestHistory(newHistory);
    setRequestParams(requestParams);
    setData(returneData);
  };

  return (
    //fds
    <>
      <Header />
      <div >Request Method: <span className='colorfull'>{requestParams.method}</span></div>
      <div>URL: {requestParams.url}</div>
      <div>Body:{requestParams.body}</div>
      <Form handleApiCall={handleApiCall} />
      {data?<Results data={data} />:null}
      <button onClick={()=>setShowHistory((prev)=>!prev)}>Show/hide Previous History</button>
      {showHistory?<History history={requestHistory}/>:null}
      <Footer />
    </>
  );
};

export default App;
