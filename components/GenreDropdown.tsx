import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Genres } from '@/typings';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const GenreDropdown = async () => {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },

    // ISR
    next: {
      revalidate: 60 * 60 * 24, // Refreshes cache data after 24 hours
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  console.log(data.genres);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='text-white flex justify-center items-center'>
        Genre <ChevronDown className='ml-1' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre) => (
          <DropdownMenuItem key={genre.id} className='cursor-pointer'>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
