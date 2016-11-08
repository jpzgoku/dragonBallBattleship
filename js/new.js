var view = {
	displayMessagePlayer1: function(msg) {
		$("#messageAreaPlayer1").html(msg);
	},
	displayHitPlayer1: function(location) {
		var cell = document.getElementById(location);
		$(cell).addClass('hit');
	},
	displayMissPlayer1: function(location) {
		var cell = document.getElementById(location);
		$(cell).addClass('miss');
	},
	displayMessagePlayer2: function(msg) {
		$("#messageAreaPlayer2").html(msg);
	},
	displayHitPlayer2: function(location) {
		var cell = document.getElementById(location);
		$(cell).addClass('hit');
	},
	displayMissPlayer2: function(location) {
		var cell = document.getElementById(location);
		$(cell).addClass('miss');
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
	shipsPlayer1:  [{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
					{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
					{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }],

	shipsPlayer2:  [{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
					{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
					{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }],

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
					this.shipsPlayer1[i].sunk = true;
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
					this.shipsPlayer2[i].sunk = true;
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

	allShipsSunkPlayer1: function() {
		for (var i = 0; i < this.shipsPlayer1.length; i++) {
			if (this.shipsPlayer1[i].sunk === false) {
				return false
			}
		}
		return true;
	},

	allShipsSunkPlayer2: function() {
		for (var i = 0; i < this.shipsPlayer2.length; i++) {
			if (this.shipsPlayer2[i].sunk === false) {
				return false
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
		view.displayMessagePlayer1("Don't attack yourself!");
	}
	return null;
};

function parseGuessPlayer2(guess) {
	var row = guess.charAt(0);
	var column = guess.charAt(1);
	if (column < 5) {
		return row + column;
	} else {
		view.displayMessagePlayer2("Don't attack yourself!");
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
			if (hit && model.allShipsSunkPlayer1()) {
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
			if (hit && model.allShipsSunkPlayer2()) {
				view.displayMessagePlayer2("You win! You landed all 3 combos in " + this.guesses + " attemps!");
			}
		}
	},
	previousGuesses: [],

	computerMakeGuess: function(runThroughs) {

		var randomNumber = function() {
			var num1 = Math.floor(Math.random() * model.boardSizeRow).toString();
			var num2 = Math.floor(Math.random() * model.boardSizeCol).toString();
			return num1 + num2;
		};

		var educatedGuess = function() {
			for (var i = 0; i < model.shipsPlayer2.length; i++) {
				for( var j = 0; j < model.shipsPlayer2.length; j++) {
					if (model.shipsPlayer2[i].hits[j] === 'hit' && model.shipsPlayer2[i].sunk !== true) {
						var num1 = model.shipsPlayer2[i].locations[j].charAt(0);
						var num2 = model.shipsPlayer2[i].locations[j].charAt(1);
						if (runThroughs === 0) {
							guess = (Number(num1) + 1) + num2;
							return checkIfOnBoard(guess);
						} else if (runThroughs === 1) {
							guess = (Number(num1) - 1) + num2;
							return checkIfOnBoard(guess);
						} else if (runThroughs === 2) {
							guess = num1 + (Number(num2) - 1);
							return checkIfOnBoard(guess);
						} else if (runThroughs === 3) {
							guess = num1 + (Number(num2) + 1);
							return checkIfOnBoard(guess);
						} else if (runThroughs > 3) {
							var k = j - 1;
							if (model.shipsPlayer2[i].hits[k] === 'hit') {
								if (runThroughs === 4) {
									guess = (Number(num1) + 1) + num2;
									return checkIfOnBoard(guess);
								} else if (runThroughs === 5) {
									guess = (Number(num1) - 1) + num2;
									return checkIfOnBoard(guess);
								} else if (runThroughs === 6) {
									guess = num1 + (Number(num2) - 1);
									return checkIfOnBoard(guess);
								} else if (runThroughs === 7) {
									guess = num1 + (Number(num2) + 1);
									return checkIfOnBoard(guess);
								}
							}
						}
					} 
				}
			}
			return randomNumber();
		};

		function checkIfOnBoard(guess) {
			runThroughs++;
			var secondDigit = String(guess).charAt(1);
			if (guess > (String(model.boardSizeRow - 1) + String(model.boardSizeCol - 1)) || guess.length !== 2 || Number(secondDigit) === model.boardSizeCol) {
				return educatedGuess();
			}
			return guess;
		};

		console.log(runThroughs);

		var guess = (this.guesses === 0) ? randomNumber() : educatedGuess();
		
		for (var i = 0; i < this.previousGuesses.length; i++) {
			if (guess === this.previousGuesses[i]) {
				console.log("Alert! Dumplicate Number!");
				return this.computerMakeGuess(runThroughs);
			} // if there is a duplicate number then the computer will make a new guess
		};
		
		this.previousGuesses.push(guess);
		console.log(this.previousGuesses);
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
		model.shipsPlayer1 =   [{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
								{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
								{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }];
		model.shipsPlayer2 =   [{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
								{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
								{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }];
		model.generateShipLocationsPlayer1();
		model.generateShipLocationsPlayer2();
	});
};

function play1PlayerGame() {
	$('#right').find('td').on('click', function() {
		var runThroughs = 0;
		var guess = $(this).text();
		controllerPlayer1.processGuessPlayer1(guess);
		controllerPlayer2.computerMakeGuess(runThroughs);		
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




