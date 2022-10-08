import React from 'react';
import { useParams } from 'react-router-dom';
import DataMovie from '../dataMovie'

const MovieDetails = () => {
    
  
    const {title} =useParams();
    const MyDataM =  DataMovie()

   return MyDataM.map(e => {
        if(title === e.title){
            return (
                <div>
                    <h1>{e.title} </h1>
                   <p></p>
                   <iframe width="100%" height="600px" src={e.posterURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            )
        }
            
    })

    // return (
    //     <div>
    //         <h1> Is : {title} </h1>
    //        <p></p>
    //        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/der8A7Z9u7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    //     </div>
    // );
};

export default MovieDetails;