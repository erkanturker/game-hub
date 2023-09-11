import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { data, error, isLoading } = useGenres();

	return (
		<div>
			{error && <p>{error}</p>}
			<ul>
				{data.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</div>
	);
};

export default GenreList;
