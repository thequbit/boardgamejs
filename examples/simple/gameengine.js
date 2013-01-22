
	// graphics layers
	//var layers = {};

	// var card = {};
	//
	// card.value = 0; // integer
	// card.name = "The Card"; // string
	// card.image = new Image(); // card graphic
	// card.attributes = {}; // custom attributes for the card
	//
	//var cards = Array();
	
	// var cardDeck = {};								// our card deck
	//
	// cardDeck.name = "Deck Name";						// the name of the deck
	// cardDeck.description = "Awesome description.";	// description of the deck
	// cardDeck.cards = new Array();					// array of cards in the deck
	//
	// 		card.value = 0; 							// integer
	// 		card.name = "The Card"; 					// string
	// 		card.image = new Image(); 					// card graphic
	// 		card.attributes = {}; 						// custom attributes for the card
	//
	
	//var context;
	
	function gb_createBoard(canvasDivName,gameGraphic,canvasWidth,canvasHeight)
	{
	
		// canvas stuff
		var canvasDiv = document.getElementById(canvasDivName);
		canvas = document.createElement('canvas');
		canvas.setAttribute('width', canvasWidth);
		canvas.setAttribute('height', canvasHeight);
		canvas.setAttribute('id', 'canvas');
		canvasDiv.appendChild(canvas);
		if(typeof G_vmlCanvasManager != 'undefined') {
			canvas = G_vmlCanvasManager.initElement(canvas);
		}
		
		// create the board
		var board = {};
		
		// setup our board
		
		// the context of our canvas
		board._context = canvas.getContext("2d");
		// background graphic for our board
		board.graphic = gameGraphic;
		// init our arrays
		board.cardregions = new Array();
		board.decks = new Array();
		board.pieces = new Array();
		board.tiles = new Array();
		
		// return the created board
		return board;
	}
	
	function gb_createDeck(deckName, deckDescription, cardWidth, cardHeight)
	{
		var newDeck = {};
	
		newDeck.name = deckName;
		newDeck.description = deckDescription;
		newDeck.cards = new Array();
		newDeck.width = cardWidth;
		newDeck.height = cardHeight;
	
		return newDeck;
	}
	
	function gb_createCard(cardDeck,cardValue,cardName,cardDescription,cardImageSrc,cardAttributes)
	{
		// create a new card
		var card = {};
		
		// set card value
		card.value = cardValue;
		
		// set card name
		card.name = cardName;
		
		// set card description
		card.description = cardDescription;
		
		// set card graphic
		var img = new Image();
		img.src = cardImageSrc;
		card.image = img;
		
		// set card attributes
		card.attributes = cardAttributes;
		
		// add the card to the array of cards
		cardDeck.cards.push(card);
	}
	
	function gb_shuffleDeck(deck)
	{
		// shuffle the deck 256 times
		for( var j = 0; j < 512; j++)
		{
			// swap all of the cards with other cards
			for ( var i = 0; i < deck.cards.length; i++)
			{
				// generate a random location to swap with our i location
				var rand = Math.floor((Math.random()*(i+1)));
				
				// swap the card
				var temp = deck.cards[i];
				deck.cards[i] = deck.cards[rand];
				deck.cards[rand] = temp;
			}
		}
		
		// return the shuffled deck
		return deck;
	}

	// create a card region that is x x y cards
	function gb_createCardRegion(width,height,x,y,regionGraphic)
	{
		// create our object to return
		var cardregion = {};
		
		// set our region size and location
		cardregion.width = (width*deck.width + 10) + 10;
		cardregion.height = (height*deck.height +10) + 10;
		cardregion.x = x;
		cardregion.y = y;
		
		// create a place to put our cards within the region
		cardregion.cards = new Array();
		
		cardregion.graphic = regionGraphic;
		
		// return our created object
		return cardregion;
	}

	function gb_addCardToRegion(cardregion,card)
	{
		cardregion.cards.push(card);
		
		return cardregion;
	}

	/*
	function gb_placeCard(card,x,y)
	{
		context.drawImage(card.image,x,y);
	}
	*/

	// redraw all of the game layers on the canvas
	function gb_redraw(board)
	{
		
		// we get passed in a board object that looks like this:
		//
		// var board = {}
		// board._context					// canvas context, not to be used by the programmer!
		// board.name 						// the name of the board, can be the name of the game
		// board.description 				// description of the board/game
		// board.width 						// width in pixels of the playing board
		// board.height 					// height in pixels of the playing board
		// board.image						// border graphics for the game board
		// board.cardregions = new Array(); // an array of card regions
		//
		// 		var cardregion = {}
		//		cardregion.width 			// in pixels
		//		cardregion.height 			// in pixels
		//		cardregion.x 				// location on canvas
		//		cardregion.y 				// location on canvas
		//		cardregion.image			// graphic for the card region
		//		cards = new Array()			// an array of cards in the region
		//
		//			var card = {}
		//			card.id					// an int that is unique to each card on the board
		//			card.value 				// int: the value of the card 
		//			card.name 				// the name of the card
		//			card.description 		// the description of the card
		//			card.image 				// the graphic for the card
		//			card.attributes = {} 	// can be anything ya want!
		//
		// board.decks = new Array(); 		// an array of card decks
		//
		//		var deck = {}				
		//		deck.id						// a unique int 
		//		deck.name 					// name of the deck
		//		deck.description 			// description of the deck
		//		deck.width 					// width of the deck in pixels
		//		deck.height 				// height of the deck in pixels
		//		deck.cards = new Array();	// an array of the cards in the deck
		//
		//			var card = {}
		//			card.id					// an int that is unique to each card on the board
		//			card.value 				// int: the value of the card 
		//			card.name 				// the name of the card
		//			card.description 		// the description of the card
		//			card.image 				// the graphic for the card
		//			card.attributes = {} 	// can be anything ya want!
		//
		//	board.pieces = new Array();		// pices used on the game board
		//
		//		var piece = {}
		//		piece.name					// the name of the game piece
		//		piece.description			// a description of the piece
		//		piece.width					// width of the piece graphic
		//		piece.height				// height of the piece graphic
		//		piece.x						// the x location on the board for the piece
		//		piece.y						// the y location on the board for the piece
		//		piece.image					// graphic for the game piece
		//		piece.attributes = {}		// this can be anything ya want!
		//
		//	board.tiles = new Array();
		//
		//		var tile = {}				
		//		tile.name					// the name of the tile
		//		tile.description			// the description of the tile
		//		tile.width					// the width of the tile
		//		tile.height					// the height of the tile
		//		tile.x						// the x location on the board for the pieces
		//		tile.y						// the y location on the board for the pieces
		//		tile.image					// the graphic for the tile
		//
		
		// clear the canvas so it can be redrawn
		canvas.width = canvas.width;
	
		// print the board graphics
		context.drawImage(board.image,0,0);
	
		// draw the tiles for the board
		for(var i=0; i<board.tiles.length; i++)
		{
			context.drawImage(board.tiles[i].image, board.tiles[i].x, board.tiles[i].y);
		}
		
		// draw the pieces for the board
		for(var i=0; i<board.pieces.length; i++)
		{
			context.drawImage(board.piece[i].image, board.piece[i].x, board.piece[i].y);
		}
		
		// draw the card regions for the board
		for(var i=0; i<board.cardregions.length; i++)
		{
			context.drawImage(board.cardregions[i].image, board.cardregions[i].x, board.cardregions[i].y);
			
			// draw the cards within the card region
			for(var j=0; j<board.cardregions[i].cards.length; j++)
			{
				context.drawImage(board.cardregions[i].cards[j].image, board.cardregions[i].cards[j].x + 10 + (i*board.cardregions[i].cards[j].width), board.cardregions[i].cards[j].y + 10 + (i*board.cardregions[i].cards[j].height);
			}
		}
	}