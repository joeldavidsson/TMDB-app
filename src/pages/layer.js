import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SearchMovie from "../components/Search";

function Layer() {
	return (
		<div className='flex flex-wrap w-full min-h-screen min'>
			<div className='w-screen top-0 sticky'>
				<HeaderComponent />
			</div>
			<div className='flex w-full'>
				<SearchMovie />
			</div>
			<div className='flex justify-center w-full min-h-screen'>
				<Outlet />
			</div>
			<div className='w-screen bottom-0'>
				<FooterComponent />
			</div>
		</div>
	);
}

export default Layer;
