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
		$("#player1CS").on('click', function() {
			$("#heroSelect").removeClass('hidden');
			$('#messageAreaPlayer1').removeClass();
			$('#left').removeClass();
			$("#imgPlayer1").removeClass();
			$("#board").addClass('hidden');

			displayHero(".goku", 'gokuMessageBoard', 'gokuBackground', 'goku');
			displayHero(".gokuBlue", 'gokuBlueMessageBoard', 'gokuBlueBackground', 'gokuBlue');
			displayHero(".vegeta", 'vegetaMessageBoard', 'vegetaBackground', 'vegeta');
			displayHero(".superVegeta", 'superVegetaMessageBoard', 'superVegetaBackground', 'superVegeta');
			displayHero(".beerus", 'beerusMessageBoard', 'beerusBackground', 'beerus');
			displayHero(".trunks", 'trunksMessageBoard', 'trunksBackground', 'trunks');
			displayHero(".trunksSS", 'trunksSSMessageBoard', 'trunksSSBackground', 'trunksSS');
			displayHero(".gohan", 'gohanMessageBoard', 'gohanBackground', 'gohan');			
			displayHero(".piccolo", 'piccoloMessageBoard', 'piccoloBackground', 'piccolo');
			displayHero(".tien", 'tienMessageBoard', 'tienBackground', 'tien');
			displayHero(".gotenks", 'gotenksMessageBoard', 'gotenksBackground', 'gotenks');
			displayHero(".gotenksSS", 'gotenksSSMessageBoard', 'gotenksSSBackground', 'gotenksSS');
			displayHero(".gotenksSS3", 'gotenksSS3MessageBoard', 'gotenksSS3Background', 'gotenksSS3');
		});

		function displayHero(character, characterMessageBoard, characterBackground, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer1').removeClass();
				$('#messageAreaPlayer1').addClass(characterMessageBoard);
				$('#left').removeClass();
				$('#left').addClass(characterBackground);
				$('#imgPlayer1').removeClass();
				$('#imgPlayer1').addClass(characterPic);
				$("#heroSelect").addClass('hidden');
				$("#board").removeClass('hidden');
			});
		};
	},

	player2CharacterSelectButton: function() {
		$("#player2CS").on('click', function() {
			$("#villianSelect").removeClass('hidden');
			$('#messageAreaPlayer2').removeClass();
			$('#right').removeClass();
			$("#imgPlayer2").removeClass();
			$("#board").addClass('hidden');

			displayVillian(".black", 'blackMessageBoard', 'blackBackground', 'black');
			displayVillian(".blackRose", 'blackRoseMessageBoard', 'blackRoseBackground', 'blackRose');
			displayVillian(".zamasu", 'zamasuMessageBoard', 'zamasuBackground', 'zamasu');
			displayVillian(".frieza", 'freizaMessageBoard', 'freizaBackground', 'frieza');
			displayVillian(".babidi", 'babidiMessageBoard', 'babidiBackground', 'babidi');
			displayVillian(".fatBuu", 'fatBuuMessageBoard', 'fatBuuBackground', 'fatBuu');
			displayVillian(".evilBuu", 'evilBuuMessageBoard', 'evilBuuBackground', 'evilBuu');
			displayVillian(".superBuu", 'superBuuMessageBoard', 'superBuuBackground', 'superBuu');
			displayVillian(".kidBuu", 'kidBuuMessageBoard', 'kidBuuBackground', 'kidBuu');
			displayVillian(".cell", 'cellMessageBoard', 'cellBackground', 'cell');
			displayVillian(".semiPerfectCell", 'semiPerfectCellMessageBoard', 'semiPerfectCellBackground', 'semiPerfectCell');
			displayVillian(".imperfectCell", 'imperfectCellMessageBoard', 'imperfectCellBackground', 'imperfectCell');
			displayVillian(".cellJr", 'cellJrMessageBoard', 'cellJrBackground', 'cellJr');
			displayVillian(".frost", 'frostMessageBoard', 'frostBackground', 'frost');
			displayVillian(".android17",'android17MessageBoard', 'android17Background', 'android17');
			displayVillian(".android18",'android18MessageBoard', 'android18Background', 'android18');
			displayVillian(".android19",'android19MessageBoard', 'android19Background', 'android19');
			displayVillian(".android20",'android20MessageBoard', 'android20Background', 'android20');
		});

		function displayVillian(character, characterMessageBoard, characterBackground, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer2').removeClass();
				$('#messageAreaPlayer2').addClass(characterMessageBoard);
				$('#right').removeClass();
				$('#right').addClass(characterBackground);
				$('#imgPlayer2').removeClass();
				$('#imgPlayer2').addClass(characterPic);
				$("#villianSelect").addClass('hidden');
				$("#board").removeClass('hidden');
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
		$("#clear").on('click', function() {
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
				ship.hits[index] = "hit";
				view.displayHitPlayer1(guess);
				view.displayMessagePlayer1("HIT!");
				if (this.isSunk(ship)) {
					view.displayMessagePlayer1("You completed the combo!");
					this.shipsPlayer1[i].sunk = true;
				}
				return true;
			}
		}
		view.displayMissPlayer1(guess);
		(this.allShipsSunk(this.shipsPlayer1.length, this.shipsPlayer1)) ? view.displayMessagePlayer1("You win! You landed all 3 combos in " + controllerPlayer1.guesses + " attemps!") :
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
				if (this.isSunk(ship)) {
					view.displayMessagePlayer2("You completed the combo!");
					this.shipsPlayer2[i].sunk = true;
				}
				return true;
			}
		}
		view.displayMissPlayer2(guess);
		(this.allShipsSunk(this.shipsPlayer2.length, this.shipsPlayer2)) ? view.displayMessagePlayer2("You win! You landed all 3 combos in " + controllerPlayer2.guesses + " attemps!") :
									   view.displayMessagePlayer2("You missed.");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
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

