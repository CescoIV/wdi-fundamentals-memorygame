var cards = ['queen', 'queen', 'king', 'king'];
var inPlay = [];
var cardOne = cards[0];
inPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
inPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (inPlay.length === 2){
	if(inPlay[0] === inPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry try again.");
	}
} 
