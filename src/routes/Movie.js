import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
	query getMovie($movieId: String!) {
		movie(id: $movieId) {
			id
			title
		}
	}
`;

const Movie = () => {
	const { id } = useParams();
	const { data, loading, error } = useQuery(GET_MOVIE, {
		variables: {
			movieId: id,
		},
	});
	console.log(data);
	if (loading) {
		return <h1>Fetching movie....</h1>;
	}
	return <div>This is Movie page</div>;
};

export default Movie;