function parseGuess(guess, conditional, message) {
	var row = guess.charAt(0);
	var column = guess.charAt(1);
	if (conditional) {
		return row + column;
	} else {
		message("Don't attack yourself!");
	}
	return null;
};

var controllerPlayer1 = {

	pilot: "human",
	guesses: 0,

	processGuessPlayer1: function(guess) {
		var location = parseGuess(guess, "column > 4", view.displayMessagePlayer1);
		if (location) {
			if (!model.allShipsSunk(model.shipsPlayer1.length, model.shipsPlayer1)) {
				this.guesses++;
			}
			model.firePlayer1(location);
			if (model.allShipsSunk(model.shipsPlayer1.length, model.shipsPlayer1)) {
				view.displayMessagePlayer1("You win! You landed all 3 combos in " + this.guesses + " attemps!");
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
		this.processGuessPlayer1(guess);
	}
};

var controllerPlayer2 = {

	pilot: "human",
	guesses: 0,

	processGuessPlayer2: function(guess) {
		var location = parseGuess(guess, 'column < 5', view.displayMessagePlayer2);
		if (location) {
			if (!model.allShipsSunk(model.shipsPlayer2.length, model.shipsPlayer2)) {
				this.guesses++;
			}
			model.firePlayer2(location);
			if (model.allShipsSunk(model.shipsPlayer2.length, model.shipsPlayer2)) {
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
			var firstDigit = String(guess).charAt(0);
			var secondDigit = String(guess).charAt(1);
			/*if (guess > (String(model.boardSizeRow - 1) + String(model.boardSizeCol - 1)) || guess.length !== 2 || Number(secondDigit) === model.boardSizeCol) {*/
			if (firstDigit < 0 || firstDigit > model.boardSizeRow - 1 ||
				secondDigit >= model.boardSizeCol || guess.length !== 2) {
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

var vegeta = {

	specialMoveUsage: 0,

	bigBang: function(playerController) {
		$('#right').find('td').contextmenu(function() {

			var guess = $(this).attr('id');
			var row = guess.charAt(0);
			var column = guess.charAt(1);
			playerController.processGuessPlayer1(guess);
			playerController.processGuessPlayer1(String(Number(row) + 1) + column);
			playerController.processGuessPlayer1(String(Number(row) - 1) + column);
			playerController.processGuessPlayer1(row + String(Number(column) + 1));
			playerController.processGuessPlayer1(row + String(Number(column) - 1));			
		});
	}
};

function clickPlayer1() {
	$("#clear").trigger('click');
	$('#right').find('td').on('click', player1TurnHuman);
	controllerPlayer1.pilot = "human";
	$('#human1').off('click', clickPlayer1);
};

function player1CpuSelect() {
	$('#human1').on('click', clickPlayer1)
	$('#computer1').on('click', function() {
		$("#clear").trigger('click');
		$('#right').find('td').off('click', player1TurnHuman);
		controllerPlayer1.pilot = "cpu";
		$('#human1').on('click', clickPlayer1);
	});
};

function clickPlayer2() {
	$("#clear").trigger('click');
	$('#left').find('td').on('click', player2TurnHuman);
	controllerPlayer2.pilot = "human";
	$('#human2').off('click', clickPlayer2);
};

function player2CpuSelect() {
	$('#human2').on('click', clickPlayer2);
	$('#computer2').on('click', function() {
		$("#clear").trigger('click');
		$('#left').find('td').off('click', player2TurnHuman);
		controllerPlayer2.pilot = "cpu";
		$('#human2').on('click', clickPlayer2);
	});
};

function player1TurnHuman() {
	if (!model.allShipsSunk(model.shipsPlayer1.length, model.shipsPlayer1)) {
		var guess = $(this).attr('id');
		controllerPlayer1.processGuessPlayer1(guess);
		$('#right').find('td').off('click', player1TurnHuman);
		if (controllerPlayer2.pilot === "human") {
			$('#left').find('td').on('click', player2TurnHuman);
		} else if (controllerPlayer2.pilot === "cpu") {
			player2TurnCPU();
		}
	}
};

function player2TurnHuman() {
	if (!model.allShipsSunk(model.shipsPlayer2.length, model.shipsPlayer2)) {
		var guess = $(this).attr('id');
		controllerPlayer2.processGuessPlayer2(guess);
		$('#left').find('td').off('click', player2TurnHuman);
		if (controllerPlayer1.pilot === "human") {
			$('#right').find('td').on('click', player1TurnHuman);
		} else if (controllerPlayer1.pilot === "cpu") {
			player1TurnCPU();
		}
	}
};

function player1TurnCPU() {
	if (!model.allShipsSunk(model.shipsPlayer1.length, model.shipsPlayer1)) {
		var runThroughs = 0;
		setTimeout(function() {
			controllerPlayer1.computerMakeGuess(runThroughs);
		}, 500)
		if (controllerPlayer2.pilot === "human") {
			$('#left').find('td').on('click', player2TurnHuman);
		} 
	}
};

function player2TurnCPU() {
	if (!model.allShipsSunk(model.shipsPlayer2.length, model.shipsPlayer2)) {
		var runThroughs = 0;
		setTimeout(function() {
			controllerPlayer2.computerMakeGuess(runThroughs);
		}, 500)
		if (controllerPlayer1.pilot === "human") {
			$('#right').find('td').on('click', player1TurnHuman);
		}
	}
};

window.onload = function() {
	view.player1CharacterSelectButton();
	view.player2CharacterSelectButton();
	player1CpuSelect();
	player2CpuSelect();
	view.newGameButton();
	model.generateShipLocationsPlayer1();
	model.generateShipLocationsPlayer2();
	$('#cpuSelect1').buttonset();
	$('#player1CS').button();
	$('#clear').button();
	$('#player2CS').button();
	$('#cpuSelect2').buttonset();


	view.toggleCharacters("#hDiv2", ['gokuBlue', 'goku'], "#player1CS");
	view.toggleCharacters("#hDiv4", ['trunks', 'trunksSS'], "#player1CS");
	view.toggleCharacters("#hDiv5", ['gotenks', 'gotenksSS', 'gotenksSS3'], "#player1CS");
	view.toggleCharacters("#hDiv7", ['vegeta', 'superVegeta'], "#player1CS");
	
	view.toggleCharacters("#vDiv6", ['black', 'blackRose'], "#player2CS");
	view.toggleCharacters("#vDiv8", ['kidBuu', 'fatBuu', 'evilBuu', 'superBuu'], "#player2CS");
	view.toggleCharacters("#vDiv10", ['imperfectCell', 'semiPerfectCell', 'cell'], "#player2CS");
}




