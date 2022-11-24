import { gql, useApolloClient } from '@apollo/client';
import { useEffect, useState } from 'react';

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const client = useApolloClient();

	useEffect(() => {
		client
			.query({
				query: gql`
					query {
						allMovies {
							title
							id
						}
					}
				`,
			})
			.then(response => setMovies(response.data.allMovies));
	}, [client]);

	return (
		<div>
			{movies.map(movie => (
				<li key={movie.id}>{movie.title}</li>
			))}
		</div>
	);
};

export default Movies;
