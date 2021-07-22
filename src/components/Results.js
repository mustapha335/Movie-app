import React from 'react'
import Result from './Result'

function Results({ results, openPop}) {
    return (
        <section className="results">
            {results.map (result =>(
                <Result key =  {result.imdbID} result = {result}  openPop = {openPop} /> 
            ))};
        </section>
    )
}

export default Results
