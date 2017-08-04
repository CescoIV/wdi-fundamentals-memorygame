var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"	
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"		
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];
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
	console.log("User flipped: " + card.rank);
	console.log(card.suit);
	console.log(card.cardImage);
	
	inPlay.push(card.rank)

	if(inPlay.length === 2){
		checkMatch(); 
	}
}

cardFlip(0);
cardFlip(2);