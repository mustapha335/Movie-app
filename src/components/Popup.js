import React from 'react'

function Popup({selected, closePop}) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title}<span>{selected.Year}</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot"><img src={selected.Poster} alt=""/></div>
                <p>{selected.plot}</p>
            </div>
            <button className="close" onClick={closePop}>
               Close
            </button>
            
        </section>
    )
}

export default Popup
