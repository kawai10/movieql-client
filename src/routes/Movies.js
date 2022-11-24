import { gql, useQuery } from '@apollo/client';

const ALL_MOVIES = gql`
	query getMoives {
		allMovies {
			title
			id
		}
	}
`;

const Movies = () => {
	const { data, loading, error } = useQuery(ALL_MOVIES);
	if (loading) {
		return <h1>Loading....</h1>;
	}

	if (error) {
		return <h1>Could not Fetch!</h1>;
	}
	return (
		<ul>
			{data.allMovies.map(movie => (
				<li key={movie.id}>{movie.title}</li>
			))}
		</ul>
	);
};

export default Movies;
