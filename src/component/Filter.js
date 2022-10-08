import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Film from './Film';

const SearchBox = (props) => {
	const [textFiltre, setTextFilter] = useState("");



	return (
		<div>
			<input
				
				
				onChange={(event) => setTextFilter(event.target.value)}
				placeholder='Type to search...'
			></input>
			{/* <h2>{textFiltre}</h2> */}
			{props.listFilm.filter(film=> film.title.toLowerCase().includes(textFiltre.toLocaleLowerCase()) ).map((item,key) => {
				return (
				<Link to={`/movie/${item.title}`} key={key}>
					<Film
					
					  title={item.title}
					  description={item.description}
					  posterURL={item.posterURL}
					  rating={item.rating}

					/>
					</Link>
				)
			})}
	
		</div>
	);
};

export default SearchBox;