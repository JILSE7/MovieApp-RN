import React, { useEffect, useState } from 'react'
import { Movie, MovieDBNowPlaying } from '../Interfaces/movieInterface';
import movieDB from '../Api/movieDB';


const UseMovie = () => {

    const [movies, setmovies] = useState<Movie[]>([]);
    
    const [isLoading, setisLoading] = useState(true);

    const getMovies = async() => {
        
        
        const resp = await movieDB.get<MovieDBNowPlaying>("/now_playing");

        setmovies([...resp.data.results]);
        
        setisLoading(false);
        
    }

    useEffect( () => {
        getMovies();
    }, []);

    return {movies, isLoading};
}

export default UseMovie
