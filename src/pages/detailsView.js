import { useState, useEffect } from "react";
import { fetchDetails, fetchImage } from "../api/api";
import { SelectedTitleState, movieIdState } from "../states/recoil";
import { useRecoilState } from "recoil";

function Details({ titleId }) {
	const [titleDetails, setTitleDetails] = useRecoilState(SelectedTitleState);
	const [movieId, setMovieId] = useRecoilState(movieIdState);

	useEffect(() => {
		fetchDetails(movieId, (result) => {
			setTitleDetails(result);
			console.log(movieId);
		});
	}, [setTitleDetails]);

	return (
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
	);
}

export default Details;
