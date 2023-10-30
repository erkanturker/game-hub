import usePlatforms from "./usePlatforms";

const usePlatfrom = (platfromId?: number) => {
	const { data: platforms } = usePlatforms();

	const platform = platforms?.results.find((p) => p.id == platfromId);

	return platform;
};

export default usePlatfrom;
