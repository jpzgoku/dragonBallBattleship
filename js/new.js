var view = {
	displayMessagePlayer1: function(msg) {
		var messageAreaPlayer1 = document.getElementById("messageAreaPlayer1");
		messageAreaPlayer1.innerHTML = msg;
	},
	displayHitPlayer1: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMissPlayer1: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss")
	},
	displayMessagePlayer2: function(msg) {
		var messageAreaPlayer2 = document.getElementById("messageAreaPlayer2");
		messageAreaPlayer2.innerHTML = msg;
	},
	displayHitPlayer2: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},
	displayMissPlayer2: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss")
	},

	player1CharacterSelectButton: function() {
		$("#player1CS").click(function() {
			$("#heroSelect").css('display', 'block');
			$('#messageAreaPlayer1').removeClass();
			$('#left').removeClass();
			$("#imgPlayer1").removeClass();
			$("#board").css('display', 'none');

			displayHero("#goku", 'gokuMessageBoard', 'gokuGameBoard', 'goku');
			displayHero("#vegeta", 'vegetaMessageBoard', 'vegetaGameBoard', 'vegeta');
			displayHero("#beerus", 'beerusMessageBoard', 'beerusGameBoard', 'beerus');
			displayHero("#trunks", 'trunksMessageBoard', 'trunksGameBoard', 'trunks');
			displayHero("#gohan", 'gohanMessageBoard', 'gohanGameBoard', 'gohan');			
			displayHero("#piccolo", 'piccoloMessageBoard', 'piccoloGameBoard', 'piccolo');
			displayHero("#tien", 'tienMessageBoard', 'tienGameBoard', 'tien');
			displayHero("#gotenks", 'gotenksMessageBoard', 'gotenksGameBoard', 'gotenks');
		});

		function displayHero(character, characterMessageBoard, characterGameBoard, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer1').addClass(characterMessageBoard);
				$('#left').addClass(characterGameBoard);
				$('#imgPlayer1').addClass(characterPic);
				$("#heroSelect").css('display', 'none');
				$("#board").css('display', 'block');
			});
		};

	},
	player2CharacterSelectButton: function() {
		$("#player2CS").click(function() {
			$("#villianSelect").css('display', 'block');
			$('#messageAreaPlayer2').removeClass();
			$('#right').removeClass();
			$("#imgPlayer2").removeClass();
			$("#board").css('display', 'none');

			displayVillian("#black", 'blackMessageBoard', 'blackGameBoard', 'black');
			displayVillian("#zamasu", 'zamasuMessageBoard', 'zamasuGameBoard', 'zamasu');
			displayVillian("#frieza", 'freizaMessageBoard', 'freizaGameBoard', 'frieza');
			displayVillian("#kidBuu", 'kidBuuMessageBoard', 'kidBuuGameBoard', 'kidBuu');
			displayVillian("#superBuu", 'superBuuMessageBoard', 'superBuuGameBoard', 'superBuu');
			displayVillian("#cell", 'cellMessageBoard', 'cellGameBoard', 'cell');
			displayVillian("#imperfectCell", 'imperfectCellMessageBoard', 'imperfectCellGameBoard', 'imperfectCell');
			displayVillian("#cellJr", 'cellJrMessageBoard', 'cellJrGameBoard', 'cellJr');
			displayVillian("#frost", 'frostMessageBoard', 'frostGameBoard', 'frost');
			displayVillian("#android17",'android17MessageBoard', 'android17GameBoard', 'android17');
			displayVillian("#android19",'android19MessageBoard', 'android19GameBoard', 'android19');
			displayVillian("#android20",'android20MessageBoard', 'android20GameBoard', 'android20');
		});

		function displayVillian(character, characterMessageBoard, characterGameBoard, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer2').addClass(characterMessageBoard);
				$('#right').addClass(characterGameBoard);
				$('#imgPlayer2').addClass(characterPic);
				$("#villianSelect").css('display', 'none');
				$("#board").css('display', 'block');
			});
		};
	}
};

