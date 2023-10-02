import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/detailsView";
import Layer from "./pages/layer";
import DiscoverGenre from "./pages/discover";
import GenreMovieList from "./pages/discoverGenreView";
import TopList from "./pages/toplist";
import CreatedTopListView from "./pages/createdToplists";
import TopRatedList from "./pages/TopRatedList";
import PopularList from "./pages/PopularList";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/' element={<Layer />}>
				<Route path='details/:id' element={<Details />} />
				<Route path='discover' element={<DiscoverGenre />} />
				<Route path='discover/:genre' element={<GenreMovieList />} />
				<Route path='toprated' element={<TopRatedList />} />
				<Route path='popular' element={<PopularList />} />
				<Route path='toplist' element={<TopList />} />
				<Route path='toplist/:listname' element={<CreatedTopListView />} />
			</Route>
		</Routes>
	);
}

export default App;
