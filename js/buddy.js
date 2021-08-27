const loadBuddis = () => {
	fetch('https://randomuser.me/api/?results=5')
		.then(res => res.json())
		.then(data => displayBuddis(data))
}
loadBuddis();
const displayBuddis = data => {
	const buddis = data.results;
	const buddisDiv = document.getElementById('budyyis')
	for (buddy of buddis) {
		// console.log(buddy.name.first, buddy.name.last)
		const p = document.createElement('p')
		p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} ... ${buddy.email} `;
		buddisDiv.appendChild(p)
	}
}
// const loadBuddis = () => {
// 	fetch('https://randomuser.me/api/?results=5')
// 		.then(res => res.json())
// 		.then(data => displayBuddis(data))
// }

// const displayBuddis = data => {
// 	const buddis = data.results;
// 	const buddyDiv = document.getElementById('buddis')
// 	for (const buddy of buddis) {
// 		console.log(buddy.email)
// 	}
// }
// console.log('hello')