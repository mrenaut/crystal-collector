


var wins = 0;
var losses = 0;
var computerGuess= 0;
var userScoreVar = 0;
var blueCrystalVar = 0;
var yellowCrystalVar = 0;
var purpleCrystalVar = 0;
var redCrystalVar = 0;



//start game button, that disappears after game starts
$(document).ready(function(){
		    $("#startButton").click(function(){
	        $(this).hide();
	        //computer generates a random score	up to 40
	        computerGuess = Math.floor((Math.random() * 40) + 1);
	        $("#computerScore").html("<h1>Computer Score: " + 
	        computerGuess + "</h1>");
	        //a score is generated for each crystal up to 12
	        blueCrystalVar = Math.floor((Math.random() * 12) + 1);
	        console.log(blueCrystalVar);
	        yellowCrystalVar = Math.floor((Math.random() * 12) + 1);
	        console.log(yellowCrystalVar);
	        purpleCrystalVar = Math.floor((Math.random() * 12) + 1);
	        console.log(purpleCrystalVar);
	        redCrystalVar = Math.floor((Math.random() * 12) + 1);
	        console.log(redCrystalVar);        	        	
	    });

	    //each time the user clicks a crystal, the score is added
	   	//to their total count

	   	$("#blueCrystal").click(function(){
	   		userScoreVar = userScoreVar + blueCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");
	    }); 

        $("#yellowCrystal").click(function(){
	   		userScoreVar = userScoreVar + yellowCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");    
		});

		$("#purpleCrystal").click(function(){
	   		userScoreVar = userScoreVar + purpleCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");    
		});

		$("#redCrystal").click(function(){
	   		userScoreVar = userScoreVar + redCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");  
		});

		//if (userScoreVar < 0) {
		//	console.log(working);
		//}
	

});

	








//a random number is generated for each crystal

//crystal buttons pushed  and adds up until >= to computer score

//a loss or win is determined and displayed in the final score section

//start button pops up again to begin new game


//hide start button when game begins

		

//for (var i = 0; i < letters.length; i++){  



