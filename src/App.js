import axios from "axios";
import React, { useState }from "react"
import Search from "./components/Search"
import Results from "./components/Results"
import Popup from "./components/Popup"

function App() {
  const [state, setState]= useState({
     s:"",
     results:[],
     selected:{},

  });
  const apiUrl =  "http://www.omdbapi.com/?i=tt3896198&apikey=fd48b437";
  const search = (e) =>{
    if (e.key === "Enter"){
      axios(apiUrl + "&s=" + state.s).then(({data}) =>{
        let results= data.Search;
        console.log(data)

        setState(prevState => {
          return{...prevState, results:results}
        })
      });
    }
  }
  const handleInput= (e) => {
    let s = e.target.value;
    setState(prevState =>{
      return{...prevState, s:s}
    });
    
  };
  const openPop= id => {
    axios(apiUrl + "&i=" + id).then(( {data})=>{
      let result = data;
      console.log(data.imdbID)
      

      setState(prevState =>{
        return{...prevState, selected: result}
      });
    });
  }
  const closePop=()=>{
    setState(prevState =>{
      return{...prevState, selected:{}}
    })
  }
  return (
    <div className="App">
      <header>
        
        <h1>Movies</h1>
        <main>
         <Search handleInput={handleInput} search={search}/>
         <Results results={state.results} openPop={openPop}/>


         {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePop={closePop} /> : false}
        </main>
        
      </header>
    </div>
  );
}

export default App;
