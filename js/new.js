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

	/*player1CharacterSelect: function() {
		$('#messageAreaPlayer1').removeClass();
		$('#left').removeClass();
		var player1Character = prompt("Player1 choose your character: 1 = Goku,  2 = Vegeta, 3 = Trunks, 4 = Gohan, 5 = Piccolo, 6 = Goten, 7 = Tien, 8 = Shenron");

		switch(player1Character) {
			case '1': 
				$('#messageAreaPlayer1').addClass('gokuMessageBoard');
				$('#left').addClass('gokuGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/gokuBlue.png";
				break;
			case '2':
				$('#messageAreaPlayer1').addClass('vegetaMessageBoard');
				$('#left').addClass('vegetaGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/vegetaBlue2.png";
				break;
			case '3':
				$('#messageAreaPlayer1').addClass('trunksMessageBoard');
				$('#left').addClass('trunksGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/trunks.png";
				break;
			case '4':
				$('#messageAreaPlayer1').addClass('gohanMessageBoard');
				$('#left').addClass('gohanGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/gohan.png";
				break;
			case '5':
				$('#messageAreaPlayer1').addClass('piccoloMessageBoard');
				$('#left').addClass('piccoloGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/piccolo.png";
				break;
			case '6':
				$('#messageAreaPlayer1').addClass('gotenMessageBoard');
				$('#left').addClass('gotenGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/goten.png";
				break;
			case '7':
				$('#messageAreaPlayer1').addClass('tienMessageBoard');
				$('#left').addClass('tienGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/tien.png";
				break;
			case '8':
				$('#messageAreaPlayer1').addClass('shenronMessageBoard');
				$('#left').addClass('shenronGameBoard');
				var image = document.getElementById("imgPlayer1");
				image.src = "images/shenron.png";
				break;
			default:
				alert("Hit reload. Choose a number.");
		};
	},

	player2CharacterSelect: function() {
		$('#messageAreaPlayer2').removeClass();
		$('#right').removeClass();
		var player2Character = prompt("Player2 choose your character: 1 = Black,  2 = Frieza, 3 = Kid Buu, 4 = Super Buu, 5 = Cell, 6 = Cell Jr., 7 = Frost, 8 = Android 19, 9 = Android 20");

		switch(player2Character) {
			case '1': 
				$('#messageAreaPlayer2').addClass('blackMessageBoard');
				$('#right').addClass('blackGameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/blackAngry.png";
				break;
			case '2':
				$('#messageAreaPlayer2').addClass('freizaMessageBoard');
				$('#right').addClass('freizaGameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/goldenFrieza.png";
				break;
			case '3':
				$('#messageAreaPlayer2').addClass('kidBuuMessageBoard');
				$('#right').addClass('kidBuuGameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/buu.png";
				break;
			case '4':
				$('#messageAreaPlayer2').addClass('superBuuMessageBoard');
				$('#right').addClass('superBuuGameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/superBuu.png";
				break;
			case '5':
				$('#messageAreaPlayer2').addClass('cellMessageBoard');
				$('#right').addClass('cellGameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/cell.png";
				break;
			case '6':
				$('#messageAreaPlayer2').addClass('cellJrMessageBoard');
				$('#right').addClass('cellJrGameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/cellJr.png";
				break;
			case '7':
				$('#messageAreaPlayer2').addClass('frostMessageBoard');
				$('#right').addClass('frostGameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/frostForm1.png";
				break;
			case '8':
				$('#messageAreaPlayer2').addClass('android19MessageBoard');
				$('#right').addClass('android19GameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/android19.png";
				break;
			case '9':
				$('#messageAreaPlayer2').addClass('android20MessageBoard');
				$('#right').addClass('android20GameBoard');
				var image = document.getElementById("imgPlayer2");
				image.src = "images/android20Stare.png";
				break;
				alert("Hit reload. Choose a number.");
		};
	},

	player1CharacterSelectButton: function() {
		$("#player1CS").click(function() {
			view.player1CharacterSelect();
		});
	},

	player2CharacterSelectButton: function() {
		$("#player2CS").click(function() {
			view.player2CharacterSelect();
		});
	}*/

	player1CharacterSelectButton: function() {
		$("#player1CS").click(function() {
			$("#heroSelect").css('display', 'block');
			$('#messageAreaPlayer1').removeClass();
			$('#left').removeClass();
			var image = document.getElementById("imgPlayer1");
			image.src = "";

			displayHero("#goku", 'gokuMessageBoard', 'gokuGameBoard', "images/gokuBlue.png");
			displayHero("#vegeta", 'vegetaMessageBoard', 'vegetaGameBoard', "images/vegetaBlue2.png");
			displayHero("#trunks", 'trunksMessageBoard', 'trunksGameBoard', "images/trunks.png");
			displayHero("#gohan", 'gohanMessageBoard', 'gohanGameBoard', "images/gohan.png");			
			displayHero("#piccolo", 'piccoloMessageBoard', 'piccoloGameBoard', "images/piccolo.png");
			displayHero("#tien", 'tienMessageBoard', 'tienGameBoard', "images/tien.png");
		});

		function displayHero(character, characterMessageBoard, characterGameBoard, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer1').addClass(characterMessageBoard);
				$('#left').addClass(characterGameBoard);
				var image = document.getElementById("imgPlayer1");
				image.src = characterPic
				$("#heroSelect").css('display', 'none');
			});
		};

	},
	player2CharacterSelectButton: function() {
		$("#player2CS").click(function() {
			$("#villianSelect").css('display', 'block');
			$('#messageAreaPlayer2').removeClass();
			$('#right').removeClass();
			var image = document.getElementById("imgPlayer2");
			image.src = "";

			displayVillian("#black", 'blackMessageBoard', 'blackGameBoard', "images/blackAngry.png");
			displayVillian("#frieza", 'freizaMessageBoard', 'freizaGameBoard', "images/goldenFrieza.png");
			displayVillian("#buu", 'kidBuuMessageBoard', 'kidBuuGameBoard', "images/buu.png");
			displayVillian("#cell", 'cellMessageBoard', 'cellGameBoard', "images/cell.png");
			displayVillian("#frost", 'frostMessageBoard', 'frostGameBoard', "images/frostForm1.png");
			displayVillian("#android20",'android20MessageBoard', 'android20GameBoard', "images/android20Stare.png");
		});

		function displayVillian(character, characterMessageBoard, characterGameBoard, characterPic) {
			$(character).click(function() {
				$('#messageAreaPlayer2').addClass(characterMessageBoard);
				$('#right').addClass(characterGameBoard);
				var image = document.getElementById("imgPlayer2");
				image.src = characterPic
				$("#villianSelect").css('display', 'none');
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
	}
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
}

function parseGuessPlayer2(guess) {
	var row = guess.charAt(0);
	var column = guess.charAt(1);
	if (column < 5) {
		return row + column;
	} else {
		alert("Don't attack yourself!")
	}
	return null;
}

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
		$('#left').find('button').removeClass('hit miss');
		$('#right').find('button').removeClass('hit miss');
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
	$('.gameSquare').on('click', function() {
		var guess = $(this).text();
		controllerPlayer1.processGuessPlayer1(guess);
		controllerPlayer2.computerMakeGuess();		
	});
};

function play2PlayerGame() {
	$('.gameSquare').on('click', function() {
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




