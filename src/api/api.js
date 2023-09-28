const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTBiMjZmODU0ZTM2ZDIxZjUwYmU3YmQxYzBiNzUwMCIsInN1YiI6IjY1MDE4NTk3NTU0NWNhMDBlMWIwMzdjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-A4tEse5fs8ynlbHl7jubJL-x4NI19cvXnwzp6VGmhk",
	},
};

export const fetchTopRated = async (page, callback) => {
	const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-SE&page=${page}`;
	const response = await fetch(url, options);
	const result = await response.json();
	callback(result);
};

export const fetchPopular = async (page, callback) => {
	const url = `https://api.themoviedb.org/3/movie/popular?language=en-SE&page=${page}`;
	const response = await fetch(url, options);
	const result = await response.json();
	callback(result);
};

export const fetchImage = (imgPath) => {
	return imgPath
		? `https://image.tmdb.org/t/p/w780${imgPath}`
		: `/img/no_image_w154.png`;
};

export const fetchDetails = async (titleId, callback) => {
	const url = `https://api.themoviedb.org/3/movie/${titleId}`;
	const response = await fetch(url, options);
	const movieDetails = await response.json();
	callback(movieDetails);
};

export const fetchRecommendations = async (titleId, callback) => {
	const url = `https://api.themoviedb.org/3/movie/${titleId}/recommendations?language=en-SE&page=1`;
	const response = await fetch(url, options);
	const result = await response.json();
	const rec = result.results;
	callback(rec);
};

export const fetchSearch = async (titleId, page, callback) => {
	const url = `https://api.themoviedb.org/3/search/movie?query=${titleId}&include_adult=false&language=en-SE&page=${page}`;
	const response = await fetch(url, options);
	const search = await response.json();
	callback(search);
};

export const fetchGenres = async (callback) => {
	const url = "https://api.themoviedb.org/3/genre/movie/list?language=en-SE";
	const response = await fetch(url, options);
	const result = await response.json();
	const genres = result.genres;
	callback(genres);
};

export const fetchDiscoverBy = async (page, sort, genreId, callback) => {
	const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-SE&page=${page}&sort_by=${sort}&with_genres=${genreId}&vote_count.gte=75`;
	const response = await fetch(url, options);
	const result = await response.json();
	callback(result);
};
