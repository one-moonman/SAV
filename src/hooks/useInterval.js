import React from "react";

export default function useInterval(callback, delay) {
	const savedCallback = React.useRef(callback);

	React.useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	React.useEffect(() => {
		if (!delay && delay !== 0) {
			return;
		}
		const id = setInterval(() => savedCallback.current(), delay);

		return () => clearInterval(id);
	}, [delay]);
}

