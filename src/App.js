import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/detailsView";
import Layer from "./pages/layer";
import DiscoverGenre from "./pages/discover";
import GenreMovieList from "./pages/discoverGenreView";

/* import Details from ".pages/details"; */

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layer />}>
				<Route index element={<Home />} />
				<Route path='pages/detailsView/' element={<Details />} />
				<Route path='pages/discover' element={<DiscoverGenre />} />
				<Route path='pages/discoverGenreView' element={<GenreMovieList />} />
			</Route>
		</Routes>
	);
}

export default App;

/* https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg */

/* {
	 <div className='App'>
	<div>
		<h1>Top rated movies</h1>
		<TopRated source='movie' />
	</div>
	<div>
		<h1>Top rated series</h1>
		<TopRated source='tv' />
	</div>
</div>; 
}
 */

/* <Route path='/Details' component={Details} /> */
