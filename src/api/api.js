const api_key = "api_key=b90b26f854e36d21f50be7bd1c0b7500";

export const fetchMovieTopRated = async (source, callback) => {
	const url =
		`https://api.themoviedb.org/3/${source}/top_rated?language=en-SE&page=1&` +
		api_key;
	const response = await fetch(url);
	const result = await response.json();
	const topList = result.results;
	callback(result.results);
};

export const fetchImage = (imgPath) => {
	return `https://image.tmdb.org/t/p/w154${imgPath}`;
};

/* fetch(
	"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
	options
)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err)); */

/* fetch(
	"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=",
	options
)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err)); */
/* export const fetchSerieTopRated = async () => {
	const response = await fetch(
		"https://api.themoviedb.org/3/tv/top_rated?language=en-SE&page=1&" +
			api_key
	);
	const result = await response.json();
    const SerieTopList = result.results;
    return SerieTopList;
}; */
