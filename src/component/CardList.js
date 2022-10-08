import React, { useState } from "react";
import DataMovie from '../dataMovie'
import SearchBox from "./Filter";


function CardList() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [posterURL, setPosterurl] = useState("");
  let [rating, setRating] = useState("");



  let [listFilm, setListFilm] = useState( DataMovie())

function handleSubmit() {
  const newdata = {
    title: title,
    description: description,
    posterURL: posterURL,
    rating: rating,
  };

  setListFilm([...listFilm, newdata])

}

return (
  <>
   <SearchBox listFilm={listFilm}/>
   <h1>ADD FILM</h1>
    <form onSubmit={e => e.preventDefault()}>
      <p1>Titre:</p1><input
        type="text"
        name="title"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        placeholder="title"
      /><br/>
      <p1>Description:</p1><input
        type="text"
        name="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        placeholder="description"
      /><br/>
      <p1>URL:</p1><input
        type="text"
        name="posterURL"
        value={posterURL}
        onChange={(event) => {
          setPosterurl(event.target.value);
        }}
        placeholder="url"
      /><br/>
      <p1>Rating:</p1><input
        type="text"
        name="rating"
        value={rating}
        onChange={(event) => {
          setRating(event.target.value);
        }}
        placeholder="rate"
      /><br/>
      <button type="submit" onClick={()=>{
       
        handleSubmit()
        }}>
        Add New
      </button>
    </form>
   
   
  </>
);
}

export default CardList;
