import React, {useState, useEffect} from 'react'
import axios from '../fetch/axios';
import requests from '../fetch/requests';
import './Banner.css';



const Banner = ({title}) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length * 1)
            ]
            );
            return requests;
        }
        fetchData();
    }, []);

   function shorten (str, n) {
       return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }



  return (
        <header className="banner-container" style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}>
        <div className="banner-overlay"/>
        <div className="banner-contents">
        <h1 className="banner-title">
            {movie?.name || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
        <button className="banner-button">Play</button>
        <button className="banner-button">More Info</button>
        </div>
        <p className="banner-description">
            {shorten(movie?.overview, 300)}
        </p>
        
    </div>

  

    </header>

  
  )
}

export default Banner