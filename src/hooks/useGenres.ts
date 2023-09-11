import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    slug: string;
}

const useGenres = () => useData<Genre>("/genres");

//useGenres().data = mockDataGenres.results;


export default useGenres;