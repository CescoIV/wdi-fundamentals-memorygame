var cards = ['queen', 'queen', 'king', 'king'];
var inPlay = [];
function checkMatch(){
	if(inPlay[0] === inPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry try again.");
	}
}

function cardFlip(cardId){
	var card = cards[cardId];
	console.log("User flipped: " + card);
	inPlay.push(card)

	if(inPlay.length === 2){
		checkMatch(); 
	}
}

cardFlip(0);
cardFlip(2);