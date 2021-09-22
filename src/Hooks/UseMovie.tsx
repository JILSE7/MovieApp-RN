import React, { useEffect, useState } from 'react'
import { Movie, MovieDBResponse } from '../Interfaces/movieInterface';
import movieDB from '../Api/movieDB';

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upcoming: Movie[],
}

const UseMovie = () => {


    //Codigo Mio
 /*    const [movies, setmovies] = useState<Movie[]>([]);
    const [moviesPopular, setmoviesPopular] = useState<Movie[]>([]);
    const [moviesTop, setmoviesTop] = useState<Movie[]>([]);
    const [moviesUp, setmoviesUp] = useState<Movie[]>([]); */

    const [movieState, setMovieState] = useState<MoviesState>({
        nowPlaying:[],
        popular:[],
        topRated:[],
        upcoming:[],
    });
    
    const [isLoading, setisLoading] = useState(true);

    const getMovies = async() => {
        
        
        const [respNowPlaying, respPopular, respTop, respUp] =await Promise.all([
            movieDB.get<MovieDBResponse>("/now_playing"),
            movieDB.get<MovieDBResponse>("/popular"),    
            movieDB.get<MovieDBResponse>("/top_rated"),
            movieDB.get<MovieDBResponse>("/upcoming"),
        ])  
        
        setMovieState({
                nowPlaying : [...respNowPlaying.data.results],
                popular :  [...respPopular.data.results],
                topRated:  [...respTop.data.results],
                upcoming:  [...respUp.data.results],
        })

        
        
        
        setisLoading(false);
        
    }

    useEffect( () => {
        getMovies();
    }, []);

    return {...movieState, isLoading};
}

export default UseMovie
