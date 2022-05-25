import React from "react";
import { useEffect, useState } from "react";

function Content() {
	const [count, setCount] = useState(180);

	useEffect(() => {
		const timerId = setInterval(() => {
			setCount((prevent) => prevent - 1);
			console.log("count...");
		}, 1000);

		return () => clearInterval(timerId);
	}, []);

	return (
		<div>
			{count}
			{console.log(1)}
		</div>
	);
}

export default Content;
