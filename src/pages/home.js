import TopRatedList from "../components/TopRatedList";
import PopularList from "../components/PopularList";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function Home() {
	return (
		<>
			<TopRatedList />
			<PopularList />
		</>
	);
}

export default Home;
