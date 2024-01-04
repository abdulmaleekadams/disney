import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
    if (!term) notFound()
    
    const termToUse = decodeURI(term)

    // API call to get the searched movies
    // API call to get the popular movies

    return <div>Welcom to the search page {termToUse}</div>;
};

export default SearchPage;
