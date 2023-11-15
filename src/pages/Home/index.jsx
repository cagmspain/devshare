import { useState, useEffect } from "react";
import CardComponent from "../../components/Card";

function Home() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState([true]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://api.escuelajs.co/api/v1/products");
			const data = await response.json();
			setLoading(false);
			setItems(data);
			console.log(data[0].title);
		}
		fetchData();
	}, []);

	return loading ? (
		"Cargando"
	) : (
		<div className="container">
			<h2>DEVSHARE</h2>
			<div className="container ">
				<ul className="row justify-content-center" key="{item.id}">
					{items?.map((item) => (
						<CardComponent data={item} key={item.id} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default Home;
