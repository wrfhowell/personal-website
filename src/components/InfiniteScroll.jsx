import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
	// States for the component
	const [items, setItems] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		fetchItems(); // Initial fetch
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!isFetching) return;
		fetchMoreItems();
	}, [isFetching]);

	function handleScroll() {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight ||
			isFetching
		)
			return;
		setIsFetching(true);
	}

	async function fetchItems() {
		// Simulate fetching data from an API
		const newItems = Array.from(
			{ length: 20 },
			(_, index) => `Item ${index + 1}`
		);
		setItems(newItems);
	}

	async function fetchMoreItems() {
		// Simulate fetching more data from an API
		const moreItems = Array.from(
			{ length: 20 },
			(_, index) => `Item ${items.length + index + 1}`
		);
		setItems((prevItems) => [...prevItems, ...moreItems]);
		setIsFetching(false);
	}

	return (
		<div>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			{isFetching && <p>Fetching more items...</p>}
		</div>
	);
};

export default InfiniteScroll;
