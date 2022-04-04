import React, {useState, useEffect} from 'react'
import axios from '../fetch/axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
      height:"600",
      width:"100%",
      playerVars: {

        autoplay:1,
      }
    }

    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
      }
    }


  return (
    <div className="row">
        <h2 className="row-title">{title}</h2>
        <div className="row-posters">
        
        {movies.map(movie => (
        <img 
        key={movie.id}
        onClick={() => handleClick(movie)}
        src ={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.name}
        className={`row-poster ${isLargeRow && "row-posterLarge"}`}
        />
        ))}

        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

    </div>
  )
}

export default Row