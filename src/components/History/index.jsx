import React from 'react'

function History({history}) {
  console.log(history)
  return (
    <div>
      <h1>Your History</h1>
        {history.map(request=>{
          return(
             <div key={request}>
                <h1>Method   {request.requestDetails.method}</h1>   
                <h2> URL {request.requestDetails.url}</h2>
                <h3>
                BODY {request.requestDetails.body}
                </h3>
                <h4>Results</h4>
                <p>{JSON.stringify(request.results.data)}</p>
            </div>
          )
        })}
    </div>
  )
}

export default History