import TopRatedList from "../components/TopRatedList";
import PopularList from "../components/PopularList";
import { clearLocalStorage } from "../storage/movieStorage";
import GenreList from "./discover";

function Home() {
	clearLocalStorage("movieId", "titleDetails", "recommendations");
	return (
		<>
			<TopRatedList />
			<PopularList />
		</>
	);
}

export default Home;
