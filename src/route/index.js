import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/home';
import Detail from '../pages/Detail/detail';

import ScrollToTop from "../components/ScrollToTop";

export default function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path=":name" element={<Detail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
