/* global $ */
	 var i; 
	 var userCards = [];
	 var dealerCards = [];
	 var dealerTotal = 0;
	 var userTotal =0;
	 var e;
	 var dealerFlip = [];
	 var usedCards = [];
	 
 function cardSuit(){
	var suit = Math.floor(Math.random()*4)+1;
	
	if(suit == 1){
		return "Clubs";
	}
	
	if(suit == 2){
		return "Hearts";
	}
	
	if(suit == 3){
		return "Spades";
	}
	
	else{	
		return "Diamonds";
	}
 }
 
 function cardValue(number){
	
	if (number > 11){
		return 10;
	}
	
	if (number == 11){
		return 11;
	}
	
	else {
		return number;
	}
 }
 
 function cardName(number){
	
	if(number== 11){
	return "Ace";
	}
	
	if(number == 12){
	return "Jack";
	}
	
	if(number == 13){
	return "Queen";
	}
	
	if(number == 14){
	return "King";
	}
	
	else{
	return "" + number;
	}
}

 function cardImages(nombre, suit){
		return "images/" + nombre + suit + ".jpg";	
}

function userHand(userCards){
	for(i = 0; i < userCards.length; i++)
		{userTotal += userCards[i]; 
		console.log(userCards[i]);
		};
		
		
	document.getElementById("usercards").innerHTML= "Your total is " + userTotal;
	
}
 
 function pickCard(){
	 
	 for (e = 1; e < 5; e++){
	 
	 var number = Math.floor(Math.random()*12)+2;
	 
	 var nombre = cardName(number);
	 var value = cardValue(number);
	 var suit = cardSuit();
	
	if (e==1){
	 document.getElementById("card"+e).src = cardImages(nombre, suit);
	 usedCards.push(nombre + suit);
	 userCards.push(value);}
	 if (e==2){
	 document.getElementById("card"+e).src = cardImages(nombre, suit);
	 usedCards.push(nombre + suit);
	 dealerCards.push(value);}
	 if (e==3) {
	 document.getElementById("card"+e).src = cardImages(nombre, suit);
	 usedCards.push(nombre + suit);
	 userCards.push(value);}
	 else if (e==4) {
	  dealerFlip.push(cardImages(nombre, suit));
	  usedCards.push(nombre + suit);
		 dealerCards.push(value);	 
	 }
	 };
	 
	userHand(userCards);
	
	 	document.getElementById("choice").innerHTML= "Hit or Stick?";
		document.getElementById("hit").style.visibility = "visible";
		document.getElementById("stick").style.visibility = "visible";
	
	
	console.log(e);
	console.log(dealerFlip);
	console.log(usedCards);
	return e;
 }//closes pickCard()
 
function pickOneCard(){
	
	if (userTotal <=21 ){
	var number = Math.floor(Math.random()*12)+2;
	 
	 var nombre = cardName(number);
	 var value = cardValue(number);
	 var suit = cardSuit();
	 
	 document.getElementById("card"+e).src = cardImages(nombre, suit); 
	 
	
	userTotal += value;	
		
	document.getElementById("usercards").innerHTML= "Your total is " + userTotal;
	
		if (userTotal > 21){
			document.getElementById("newusercards").innerHTML="You've gone bust. Better luck next time!";
			document.getElementById("choice").innerHTML="";
			// document.getElementbyId("hit").style.visiblity="hidden";
			document.getElementById("hit").disabled = true;
			stick();
		}
	
	}
	
	e++;

}


function stick(){

		document.getElementById("card4").src = dealerFlip;	
		
		for(var i = 0; i < dealerCards.length; i++)
		{dealerTotal += dealerCards[i]; 
		};
		
		if (dealerTotal == 21){
		document.getElementById("dealercards").innerHTML= "Dealer has BlackJack, you lose";
		return;
		}
	
	else{
	
		
	for	(e = 9; e<11; e++){
		
		if (dealerTotal < 17 ){
	var number = Math.floor(Math.random()*12)+2;
	 
	 var nombre = cardName(number);
	 var value = cardValue(number);
	 var suit = cardSuit();
	 
	 document.getElementById("card"+e).src = cardImages(nombre, suit); 
	 
	
	dealerTotal += value;	
		
	document.getElementById("dealercards").innerHTML= "Dealer's total is " + dealerTotal;
		}
	}
   
	}	
	
	result();

}

function result(){
	if (dealerTotal > userTotal && dealerTotal < 22){
		document.getElementById("result").innerHTML= "Dealer wins!";
		document.getElementById("dealercards").innerHTML= "Dealer's total is " + dealerTotal;
	}
	else if (dealerTotal < 21 || dealerTotal == 21 && dealerTotal < userTotal){
		document.getElementById("result").innerHTML= "You win";
		document.getElementById("dealercards").innerHTML= "Dealer's total is " + dealerTotal;
	}
	else if (dealerTotal == userTotal){
		document.getElementById("result").innerHTML= "It's a draw!";
		document.getElementById("dealercards").innerHTML= "Dealer's total is " + dealerTotal;
	}
	else if (dealerTotal > 21){
		document.getElementById("result").innerHTML= "Dealer is bust, you win!";
	} 
}



