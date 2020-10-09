import * as React from 'react';
import { useState, useEffect } from 'react';

const CounterExample = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div style={{textAlign: "center"}}>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
};

export default CounterExample;