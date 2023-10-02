import { saveToLocalStorage } from "../storage/movieStorage";
import { useState } from "react";
import {
	HiChevronDoubleLeft,
	HiChevronDoubleRight,
	HiXMark,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

// function for pages: showing total pages, current page, and buttons to navigate

export function PageHandler({ page, setPage, totalPages }) {
	return (
		<>
			<button
				className='bg-[#A27B5C] rounded-md font-semibold p-1 w-28 m-5  self-center hover:bg-opacity-80'
				onClick={() => {
					if (page > 1) {
						setPage(page - 1);
					}
				}}
			>
				Previous Page
			</button>
			<nav className='space-x-5'>
				<a className='bg-[#2C3639] px-2 py-1.5'>{page}</a>
				<a>{page + 1}</a>
				<a>{page + 2}</a>
				<a>{page + 3}</a>
				<a>{page + 4}</a>
				<a>{page + 5}</a>
				<a>{totalPages}</a>
			</nav>
			<button
				className='bg-[#A27B5C] rounded-md font-semibold p-1 w-28 m-5  self-center hover:bg-opacity-80'
				onClick={() => {
					setPage(page + 1);
				}}
			>
				Next Page
			</button>
		</>
	);
}

// function for getting images

export function GetPoster({ movie }) {
	const imageUrl = movie.poster_path
		? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
		: `/img/no_image_w154.png`;

	return <img src={imageUrl} alt={movie.title} />;
}

// onClick-handlers

export const HandleItemClickSave = ({ setMovieId, item }) => {
	setMovieId(item.id);
	saveToLocalStorage("movieId", item.id);
};

export const HandleItemClickGenre = ({ setGenreId, setGenreTitle, item }) => {
	setGenreId(item.id);
	setGenreTitle(item.name);
};

// onHover-handlers

export const HoverButtons = ({ moveItemDown, moveItemUp, removeItem }) => {
	const [isHovered, setIsHovered] = useState(false);

	const onHoverHandler = () => {
		setIsHovered(true);
	};

	const onHoverLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			onMouseEnter={onHoverHandler}
			onMouseLeave={onHoverLeave}
			className='flex w-full z-1 bg-opacity-30'
		>
			<div className='absolute top-16 right-0 text-red-800'>
				<button onClick={removeItem}>
					<HiXMark className='h-12 w-12' />
				</button>
			</div>
			<div>
				<button className='absolute bottom-2/4 left-0' onClick={moveItemUp}>
					<HiChevronDoubleLeft className='h-12 w-12' />
				</button>
				<button className='absolute bottom-2/4 right-0' onClick={moveItemDown}>
					<HiChevronDoubleRight className='h-12 w-12' />
				</button>
			</div>
		</div>
	);
};

//scrolling to top when pressing Link

export const ScrollToTopLink = ({ to, children }) => {
	const handleClick = () => {
		// Scroll to the top when the link is clicked
		window.scrollTo(0, 0);
	};

	return (
		<Link to={to} onClick={handleClick}>
			{children}
		</Link>
	);
};
