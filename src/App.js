import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilState } from "recoil";
import TopRated from "./components/TopRated";

function App() {
	return (
		<div className='App'>
			<div>
				<h1>Top rated movies</h1>
				<TopRated source='movie' />
			</div>
			<div>
				<h1>Top rated series</h1>
				<TopRated source='tv' />
			</div>
		</div>
	);
}

export default App;

/* https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg */
