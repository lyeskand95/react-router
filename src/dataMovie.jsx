import  { useState } from 'react'

 let   DataMovie =( ) => {
    let [listFilm, setListFilm] = useState([
        {
          title: "Prison Break",
          description: "Série",
          posterURL: "https://www.youtube.com/embed/der8A7Z9u7c",
          rating: "5",
          details:'lorem5 rrvcirlcvko: i'
        },
        {
          title: "Legend",
          description: "film2015",
          posterURL: "https://fr.wikipedia.org/wiki/Legend_(film,_2015)",
          rating: "4.5",
          details:'lorem5 rrvcirlcvko: i'
        },
        {
          title: "Taken",
          description: "film",
          posterURL: "https://fr.wikipedia.org/wiki/Taken_(film)",
          rating: "5",
          details:'lorem5 rrvcirlcvko: i'
        },
      ])
     
      return listFilm
}
export default DataMovie
