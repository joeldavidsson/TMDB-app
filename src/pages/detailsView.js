import { useEffect } from "react";
import { fetchDetails, fetchRecommendations } from "../api/api";
import {
	SelectedTitleState,
	movieRecState,
	GenreIdState,
	GenreTitleState,
} from "../states/recoil";
import { useRecoilState } from "recoil";
import { HandleItemClickGenre, GetPoster } from "../components/Utilities";
import { useParams } from "react-router-dom";
import { ScrollToTopLink } from "../components/Utilities";

function Details() {
	const [titleDetails, setTitleDetails] = useRecoilState(SelectedTitleState);
	const [recommendations, setRecommendations] = useRecoilState(movieRecState);
	const [genreId, setGenreId] = useRecoilState(GenreIdState);
	const [genreTitle, setGenreTitle] = useRecoilState(GenreTitleState);
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			fetchDetails(id, (data) => {
				setTitleDetails(data);
				console.log(data);
			});

			fetchRecommendations(id, (data) => {
				console.log("Recommendations API Response:", data);
				if (Array.isArray(data)) {
					setRecommendations(data);
				} else {
					setRecommendations([]);
				}
			});
		}
	}, [id, setTitleDetails, setRecommendations]);

	return (
		<div className='flex flex-col p-20 w-full'>
			<div className='flex flex-row justify-center items-center p-12 mx-20 w-full'>
				<div className='flex w-96 border-2 border-black shadow-2xl'>
					<GetPoster movie={titleDetails} />
				</div>
				<span className='flex flex-col gap-5 p-20 w-1/2'>
					<h1 className='text-3xl font-semibold'>{titleDetails.title}</h1>
					<span className='flex gap-2'>
						<p className='self-center'>Genres: </p>
						{titleDetails.genres &&
							titleDetails.genres.map((item) => (
								<ScrollToTopLink to={`../discover/${item.name}`}>
									<div
										key={item.id}
										className='flex flex-row bg-[#2C3639] p-2 rounded-xl text-sm hover:opacity-80 w-auto justify-center'
									>
										<p
											onClick={() =>
												HandleItemClickGenre({
													item,
													setGenreId,
													setGenreTitle,
												})
											}
										>
											{item.name}
										</p>
									</div>
								</ScrollToTopLink>
							))}
					</span>

					<p>Release date: {titleDetails.release_date}</p>
					<p>Runtime: {titleDetails.runtime} minutes.</p>
					<p>Number of votes: {titleDetails.vote_count}</p>
					<p>Average rating: {titleDetails.vote_average} out of 10</p>
					<p className='italic'>{titleDetails.overview}</p>
				</span>
			</div>
			<div className='flex flex-col justify-center items-center w-full'>
				<h2 className='text-lg'>
					If you like this movie, you might like these titles:{" "}
				</h2>
				<ul className='flex flex-row w-full self-center justify-center text-center p-10 gap-6 overflow-hidden'>
					{recommendations.map((item) => (
						<ScrollToTopLink to={`../details/${item.id}`}>
							<li className='flex w-28 h-44 border-2 border-black hover:opacity-80 shadow-2xl'>
								<GetPoster movie={item} />
							</li>
							<li
								key={item.id}
								className='w-28 whitespace-nowrap overflow-hidden text-ellipsis text-center hover:overflow-visible hover:whitespace-normal'
							>
								<p className='font-semibold'>{item.title}</p>
							</li>
						</ScrollToTopLink>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Details;
