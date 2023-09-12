import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background:string;
}

const useGenres = () => useData<Genre>("/genres");

//useGenres().data = mockDataGenres.results;


export default useGenres;