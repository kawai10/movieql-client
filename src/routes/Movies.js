import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

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
				<li key={movie.id}>
					<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default Movies;
