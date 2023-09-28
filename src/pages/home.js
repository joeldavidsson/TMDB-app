import TopRatedList from "../components/TopRatedList";
import PopularList from "../components/PopularList";
import { clearLocalStorage } from "../storage/movieStorage";

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
