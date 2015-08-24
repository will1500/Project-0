$( document ).ready(function() {
    console.log( "ready!" );

// Start the game!



var button = $(".button")
var  playerMoves = 0
var player = $('#player')
var player2 = $("#player2")
var row1= $(".CSSTableGenerator.r1")
row1=[1]
var row2= $(".CSSTableGenerator.r2")
                        row2=[2]
var row3= $(".CSSTableGenerator.r3")
                        row3=[3]

var array =row1 +   row2 + row3   
var asplit = array.split('', 3);  //this is an array of the whole row
row1.push(player)//this initiliazes players start
     




// $( player ).keypress(function() {
//     $(player).appendTo(row1[1])

//keyup to move player
$(document).on('keypress', function(event){
  if(event.which ===  32) {
    player.animate({
        // right: "+=20px"},"fast"),
        'margin-left': '+=30px'
        
        })
         playerMoves++
        if(playerMoves===30){
            alert("Player 1 Wins! Player 2 SUCKS :)!!")}
            //32 equals spacebar
}
  })   
  console.log("hi world")
    //increment a keypress
$(document).on('keypress', function(event){
  if(event.which ===  13) {
    player2.animate({
        // right: "+=20px"},"fast"),
        'margin-left': '+=30px'
        //13 equals enter
        })
         playerMoves++
        if(playerMoves===30){
            alert("Player 2 Wins! Player 1 SUCKS :D!!")}
}
  })


});
function Game() {
  //Create a new instance of player 1
  //this.player1 = ...
 this.player= new Player("1");
  //Do the same for a player 2
  //this.player2 = ...
   this.player2=new Player2("2");
  //Create the track
  //this.track = ...
  this.track = new Track();
}





//create second player in bottom table
//make button reset page
//make button to change emoji of player 1 or player 2
//if player 1 button is clicked set player 1 variable equal to diff





// 


 // $(document).on('keypress', function(event){
 //    //if the key pressed is 'a'
 //    if(event.which === 32){
 //      console.log("hi world")
 //      //remove the class active1 from the div, then add it to the next div with class of road in the player1 div
 //      $('div.road').removeClass('active1');
 //      $('.player1 .road').eq(road1 + 1).addClass('active1');
 //      road1++;
 //    }  
 //  });



 
 



        // call your function w/ params         }     });





  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////

// erase move right move right 

  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

 // END MAIN
//if n equals 4 erase if n is 5 erase




//////////////////////////////
//
// BEWARE, INNER WORKINGS BELOW
// Feel free to read around, but just don't break anything :)
//
//////////////////////////////


