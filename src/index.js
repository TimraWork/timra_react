const getResource = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
	}

	const body = await res.json();
	return body;
};

getResource('https://swapi.dev/api/people/1asdfasdfdas/')
	.then((body) => {
		console.log(body);
	})
	.catch((err) => {
		console.error('Could not fetch', err);
	});
//{name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
