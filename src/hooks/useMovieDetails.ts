import { useEffect, useState } from "react"

import { MovieComplete } from '../types/movieDB.type';
import movieDB from '../api/movieDB';
import { CreditsInterface, Cast } from '../types/creditsInterface';

interface MovieDetails {
    isLoading: boolean,
    movieComplete?: MovieComplete,
    cast: Cast[]
}

export const useMovieDetails = ( movieID: number ) => {

    const [state, setState] = useState<MovieDetails>({
      isLoading: true,
      movieComplete: undefined,
      cast: []
    })  

    const getMovieDetails = async () => {
        const movieDetails = movieDB.get<MovieComplete>(`${ movieID }`)
        const cast = movieDB.get<CreditsInterface>(`${ movieID }/credits`)

        const [ movieDetailsResp, castResp ] = await Promise.all([ movieDetails, cast ])

        setState({
            isLoading: false,
            movieComplete: movieDetailsResp.data,
            cast: castResp.data.cast
        });
        
    }

    useEffect(() => {
      getMovieDetails()
    }, [])
    

  return {
    ...state
  }
}