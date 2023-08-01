let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let mesSg = ""
let messageEl = document.querySelector("#message")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#crd")
let playerEl = document.querySelector("#player-el")
let player = {
				name: "Rishikesh",
				chips: 145

}
playerEl.textContent = player.name + ": $" + player.chips


function getRamdomCard(){
	let flooredNumber = Math.floor((Math.random() * 13) + 1)
	if(flooredNumber === 1){
		console.log(flooredNumber)
		return 11
	}
	else if(flooredNumber > 10){
		console.log(flooredNumber)
		return 10
	}
	else{
		console.log(flooredNumber)
return flooredNumber
}
}

function renderGame() {
	cardEl.textContent = "Cards:" 
	for (var i = 0; i <= cards.length-1 ; i++) {
		cardEl.textContent += cards[i] + " "
}
	if(sum < 21){
	mesSg 	= "Do you want draw the next card?"
	
}else if(sum === 21){  

	mesSg = "Wohoo! you have got the Blackjack!!"
	hasBlackJack = true
	}
	else{
		mesSg = "You're out of the game!!"
		isAlive = false
	}
	messageEl.textContent = mesSg
	sumEl.textContent = "Sum: " + sum 
}
function startGame(){
	if(isAlive === false || hasBlackJack ===true){
		isAlive = true
		hasBlackJack = false
		let firstCard = getRamdomCard()
		let secondCard = getRamdomCard()
		cards=[firstCard , secondCard]
		sum = firstCard + secondCard
	renderGame()
	}
}
function newCard() {
	if(isAlive === true && hasBlackJack === false )
{		

//messageEl.textContent = "Drawing a new card from the deck!"
	let nextCards = getRamdomCard()
	sum += nextCards
	cards.push(nextCards)
	renderGame()
}	
	}