import MoviesCarousel from '@/components/MoviesCarousel';
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '@/lib/getMovies';
import Image from 'next/image';

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className=''>
      {/* Carousel Banner Wrapper */}

      <div className='flex flex-col space-y-2 xl:-mt-48'>
        {/* <MoviesCarousel movies={...} title='Upcoming' /> */}
        <MoviesCarousel title='Upcoming' movies={upcomingMovies} />
        <MoviesCarousel title='Top Rated' movies={topRatedMovies} />
        <MoviesCarousel title='Popular' movies={popularMovies} />
      </div>
    </main>
  );
}
