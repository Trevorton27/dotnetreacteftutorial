import React, {useEffect, useState} from "react";
import MoviesList from "./MoviesList"
import { landingPageDTO } from './movies.model';

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setMovies({
          inTheaters: [
            {
              id: 1,
              title: 'Spider Man: Far From Home',
              poster:
                'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png'
            }
          ],
          upcomingReleases: [
            {
              id: 2,
              title: 'Luca',
              poster:
                'https://upload.wikimedia.org/wikipedia/en/a/a3/Luca_film_poster.jpg'
            }
          ]
        });
      }, 1000);

      return () => clearTimeout(timerId);
    });
    return (
        <>
                 <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}