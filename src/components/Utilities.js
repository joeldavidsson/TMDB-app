import { useState } from "react";
import { useRecoilState } from "recoil";
import { movieIdState } from "../states/recoil";
import { saveToLocalStorage, clearLocalStorage } from "../storage/movieStorage";

export function NextPageButton({ page, setPage }) {
	return (
		<button
			onClick={() => {
				setPage(page + 1);
			}}
		>
			Next Page
		</button>
	);
}

export function PrevPageButton({ page, setPage }) {
	return (
		<button
			onClick={() => {
				if (page > 1) {
					setPage(page - 1);
				}
			}}
		>
			Previous Page
		</button>
	);
}

export const HandleItemClick = ({ setMovieId, item }) => {
	setMovieId(item.id);
};

export const HandleItemClickSave = ({ setMovieId, item }) => {
	setMovieId(item.id);
	saveToLocalStorage("movieId", item.id);
};
