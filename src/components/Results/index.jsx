import "./Results.scss"
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'

function Results({ data, loading, setReqparams, reqparams, setLoading }) {


  function handleNext() {

    let obj = {
      method: data.config.method,
      url: data.data.next,
      obj: reqparams.obj
    }

    if (reqparams.method !== "") setLoading(false)
    data && setReqparams(obj)

  }
  function handlePrevious() {

    let obj = {
      method: data.config.method,
      url: data.data.previous,
      obj: reqparams.obj
    }
    if (reqparams.method !== "") setLoading(false)

    data && setReqparams(obj)
  }

  // console.log(loading)
  return (
    <div className="results-body">
      <div>
        {data && data.data.next && <button onClick={handleNext}>Next</button>}
        {data && data.data.previous && <button onClick={handlePrevious}>Previous</button>}
      </div>
      {loading ? (
        <section data-testid="section-of-data">
          <pre data-testid="testing-count" ><span>Count:</span> {data ? <JSONPretty id="json-pretty" data={data.data.count} /> : null}</pre>
          <pre><span>Results:</span> {data ? <JSONPretty id="json-pretty" data={data.data.results} /> : null}</pre>
          <pre><span>Headers:</span> {data ? <JSONPretty id="json-pretty" data={data.headers} /> : null}</pre>
        </section>
      ) : (
        <section>loading....</section>
      )}
    </div>
  );
}

export default Results;