let countEl = document.getElementById("count")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
	count += 1
	countEl.textContent = count

}

var entry = count + " - "



function sav() {
	let entry = count + " - "
	saveEl.textContent += entry
	countEl.textContent = 0
	count = 0
}
