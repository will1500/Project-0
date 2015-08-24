// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...
 this.player1= new Player1;
  //Do the same for a player 2
  //this.player2 = ...
   this.player2=new Player2;
  //Create the track
  //this.track = ...
  this.track = new Track();
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(team) {
  this.name=team;
  this.r1=0
  //this.name = ...
  //this.position = ...
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
 this.position++;
 return this.position;
  //update player's position
};
//to move player keypress to move across row array 
//when player reachs end of row array[3] alert message winner



// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...
   this.$cells=$(".track.r1")
   console.log("working")
  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();
console.log(game.player1.name);





            // make button that starts game 
            //call player in keyup function 
            //if player reachs end of array alert winner
            //make button that randomly changes player variable