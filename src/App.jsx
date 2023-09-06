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
    setReqparams(requestParams);
    if (requestParams.method !== "") setLoading(false)
  };

  useEffect(() => {

    updatePage()
    async function updatePage() {

      try {
        let fetchedData;

        if (state.reqparams && state.reqparams.method === 'get') {
          fetchedData = await axios.get(state.reqparams.url);
        } else if (state.reqparams && state.reqparams.method === 'post') {
          fetchedData = await axios.post(state.reqparams.url, state.reqparams.obj);
        } else if (state.reqparams && state.reqparams.method === 'put') {
          fetchedData = await axios.put(state.reqparams.url, state.reqparams.obj);
        } else if (state.reqparams && state.reqparams.method === 'delete') {
          fetchedData = await axios.delete(state.reqparams.url);
        }

        if (fetchedData) {
          dispatch({ type: 'historyStatus', payload: { data: { results: fetchedData.data.results, headers: fetchedData.headers }, params: state.reqparams } })
          dispatch({ type: 'dataStatus', payload: fetchedData })
          dispatch({ type: 'loadingStatus', payload: true })
        }

      } catch (err) {
        console.log(err)
      }
    }


    // }, [reqparams])
  }, [state.reqparams])

  return (
    <>
      <Header />
      <button data-testid = 'history-btn'className="history-btn" onClick={handleHistoryRenderStatus}>Go to History</button>
      {state.historyRender ?
        <>
          <div className='req-info' data-testid="Request_Method">Request Method: {state.reqparams && state.reqparams.method}</div>
          <div className='req-info' data-testid="url">URL: {state.reqparams && state.reqparams.url}</div>
          <Form handleApiCall={handleApiCall} />
          <Results data={state.data} loading={state.loading} dispatch={dispatch} reqparams={state.reqparams} />

        </>
        :
        <History history={state.history} />
      }
      <Footer />
    </>
  );

}

export default App;