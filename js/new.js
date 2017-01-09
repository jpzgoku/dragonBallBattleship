var view = {
	displayMessagePlayer1: function(msg) {
		$('#messageAreaPlayer1').html(msg);
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
		$('#messageAreaPlayer2').html(msg);
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
		$('#player1CS').on('click', this.player1ChooseCharacter);
	},

	player1ChooseCharacter: function() {
		controller.clear();
		$('#player2CS').off('click', this.player2ChooseCharacter);
		$('#heroSelect').removeClass('hidden');
		$('#messageAreaPlayer1').removeClass();
		$('#left').removeClass();
		$('#imgPlayer1').removeClass();
		$('#board').addClass('hidden');

		displayHero('.goku', 'gokuMessageBoard', 'gokuBackground', 'goku');
		displayHero('.gokuBlue', 'gokuBlueMessageBoard', 'gokuBlueBackground', 'gokuBlue');
		displayHero('.vegeta', 'vegetaMessageBoard', 'vegetaBackground', 'vegeta');
		displayHero('.superVegeta', 'superVegetaMessageBoard', 'superVegetaBackground', 'superVegeta');
		displayHero('.beerus', 'beerusMessageBoard', 'beerusBackground', 'beerus');
		displayHero('.trunks', 'trunksMessageBoard', 'trunksBackground', 'trunks');
		displayHero('.trunksSS', 'trunksSSMessageBoard', 'trunksSSBackground', 'trunksSS');
		displayHero('.gohan', 'gohanMessageBoard', 'gohanBackground', 'gohan');			
		displayHero('.piccolo', 'piccoloMessageBoard', 'piccoloBackground', 'piccolo');
		displayHero('.tien', 'tienMessageBoard', 'tienBackground', 'tien');
		displayHero('.gotenks', 'gotenksMessageBoard', 'gotenksBackground', 'gotenks');
		displayHero('.gotenksSS', 'gotenksSSMessageBoard', 'gotenksSSBackground', 'gotenksSS');
		displayHero('.gotenksSS3', 'gotenksSS3MessageBoard', 'gotenksSS3Background', 'gotenksSS3');
		
		function displayHero(character, characterMessageBoard, characterBackground, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer1').removeClass().addClass(characterMessageBoard);
				$('#left').removeClass().addClass(characterBackground).addClass('ready');
				$('#imgPlayer1').removeClass().addClass(characterPic);
				$('#heroSelect').addClass('hidden');
				$('#board').removeClass('hidden');
				$('#player2CS').on('click', view.player2ChooseCharacter);
				controller.startCheck();
			});
		};
	},

	player2CharacterSelectButton: function() {
		$('#player2CS').on('click', this.player2ChooseCharacter);
	},

	player2ChooseCharacter: function() {
		controller.clear();
		$('#player1CS').off('click', this.player1ChooseCharacter);
		$('#villianSelect').removeClass('hidden');
		$('#messageAreaPlayer2').removeClass();
		$('#right').removeClass();
		$('#imgPlayer2').removeClass();
		$('#board').addClass('hidden');

		displayVillian('.black', 'blackMessageBoard', 'blackBackground', 'black');
		displayVillian('.blackRose', 'blackRoseMessageBoard', 'blackRoseBackground', 'blackRose');
		displayVillian('.zamasu', 'zamasuMessageBoard', 'zamasuBackground', 'zamasu');
		displayVillian('.frieza', 'friezaMessageBoard', 'friezaBackground', 'frieza');
		displayVillian('.goldenFrieza', 'goldenFriezaMessageBoard', 'goldenFriezaBackground', 'goldenFrieza');
		displayVillian('.friezaFirstForm', 'friezaFirstFormMessageBoard', 'friezaFirstFormBackground', 'friezaFirstForm');
		displayVillian('.babidi', 'babidiMessageBoard', 'babidiBackground', 'babidi');
		displayVillian('.fatBuu', 'fatBuuMessageBoard', 'fatBuuBackground', 'fatBuu');
		displayVillian('.evilBuu', 'evilBuuMessageBoard', 'evilBuuBackground', 'evilBuu');
		displayVillian('.superBuu', 'superBuuMessageBoard', 'superBuuBackground', 'superBuu');
		displayVillian('.kidBuu', 'kidBuuMessageBoard', 'kidBuuBackground', 'kidBuu');
		displayVillian('.cell', 'cellMessageBoard', 'cellBackground', 'cell');
		displayVillian('.semiPerfectCell', 'semiPerfectCellMessageBoard', 'semiPerfectCellBackground', 'semiPerfectCell');
		displayVillian('.imperfectCell', 'imperfectCellMessageBoard', 'imperfectCellBackground', 'imperfectCell');
		displayVillian('.cellJr', 'cellJrMessageBoard', 'cellJrBackground', 'cellJr');
		displayVillian('.frost', 'frostMessageBoard', 'frostBackground', 'frost');
		displayVillian('.frost3rdForm', 'frost3rdFormMessageBoard', 'frost3rdFormBackground', 'frost3rdForm');
		displayVillian('.frostFinalForm', 'frostFinalFormMessageBoard', 'frostFinalFormBackground', 'frostFinalForm');
		displayVillian('.android17','android17MessageBoard', 'android17Background', 'android17');
		displayVillian('.android18','android18MessageBoard', 'android18Background', 'android18');
		displayVillian('.android19','android19MessageBoard', 'android19Background', 'android19');
		displayVillian('.android20','android20MessageBoard', 'android20Background', 'android20');

		function displayVillian(character, characterMessageBoard, characterBackground, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer2').removeClass().addClass(characterMessageBoard);
				$('#right').removeClass().addClass(characterBackground).addClass('ready');
				$('#imgPlayer2').removeClass().addClass(characterPic);
				$('#villianSelect').addClass('hidden');
				$('#board').removeClass('hidden');
				$('#player1CS').on('click', view.player1ChooseCharacter);
				controller.startCheck();
			});
		};
	}, 

	toggleCharacters: function(divNumber, array, whichPlayer) {
		$(divNumber).contextmenu(function() {
			var classes = array;
			$(divNumber).each(function() {
				this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
				$(whichPlayer).trigger('click');
			})
		});
	},

	newGameButton: function() {
		$('#clear').on('click', function() {
			$('#left').find('td').removeClass('hit miss');
			$('#right').find('td').removeClass('hit miss');
			view.displayMessagePlayer1("");
			view.displayMessagePlayer2("");
			controllerPlayer1.guesses = 0;
			controllerPlayer2.guesses = 0;
			controllerPlayer1.previousGuesses.length = 0;
			controllerPlayer2.previousGuesses.length = 0;
			model.shipsPlayer1 =   [{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
									{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
									{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }];
			model.shipsPlayer2 =   [{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
									{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false },
									{ locations: [0, 0, 0], hits: ["", "", ""], sunk: false }];
			model.generateShipLocationsPlayer1();
			model.generateShipLocationsPlayer2();
			/*$('#right').find('td').on('contextmenu', player1specialMove);
			$('#left').find('td').on('contextmenu', player2specialMove);*/
		});
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
				ship.hits[index] = 'hit';
				view.displayHitPlayer1(guess);
				view.displayMessagePlayer1('HIT!');
				if (this.isSunk(ship)) {
					view.displayMessagePlayer1('You completed the combo!');
					this.shipsPlayer1[i].sunk = true;
				}
				return true;
			}
		}
		view.displayMissPlayer1(guess);
		if (this.allShipsSunk(this.shipsPlayer1.length, this.shipsPlayer1)) {
			view.displayMessagePlayer1('You win! You landed all 3 combos in ' + controllerPlayer1.guesses + ' attemps!');
		} else {
			view.displayMessagePlayer1('You missed.');
		}
		return false;
	},

	firePlayer2: function(guess) {
		for (var i = 0; i < this.numShipsPlayer2; i++) {
			var ship = this.shipsPlayer2[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = 'hit';
				view.displayHitPlayer2(guess);
				view.displayMessagePlayer2('HIT!');
				if (this.isSunk(ship)) {
					view.displayMessagePlayer2('You completed the combo!');
					this.shipsPlayer2[i].sunk = true;
				}
				return true;
			}
		}
		view.displayMissPlayer2(guess);
		if (this.allShipsSunk(this.shipsPlayer2.length, this.shipsPlayer2)) {
			view.displayMessagePlayer2('You win! You landed all 3 combos in ' + controllerPlayer2.guesses + ' attemps!')
		} else {
			view.displayMessagePlayer2('You missed.');
		}
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== 'hit') {
				return false;
			}
		}
		return true;
	},

	allShipsSunk: function(playerShipsLength, playerShips) {
		for (var i = 0; i < playerShipsLength; i++) {
			if (playerShips[i].sunk === false) {
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
			} while (this.collision(locations, this.numShipsPlayer1, this.shipsPlayer1));
			this.shipsPlayer1[i].locations = locations; 
		}
	},

	generateShipLocationsPlayer2: function() {		
		var locations;
		for (var i = 0; i < this.numShipsPlayer2; i++) {
			do {
				locations = this.generateShipPlayer2();
			} while (this.collision(locations, this.numShipsPlayer2, this.shipsPlayer2));
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

	collision: function(locations, numShips, modelShips) {
		for (var i = 0; i < numShips; i++) {
			var ship = modelShips[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};


function parseGuessPlayer1(guess) {
	var row = guess.charAt(0);
	var column = guess.charAt(1);
	if (column > 4) {
		return row + column;
	} /*else {
		view.displayMessagePlayer1("Don't attack yourself!");
	}*/
	return null;
};

function parseGuessPlayer2(guess) {
	var row = guess.charAt(0);
	var column = guess.charAt(1);
	if (column < 5) {
		return row + column;
	} /*else {
		view.displayMessagePlayer2("Don't attack yourself!");
	}*/
	return null;
};

var controllerPlayer1 = {

	pilot: 'human',
	guesses: 0,

	processGuessPlayer1: function(guess) {
		var location = parseGuessPlayer1(guess);
		if (location) {
			if (!model.allShipsSunk(model.shipsPlayer1.length, model.shipsPlayer1)) {
				this.guesses++;
			}
			model.firePlayer1(location);
			if (model.allShipsSunk(model.shipsPlayer1.length, model.shipsPlayer1)) {
				view.displayMessagePlayer1('You win! You landed all 3 combos in ' + this.guesses + ' attemps!');
			}
		}
	} ,

	previousGuesses: [],

	computerMakeGuess: function(runThroughs) {

		var randomNumber = function() {
			var num1 = Math.floor(Math.random() * model.boardSizeRow).toString();
			var num2 = Math.floor((Math.random() * model.boardSizeCol) + model.boardSizeCol).toString();
			return num1 + num2;
		};

		var educatedGuess = function() {
			for (var i = 0; i < model.shipsPlayer1.length; i++) {
				for( var j = 0; j < model.shipsPlayer1.length; j++) {
					if (model.shipsPlayer1[i].hits[j] === 'hit' && model.shipsPlayer1[i].sunk !== true) {
						var num1 = model.shipsPlayer1[i].locations[j].charAt(0);
						var num2 = model.shipsPlayer1[i].locations[j].charAt(1);
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
							if (model.shipsPlayer1[i].hits[k] === 'hit') {
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
			var firstDigit = String(guess).charAt(0)
			var secondDigit = String(guess).charAt(1);
			if (firstDigit < 0 || firstDigit > model.boardSizeRow - 1 || 
				secondDigit < model.boardSizeCol || guess.length !== 2) {
				return educatedGuess();
			}
			return guess;
		};

		var guess = (this.guesses === 0) ? randomNumber() : educatedGuess();
		
		for (var i = 0; i < this.previousGuesses.length; i++) {
			if (guess === this.previousGuesses[i]) {
				console.log('Alert! Dumplicate Number!');
				return this.computerMakeGuess(runThroughs);
			} // if there is a duplicate number then the computer will make a new guess
		};
		
		this.previousGuesses.push(guess);
		console.log(this.previousGuesses);
		this.processGuessPlayer1(guess);
	}
};

var controllerPlayer2 = {

	pilot: 'human',
	guesses: 0,

	processGuessPlayer2: function(guess) {
		var location = parseGuessPlayer2(guess);
		if (location) {
			if (!model.allShipsSunk(model.shipsPlayer2.length, model.shipsPlayer2)) {
				this.guesses++;
			}
			model.firePlayer2(location);
			if (model.allShipsSunk(model.shipsPlayer2.length, model.shipsPlayer2)) {
				view.displayMessagePlayer2('You win! You landed all 3 combos in ' + this.guesses + ' attemps!');
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
			var firstDigit = String(guess).charAt(0);
			var secondDigit = String(guess).charAt(1);
			if (firstDigit < 0 || firstDigit > model.boardSizeRow - 1 ||
				secondDigit >= model.boardSizeCol || guess.length !== 2) {
				return educatedGuess();
			}
			return guess;
		};

		var guess = (this.guesses === 0) ? randomNumber() : educatedGuess();
		
		for (var i = 0; i < this.previousGuesses.length; i++) {
			if (guess === this.previousGuesses[i]) {
				console.log('Alert! Dumplicate Number!');
				return this.computerMakeGuess(runThroughs);
			} // if there is a duplicate number then the computer will make a new guess
		};
		
		this.previousGuesses.push(guess);
		console.log(this.previousGuesses);
		this.processGuessPlayer2(guess);
	}
};
/*
var vegeta = {

	specialMoveUsage: 0,

	bigBang: function(guess) {
		console.log(guess);
		var row = guess.charAt(0);
		var column = guess.charAt(1);
		controllerPlayer1.processGuessPlayer1(guess);
		controllerPlayer1.processGuessPlayer1(String(Number(row) + 1) + column);
		controllerPlayer1.processGuessPlayer1(String(Number(row) - 1) + column);
		controllerPlayer1.processGuessPlayer1(row + String(Number(column) + 1));
		controllerPlayer1.processGuessPlayer1(row + String(Number(column) - 1));
		view.displayMessagePlayer1("Big Bang Attack!");
	}
};

var piccolo = {

	specialMoveUsage: 0,

	lightGrenade: function(guess) {
		console.log(guess);
		var row = guess.charAt(0);
		var column = guess.charAt(1);
		controllerPlayer1.processGuessPlayer1(guess);
		controllerPlayer1.processGuessPlayer1(row + String(Number(column) + 1));
		controllerPlayer1.processGuessPlayer1(row + String(Number(column) - 1));
		controllerPlayer1.processGuessPlayer1(String(Number(row) - 1) + column);
		view.displayMessagePlayer1("Light Grenade!");
	}
}

var trunks = {

	specialMoveUsage: 0,

	swordSlash: function(guess) {
		console.log(guess);
		var row = guess.charAt(0);
		var column = guess.charAt(1);
		controllerPlayer1.processGuessPlayer1(guess);
		controllerPlayer1.processGuessPlayer1(String(Number(row) + 1) + (Number(column) - 1));
		controllerPlayer1.processGuessPlayer1(String(Number(row) + 2) + (Number(column) - 2));
		view.displayMessagePlayer1("Sword Slash!");
	}
};

var blackRose = {

	specialMoveUsage: 0,

	scytheSlash: function(guess) {
		console.log(guess);
		var row = guess.charAt(0);
		var column = guess.charAt(1);
		controllerPlayer2.processGuessPlayer2(guess);
		controllerPlayer2.processGuessPlayer2(row + String(Number(column) + 1));
		controllerPlayer2.processGuessPlayer2(row + String(Number(column) + 2));
		controllerPlayer2.processGuessPlayer2(row + String(Number(column) + 3));
		view.displayMessagePlayer2("Scythe Slash!");
	}
}

var zamasu = {

	specialMoveUsage: 0,

	karateChop: function(guess) {
		console.log(guess);
		var row = guess.charAt(0);
		var column = guess.charAt(1);
		controllerPlayer2.processGuessPlayer2(guess);
		controllerPlayer2.processGuessPlayer2(String(Number(row) + 1) + column);
		controllerPlayer2.processGuessPlayer2(String(Number(row) + 2) + column);
	}
};

function player1specialMove() {
	var guess = $(this).attr('id');
	var imgId = $('#imgPlayer1').attr('class');
	if (imgId === "vegeta") {
		vegeta.bigBang(guess);
	} else if (imgId === "piccolo") {
		piccolo.lightGrenade(guess);
	} else if (imgId === "trunks") {
		trunks.swordSlash(guess);
	}
	$('#right').find('td').off('contextmenu', player1specialMove);
	$('#right').find('td').off('click', player1TurnHuman);
	if (controllerPlayer2.pilot === "human") {
		$('#left').find('td').on('click', player2TurnHuman);
	} else if (controllerPlayer2.pilot === "cpu") {
		player2TurnCPU();
	}
};

function player2specialMove() {
	var guess = $(this).attr('id');
	var imgId = $('#imgPlayer2').attr('class');
	if (imgId === "zamasu") {
		zamasu.karateChop(guess);
	} else if (imgId === "blackRose") {
		blackRose.scytheSlash(guess);
	}
	$('#left').find('td').off('contextmenu', player2specialMove);
	$('#left').find('td').off('click', player2TurnHuman);
	if (controllerPlayer1.pilot === "human") {
		$('#right').find('td').on('click', player1TurnHuman);
	} else if (controllerPlayer1.pilot === "cpu") {
		player1TurnCPU();
	}
};*/

var controller = {

	playerCPUSelect: function() {
		$('#human1').on('click', function() {
			controllerPlayer1.pilot = 'human';
			controller.clear();
		});
		$('#computer1').on('click', function() {
			controllerPlayer1.pilot = 'cpu';
			controller.clear();
		});
		$('#human2').on('click', function() {
			controllerPlayer2.pilot = 'human';
			controller.clear();
		});
		$('#computer2').on('click', function() {
			controllerPlayer2.pilot = 'cpu';
			controller.clear();
		});
	},

	clear: function() {
		switchOff('#right', player1TurnHuman);
		switchOff('#left', player2TurnHuman);
		$('#start').removeClass('hidden');
		$('#clear').addClass('hidden');
		$('#clear').trigger('click');
	},

	startCheck: function() {
		if ($('#left').hasClass('ready') && $('#right').hasClass('ready')) {
			$('#start').on('click', controller.startGame);
		}
	},

	startGame: function() {
		if (controllerPlayer1.pilot === 'human' && controllerPlayer2.pilot === 'human') {
			//$('#right').find('td').on('contextmenu', player1specialMove);
			//$('#left').find('td').on('contextmenu', player2specialMove);
			prepareGame(switchOn, switchOn);
		} else if (controllerPlayer1.pilot === 'human' && controllerPlayer2.pilot === 'cpu') {
			//$('#right').find('td').on('contextmenu', player1specialMove);
			//$('#left').find('td').off('contextmenu', player2specialMove);
			prepareGame(switchOn, switchOff);
		} else if (controllerPlayer1.pilot === 'cpu' && controllerPlayer2.pilot === 'human') {
			//$('#right').find('td').off('contextmenu', player1specialMove);
			//$('#left').find('td').on('contextmenu', player2specialMove);
			prepareGame(switchOff, switchOn);
		}

		function prepareGame(callback1, callback2) {
			callback1('#right', player1TurnHuman);
			callback2('#left', player2TurnHuman);
			$('#start').addClass('hidden');
			$('#clear').removeClass('hidden');
		};
	}
};

function switchOn(where, func) {
	$(where).find('td').off('click', func).on('click', func);
};

function switchOff(where, func) {
	$(where).find('td').off('click', func);
};

function player1TurnHuman() {
	//switchOff('#right', player1TurnHuman);
	if (!model.allShipsSunk(model.shipsPlayer1.length, model.shipsPlayer1)) {
		switchOff('#right', player1TurnHuman);
		var guess = $(this).attr('id');
		controllerPlayer1.processGuessPlayer1(guess);
		if (controllerPlayer2.pilot === 'human') {
			switchOn('#left', player2TurnHuman)
		} else if (controllerPlayer2.pilot === 'cpu') {
			return player2TurnCPU();
		}
	}
};

function player2TurnHuman() {
	if (!model.allShipsSunk(model.shipsPlayer2.length, model.shipsPlayer2)) {
		switchOff('#left', player2TurnHuman);
		var guess = $(this).attr('id');
		controllerPlayer2.processGuessPlayer2(guess);
		if (controllerPlayer1.pilot === 'human') {
			switchOn('#right', player1TurnHuman);
		} else if (controllerPlayer1.pilot === 'cpu') {
			return player1TurnCPU();
		}
	}
};

function player1TurnCPU() {
	var runThroughs = 0;
	setTimeout(function() {
		controllerPlayer1.computerMakeGuess(runThroughs);
	}, 500)
	if (controllerPlayer2.pilot === 'human') {
		switchOn('#left', player2TurnHuman);
	} 
};

function player2TurnCPU() {
	var runThroughs = 0;
	setTimeout(function() {
		controllerPlayer2.computerMakeGuess(runThroughs);
	}, 500)
	if (controllerPlayer1.pilot === 'human') {
		switchOn('#right', player1TurnHuman);
	}
};

window.onload = function() {
	view.player1CharacterSelectButton();
	view.player2CharacterSelectButton();
	controller.playerCPUSelect();
	view.newGameButton();
	model.generateShipLocationsPlayer1();
	model.generateShipLocationsPlayer2();

	$('#cpuSelect1').buttonset();
	$('#player1CS').button();
	$('#clear').button();
	$('#start').button();
	$('#player2CS').button();
	$('#cpuSelect2').buttonset();
	/*$('#specialMove1').button();
	$('#specialMove2').button();*/

	view.toggleCharacters('#hDiv2', ['gokuBlue', 'goku'], '#player1CS');
	view.toggleCharacters('#hDiv4', ['trunks', 'trunksSS'], '#player1CS');
	view.toggleCharacters('#hDiv5', ['gotenks', 'gotenksSS', 'gotenksSS3'], '#player1CS');
	view.toggleCharacters('#hDiv7', ['vegeta', 'superVegeta'], '#player1CS');
	
	view.toggleCharacters('#vDiv6', ['black', 'blackRose'], '#player2CS');
	view.toggleCharacters('#vDiv8', ['kidBuu', 'fatBuu', 'evilBuu', 'superBuu'], '#player2CS');
	view.toggleCharacters('#vDiv9', ['frost', 'frost3rdForm', 'frostFinalForm'], '#player2CS');
	view.toggleCharacters('#vDiv10', ['imperfectCell', 'semiPerfectCell', 'cell'], '#player2CS');
	view.toggleCharacters('#vDiv11', ['frieza', 'goldenFrieza', 'friezaFirstForm'], '#player2CS');
};




