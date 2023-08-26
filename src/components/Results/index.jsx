
function Results(props) {
const {data,headers}=props.data;
console.log(headers);

  return (
    <section>
      <h1>{headers}</h1>
        <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
      </section>
  )
}

export default Results;