var model = {
	boardSizeRow: 8,
	boardSizeCol: 5,
	numShipsPlayer1: 3,
	numShipsPlayer2: 3,
	shipLength: 3,
	shipsSunkPlayer1: 0,
	shipsSunkPlayer2: 0,

	shipsPlayer1:  [{ locations: [0, 0, 0], hits: ["", "", ""] },
					{ locations: [0, 0, 0], hits: ["", "", ""] },
					{ locations: [0, 0, 0], hits: ["", "", ""] }],

	shipsPlayer2:  [{ locations: [0, 0, 0], hits: ["", "", ""] },
					{ locations: [0, 0, 0], hits: ["", "", ""] },
					{ locations: [0, 0, 0], hits: ["", "", ""] }],

	firePlayer1: function(guess) {
		for (var i = 0; i < this.numShipsPlayer1; i++) {
			var ship = this.shipsPlayer1[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHitPlayer1(guess);
				view.displayMessagePlayer1("HIT!");
				if (this.isSunkPlayer1(ship)) {
					view.displayMessagePlayer1("You completed the combo!");
					this.shipsSunkPlayer1++;
				}
				return true;
			}
		}
		view.displayMissPlayer1(guess);
		view.displayMessagePlayer1("You missed.");
		return false;
	},
	firePlayer2: function(guess) {
		for (var i = 0; i < this.numShipsPlayer2; i++) {
			var ship = this.shipsPlayer2[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHitPlayer2(guess);
				view.displayMessagePlayer2("HIT!");
				if (this.isSunkPlayer2(ship)) {
					view.displayMessagePlayer2("You completed the combo!");
					this.shipsSunkPlayer2++;
				}
				return true;
			}
		}
		view.displayMissPlayer2(guess);
		view.displayMessagePlayer2("You missed.");
		return false;
	},

	isSunkPlayer1: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},

	isSunkPlayer2: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},

	generateShipLocationsPlayer1: function() {
		var locations;
		for (var i = 0; i < this.numShipsPlayer1; i++) {
			do {
				locations = this.generateShipPlayer1();
			} while (this.collisionPlayer1(locations));
			this.shipsPlayer1[i].locations = locations;
		}
	},

	generateShipLocationsPlayer2: function() {
		var locations;
		for (var i = 0; i < this.numShipsPlayer2; i++) {
			do {
				locations = this.generateShipPlayer2();
			} while (this.collisionPlayer2(locations));
			this.shipsPlayer2[i].locations = locations;
		}
	},

	generateShipPlayer1: function() {
		var direction = Math.floor(Math.random() * 2);
		var row;
		var col;
		if (direction === 1) {
			row = Math.floor(Math.random() * this.boardSizeRow);
			col = (Math.floor(Math.random() * (this.boardSizeCol - (this.shipLength - 1)))) + this.boardSizeCol;
		} else {
			row = Math.floor(Math.random() * (this.boardSizeRow - (this.shipLength - 1)));
			col = (Math.floor(Math.random() * this.boardSizeCol)) + this.boardSizeCol;
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	generateShipPlayer2: function() {
		var direction = Math.floor(Math.random() * 2);
		var row;
		var col;
		if (direction === 1) {
			row = Math.floor(Math.random() * this.boardSizeRow);
			col = Math.floor(Math.random() * (this.boardSizeCol - (this.shipLength - 1)));
		} else {
			row = Math.floor(Math.random() * (this.boardSizeRow - (this.shipLength - 1)));
			col = Math.floor(Math.random() * this.boardSizeCol);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collisionPlayer1: function(locations) {
		for (var i = 0; i < this.numShipsPlayer1; i++) {
			var ship = model.shipsPlayer1[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	},

	collisionPlayer2: function(locations) {
		for (var i = 0; i < this.numShipsPlayer2; i++) {
			var ship = model.shipsPlayer2[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}, 
};

function parseGuessPlayer1(guess) {
	var row = guess.charAt(0);
	var column = guess.charAt(1);
	if (column > 4) {
		return row + column;
	} else {
		alert("Don't attack yourself!")
	}
	return null;
};

function parseGuessPlayer2(guess) {
	var row = guess.charAt(0);
	var column = guess.charAt(1);
	if (column < 5) {
		return row + column;
	} else {
		alert("Don't attack yourself!")
	}
	return null;
};

var controllerPlayer1 = {
	guesses: 0,

	processGuessPlayer1: function(guess) {
		var location = parseGuessPlayer1(guess);
		if (location) {
			this.guesses++;
			var hit = model.firePlayer1(location);
			if (hit && model.shipsSunkPlayer1 === model.numShipsPlayer1) {
				view.displayMessagePlayer1("You win! You landed all 3 combos in " + this.guesses + " attemps!");
			}
		}
	}
};

var controllerPlayer2 = {
	guesses: 0,

	processGuessPlayer2: function(guess) {
		var location = parseGuessPlayer2(guess);
		if (location) {
			this.guesses++;
			var hit = model.firePlayer2(location);
			if (hit && model.shipsSunkPlayer2 === model.numShipsPlayer2) {
				view.displayMessagePlayer2("You win! You landed all 3 combos in " + this.guesses + " attemps!");
			}
		}
	},
	previousGuesses: [],

	computerMakeGuess: function() {
		var sum;
		function randomNumber() {
			var num1 = Math.floor(Math.random() * model.boardSizeRow).toString();
			var num2 = Math.floor(Math.random() * model.boardSizeCol).toString();
			sum = num1 + num2;
		};
		randomNumber();	

		for (var i = 0; i < this.previousGuesses.length; i++) {
			if (sum === this.previousGuesses[i]) {
				console.log("Alert! Dumplicate Number!");
				this.computerMakeGuess();
				return false;
			} // if there is a duplicate number then the computer will make a new guess
		};
		
		this.previousGuesses.push(sum);
		var guess = sum;
		console.log(this.previousGuesses);
		/*console.log(model.shipsPlayer2[0]);
		console.log(model.shipsPlayer2[1]);
		console.log(model.shipsPlayer2[2]);*/
		this.processGuessPlayer2(guess);
	}
};

function singlePlayerGameButton() {
	$("#1Player").click(function() {
		play1PlayerGame();
		$("#numPlayerSelect").css('display', 'none');
		$("#newCharacterSelect").css('display', 'block');
	});
};

function twoPlayerGameButton() {
	$("#2Player").click(function() {
		play2PlayerGame();
		$("#numPlayerSelect").css('display', 'none');
		$("#newCharacterSelect").css('display', 'block');
	});
};

function newGameButton() {
	$("#clear").click(function() {
		$('#left').find('td').removeClass('hit miss');
		$('#right').find('td').removeClass('hit miss');
		view.displayMessagePlayer1("");
		view.displayMessagePlayer2("");
		controllerPlayer1.guesses = 0;
		controllerPlayer2.guesses = 0;
		controllerPlayer2.previousGuesses.length = 0;
		model.shipsSunkPlayer1 = 0;
		model.shipsSunkPlayer2 = 0;
		model.shipsPlayer1 =   [{ locations: [0, 0, 0], hits: ["", "", ""] },
								{ locations: [0, 0, 0], hits: ["", "", ""] },
								{ locations: [0, 0, 0], hits: ["", "", ""] }];
		model.shipsPlayer2 =   [{ locations: [0, 0, 0], hits: ["", "", ""] },
								{ locations: [0, 0, 0], hits: ["", "", ""] },
								{ locations: [0, 0, 0], hits: ["", "", ""] }];
		model.generateShipLocationsPlayer1();
		model.generateShipLocationsPlayer2();
	});
};

function play1PlayerGame() {
	$('#right').find('td').on('click', function() {
		var guess = $(this).text();
		controllerPlayer1.processGuessPlayer1(guess);
		controllerPlayer2.computerMakeGuess();		
	});
};

function play2PlayerGame() {
	$('#board').find('td').on('click', function() {
		var guess = $(this).text();
		if (controllerPlayer1.guesses <= controllerPlayer2.guesses) {
			controllerPlayer1.processGuessPlayer1(guess);
		} else {
			controllerPlayer2.processGuessPlayer2(guess);
		}
	});
};

function init() {
	view.player1CharacterSelectButton();
	view.player2CharacterSelectButton();
	singlePlayerGameButton();
	twoPlayerGameButton();
	newGameButton();
	model.generateShipLocationsPlayer1();
	model.generateShipLocationsPlayer2();
}
window.onload = init;




