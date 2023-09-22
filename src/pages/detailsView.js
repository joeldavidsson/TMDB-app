import { useEffect } from "react";
import { fetchDetails, fetchImage, fetchRecommendations } from "../api/api";
import {
	SelectedTitleState,
	movieIdState,
	movieRecState,
} from "../states/recoil";
import { useRecoilState } from "recoil";
import {
	saveToLocalStorage,
	loadFromLocalStorage,
} from "../storage/movieStorage";

function Details() {
	const [titleDetails, setTitleDetails] = useRecoilState(SelectedTitleState);
	const [movieId, setMovieId] = useRecoilState(movieIdState);
	const [recommendations, setRecommendations] = useRecoilState(movieRecState);
	const imgWidth = "w154";

	useEffect(() => {
		const storedMovieId = loadFromLocalStorage("movieId");
		const storedTitleDetails = loadFromLocalStorage("titleDetails");
		const storedRecommendations = loadFromLocalStorage("recommendations");

		if (storedMovieId !== null) {
			setMovieId(storedMovieId);
		}

		if (storedTitleDetails !== null) {
			setTitleDetails(storedTitleDetails);
		}

		if (storedRecommendations !== null) {
			setRecommendations(storedRecommendations);
		}

		if (movieId !== 0) {
			fetchDetails(movieId, (data) => {
				setTitleDetails(data);
				saveToLocalStorage("titleDetails", data);
				console.log(data);
			});

			fetchRecommendations(movieId, (data) => {
				console.log("Recommendations API Response:", data);
				if (Array.isArray(data)) {
					setRecommendations(data);
					saveToLocalStorage("recommendations", data);
				} else {
					setRecommendations([]);
				}
			});
		}
	}, [movieId, setTitleDetails, setRecommendations, setMovieId]);

	const handleItemClick = (item) => {
		setMovieId(item.id);
		saveToLocalStorage("movieId", item.id);
	};

	return (
		<div>
			<div>
				<img
					src={fetchImage(imgWidth, titleDetails.poster_path)}
					alt={titleDetails.title}
				></img>
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
					{recommendations.map((item) => (
						<li key={item.id} onClick={() => handleItemClick(item)}>
							<img
								src={fetchImage(imgWidth, item.poster_path)}
								alt={titleDetails.title}
							></img>
							<h1 className='text-xl'>{item.title}</h1>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Details;
