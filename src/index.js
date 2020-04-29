const getResource = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		// throw new Error(`Could not fetch ${url}` . `, received ${res.status}`);
		throw new Error(`${res.status}`);
	}

	const body = await res.json();
	return body;
};

getResource(
	'https://timra.ru/timra/wp-json/wp/v2/posts?_embed&per_page=6&page=1'
)
	.then((body) => {
		console.log(body);
	})
	.catch((err) => {
		console.error('Could not fetch', err);
	});
//{name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
