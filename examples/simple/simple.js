	
	//
	// cardDeck.name = "Deck Name";						// the name of the deck
	// cardDeck.description = "Awesome description.";	// description of the deck
	// cardDeck.cards = new Array();					// array of cards in the deck
	// 		card.value = 0; 							// integer
	// 		card.name = "The Card"; 					// string
	//		card.descrition = "This is a cool card!";	// a simple description of the card
	// 		card.image = new Image(); 					// card graphic
	// 		card.attributes = {}; 						// custom attributes for the card
	//
	var cardDeck = {};
	
	/*
	
	// this gets called once the page has loaded
	$(document).ready(function () {
	
		// init the board game
		InitGame();
	
	});
	
	*/
	
	function start()
	{
		InitGame("bgtop");
	}
	
	
	function InitGame()
	{
	
		// create board
		gb_createBoard('bgtop',800,600);
	
		// create the deck for the game
		cardDeck = gb_createDeck("Main Deck","The only deck in the game ...",150,200);
		
		// create all of the cards for the deck
		gb_createCard(cardDeck,0,"Black Cloud","Black Cloud","./media/blackcloud.png",{color:"black",shape : "cloud"});
		gb_createCard(cardDeck,1,"Blue Star","Blue Star","./media/bluestar.png",{color:"blue",shape : "star"});
		gb_createCard(cardDeck,2,"Brown Pentigon","Brown Pentigon","./media/brownpentigon.png",{color:"brown",shape : "pentigon"});
		gb_createCard(cardDeck,3,"Green Triangle","Green Triangle","./media/greentriangle.png",{color:"green",shape : "triangle"});
		gb_createCard(cardDeck,4,"Grey Lightning","Grey Lightning","./media/greylightning.png",{color:"grey",shape : "lightning"});
		gb_createCard(cardDeck,5,"Orange Circle","Orange Circle","./media/orangecircle.png",{color:"organe",shape : "circle"});
		gb_createCard(cardDeck,6,"Pink Heart","Pink Heart","./media/pinkheart.png",{color:"pink",shape : "heart"});
		gb_createCard(cardDeck,7,"Purple Arrow","Purple Arrow","./media/purplearrow.png",{color:"purple",shape : "arrow"});
		gb_createCard(cardDeck,8,"Red Square","Red Square","./media/redsquare.png",{color:"red",shape : "square"});
		gb_createCard(cardDeck,9,"White Hexigon","White Hexigon","./media/whitehexigon.png",{color:"white",shape : "hexigon"});
	
		// shuffle the deck
		cardDeck = gb_shuffleDeck(cardDeck);
	
		// create a card region to place cards into
		
	
	}