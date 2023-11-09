import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import NotFound from "./pages/Notfound";
function App() {
	return (
		<div className="App">
			<Home />
			<Cart />
			<Account />
			<NotFound />
		</div>
	);
}

export default App;
