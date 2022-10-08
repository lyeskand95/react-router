import React from "react";
import CardList from "./component/CardList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from "./component/MovieDetails";

function App(){
 
  return(
  <>

   <BrowserRouter>

      <Routes>
        <Route path='/' element={<CardList/>}/>
        <Route path='/Movie/:title' element={<MovieDetails/>}/>
   
       
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App;