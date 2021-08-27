const searchFood = () => {
	const searchFild = document.getElementById('search-field')
	const searchText = searchFild.value;
	// console.log(searchText)

	searchFild.value = '';
	if (searchText == '') {
		//please right some thing
	}
	else {
		const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
		fetch(url)
			.then(res => res.json())
			.then(data => displaySearchResult(data.meals))

	}

}
const displaySearchResult = meals => {
	const searchResult = document.getElementById('search-result')
	searchResult.textContent = '';
	if (meals.length == 0) {
		// not result found
	}
	meals.forEach(meal => {
		// console.log(meal)
		const div = document.createElement('div')
		div.classList.add('col')
		div.innerHTML = `<div onclick="mealIdresult('${meal.idMeal}')" class="card">
			<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
			<div class="card-body">
			<h5 class="card-title">${meal.strMeal}</h5>
			<p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
		</div>
	</div>`
		searchResult.appendChild(div)
	});
}
const mealIdresult = mealId => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
	fetch(url)
		.then(res => res.json())
		.then(data => displaySearchInfo(data.meals[0]))
}
const displaySearchInfo = meal => {
	const searchInfo = document.getElementById('search-info')
	const div = document.createElement('div')
	div.innerHTML = `
		<div class="card mx-auto" style="width: 18rem;">
			<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
			<div class="card-body">
				<h5 class="card-title">${meal.strMeal}</h5>
				<p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
				<a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	`;
	searchInfo.appendChild(div)
}