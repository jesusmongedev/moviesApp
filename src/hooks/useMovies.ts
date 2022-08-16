import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDbInterface, Movie } from '../types/movieDB.type';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState( true )
    const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>( [] );

    const getNowPlayingMovies = async () => {
        const resp = await movieDB.get<MovieDbInterface>('/now_playing')
        const movies = resp.data.results
        setNowPlayingMovies( movies )
    }

    useEffect(() => {
        getNowPlayingMovies()
         
        setIsLoading( false )

      }, [])

      return {
        nowPlayingMovies,
        isLoading,
      }
}