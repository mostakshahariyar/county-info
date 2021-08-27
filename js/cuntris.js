const loadCountris = () => {
	fetch('https://restcountries.eu/rest/v2/all')
		.then(res => res.json())
		.then(data => displayCountris(data))
}
loadCountris()

const displayCountris = countries => {
	// for (const country of countries) {
	// 	console.log(country)
	// }
	// for er short from holo forEach
	const countryDiv = document.getElementById('countris')
	countries.forEach(country => {
		// console.log(country)
		const div = document.createElement('div')
		div.classList.add('country')
		div.innerHTML = `
		<h3> ${country.name}</h3>
		<p> ${country.capital}</p>
		<button class="btn" onclick=loadCountryDetails('${country.name}')>More info</button>
		`
		countryDiv.appendChild(div)
	});
}
const loadCountryDetails = name => {
	const url = `https://restcountries.eu/rest/v2/name/${name}`
	fetch(url)
		.then(res => res.json())
		.then(data => displayCountryInfo(data[0]))

}
const displayCountryInfo = country => {
	console.log(country)
	const div = document.getElementById('country')
	div.innerHTML = `
	<h5>Name: ${country.name}</h5>
	<p>Population: ${country.population}</p>
	<img width="350px" height="250px" src="${country.flag}">
	`
}