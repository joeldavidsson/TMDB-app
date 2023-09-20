import { atom } from "recoil";

export const SelectedTitleState = atom({
	key: "titleDetails",
	default: {},
});

export const movieIdState = atom({
	key: "movieId",
	default: 0,
});
