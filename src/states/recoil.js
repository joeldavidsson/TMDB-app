import { atom } from "recoil";

export const SelectedTitleState = atom({
	key: "titleDetails",
	default: {},
});

export const movieRecState = atom({
	key: "recommendation",
	default: [],
});

export const SearchTitleState = atom({
	key: "searchTitle",
	default: "",
});

export const GenreIdState = atom({
	key: "genreId",
	default: 0,
});

export const GenreTitleState = atom({
	key: "genreTitle",
	default: "",
});

export const savedListsState = atom({
	key: "savedListsState",
	default: [],
});
