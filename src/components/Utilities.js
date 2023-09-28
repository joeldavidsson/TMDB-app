import { saveToLocalStorage } from "../storage/movieStorage";

export function SortItems() {
	
}

export function PageHandler({ page, setPage, totalPages }) {
	return (
		<>
			<button
				className='bg-red-700 rounded-md p-1 w-28 m-5 border-black border-2'
				onClick={() => {
					if (page > 1) {
						setPage(page - 1);
					}
				}}
			>
				Previous Page
			</button>
			<nav className='space-x-5'>
				<a className='bg-black px-2 py-1.5'>{page}</a>
				<a>{page + 1}</a>
				<a>{page + 2}</a>
				<a>{page + 3}</a>
				<a>{page + 4}</a>
				<a>{page + 5}</a>
				<a>{totalPages}</a>
			</nav>
			<button
				className='bg-red-700 rounded-md p-1 w-28 m-5 border-black border-2'
				onClick={() => {
					setPage(page + 1);
				}}
			>
				Next Page
			</button>
		</>
	);
}

export const HandleItemClick = ({ setMovieId, item }) => {
	setMovieId(item.id);
};

export const HandleItemClickSave = ({ setMovieId, item }) => {
	setMovieId(item.id);
	saveToLocalStorage("movieId", item.id);
};

export const HandleItemClickGenre = ({ setGenreId, setGenreTitle, item }) => {
	setGenreId(item.id);
	setGenreTitle(item.name);
};
