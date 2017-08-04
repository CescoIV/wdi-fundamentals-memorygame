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

var pairs = 0;
function checkMatch(){
	//checks the last two cards logged into the inPlay array
	if(inPlay[inPlay.length-2] === inPlay[inPlay.length-1]){
		pairs++;
		alert("You found a match! Score: " + pairs);
		var ayy = document.getElementById('score');
		ayy.textContent = 'Score: ' + pairs
	}else{
		alert("Sorry try again.");
	}
}

function cardFlip(){
	//this.getAttribute('data-id');
	var card = cards[this.getAttribute('data-id')];
	console.log("User flipped: " + card.rank);
	console.log(card.suit);
	console.log(card.cardImage);

	inPlay.push(card.rank)

	this.setAttribute('src', card.cardImage);
	if(inPlay.length%2 === 0){
		checkMatch(); 
	}
}
//Durstenfeld Shuffle
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function createBoard(){
	shuffleArray(cards);
	for(i=0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);

		cardElement.addEventListener('click', cardFlip);
		document.getElementById('game-board').appendChild(cardElement); 
	}
}

document.getElementById('r2').addEventListener('click', function(){
	createBoard();
});
