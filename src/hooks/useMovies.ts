import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDbInterface, Movie } from '../types/movieDB.type';

interface MoviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upcoming: Movie[],
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState( true )
    const [moviesState, setMoviesState] = useState<MoviesState>({
      nowPlaying: [],
      popular: [],
      topRated: [],
      upcoming: [],
    })

    const getNowPlayingMovies = async () => {
        const nowPlaying = movieDB.get<MovieDbInterface>('/now_playing')
        const popular = movieDB.get<MovieDbInterface>('/popular')
        const topRated = movieDB.get<MovieDbInterface>('/top_rated')
        const upcoming = movieDB.get<MovieDbInterface>('/upcoming')

        const resp = await Promise.all([
          nowPlaying,
          popular,
          topRated,
          upcoming,
        ])

        setMoviesState({
          nowPlaying: resp[0].data.results,
          popular: resp[1].data.results,
          topRated: resp[2].data.results,
          upcoming: resp[3].data.results,
        })

    }

    useEffect(() => {
        getNowPlayingMovies()
         
        setIsLoading( false )

      }, [])

      return {
        ...moviesState,
        isLoading,
      }
}