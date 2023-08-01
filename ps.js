// let a = "Button Clicked!"
// function save(){
// 	console.log(a)
// }
let inputEl = document.getElementById("input-El")
const saveEl= document.getElementById("save-el")
const ulEl = document.getElementById("ul")
let myLeads = ["book", "camera", "Laptop"]
saveEl.addEventListener("click", function(){
	let inputEl = document.getElementById("input").value
	myLeads.push(input.value)
	console.log(myLeads)	
	alert(myLeads)
})

for( var i=0; i<myLeads.length ; i++)
{
	// ulEl.innerHTML += "<li>" + (myLeads[i]) + "</li>" 
	let li =  document.createElement("li")
	li.textContent =
}
