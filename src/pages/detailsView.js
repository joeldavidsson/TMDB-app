import { useState, useEffect } from "react";
import { fetchDetails, fetchImage, fetchRecommendations } from "../api/api";
import { SelectedTitleState, movieIdState } from "../states/recoil";
import { useRecoilState, useRecoilValue } from "recoil";


function Details() {
	const [titleDetails, setTitleDetails] = useRecoilState(SelectedTitleState);
	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const [recommendations, setRecommendations] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetchDetails(movieId, (data) => {
			setTitleDetails(data);
			console.log(movieId);
		});
	}, [setTitleDetails, movieId]);

	useEffect(() => {
		fetchRecommendations(
			movieId,
			page,
			(data) => {
				const itemsWithPosters = data.results.map((item) => ({
					...item,
					poster_path: fetchImage(item.poster_path),
				}));
				setRecommendations(itemsWithPosters);
				setPage(data.page);
			});
		console.log(page);
	}, [page, movieId]);

	const handleItemClick = (data) => {
		setMovieId(data.id);
	};

	return (
		<div>
			<div>
				<img src={fetchImage(titleDetails.poster_path)}></img>
				<h1 className='text-xl'>{titleDetails.title}</h1>
				<span>
					<p>Genres: </p>
					{titleDetails.genres &&
						titleDetails.genres.map((item) => (
							<div key={item.id}>
								<p>{item.name}</p>
							</div>
						))}
				</span>
				<p>Release date: {titleDetails.release_date}</p>
				<p>{titleDetails.runtime} minutes.</p>
				<p>Number of votes: {titleDetails.vote_count}</p>
				<p>Average rating: {titleDetails.vote_average} out of 10</p>
				<p>{titleDetails.overview}</p>
			</div>
			<div>
				<ul>
					<h1>If you like this movie, you might like these: </h1>
					{recommendations.map((data) => (
						<li key={data.id} onClick={() => handleItemClick(data)}>
							<img src={fetchImage(data.poster_path)}></img>
							<h1 className='text-xl'>{data.title}</h1>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Details;
