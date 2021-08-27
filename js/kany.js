const kanyRest = () => {
	fetch('https://api.kanye.rest/')
		.then(res => res.json())
		.then(data => quote(data))
};

const quote = data => {
	const quoteElements = document.getElementById('kany-rest')
	quoteElements.innerText = data.quote;
}
