import { writable } from 'svelte/store';

export const tickers = writable([]);

const fetchTickers = async () => {
	const url = 'https://jsonplaceholder.typicode.com/todos';
	const res = await fetch(url);
	const data = await res.json();
	tickers.set(data);
};

fetchTickers();
