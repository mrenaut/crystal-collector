

$(document).ready(function(){

	//global variables
	var wins = 0;
	var losses = 0;
	var computerGuess = 0;
	var userScoreVar = 0;
	var blueCrystalVar = 0;
	var yellowCrystalVar = 0;
	var purpleCrystalVar = 0;
	var redCrystalVar = 0;


		//if win/lose scorechecking function
		function scoreCheck() {
		 if (userScoreVar == computerGuess) {
		      wins ++;	
		      console.log("wins: " + wins)	
		      $("#winLoseMessage").html("You Won!")	
		      $("#wins").html("Wins: " + wins)  
		      $("#startButton").show();
		      $("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");
		      userScoreVar = 0;		
		    } 

		else if (userScoreVar > computerGuess){
		      losses ++;	
		      console.log("losses: " + losses)
		      $("#winLoseMessage").html("You Lost!")
		      $("#losses").html("Losses: " + losses) 		      
		      $("#startButton").show();
		      $("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");
		      userScoreVar = 0;		    
			}};

		//start game button
		    $("#startButton").click(function(){	
		        $(this).hide();
		        $("#winLoseMessage").html("Totals")
		        $("#userScore").html("<h1>User Score: " + 
		        userScoreVar + "</h1>");
		       
		        //computer generates a random score	up to 40
		        computerGuess = Math.floor((Math.random() * 101) + 19);
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
			//end of start button function
			});

	    //each time the user clicks a crystal, the score is added
	   	//to their total count then checked against the computer score
	   	$("#blueCrystal").click(function(){
	   		userScoreVar = userScoreVar + blueCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");
	        scoreCheck();	        	                   	        
	    }); 

        $("#yellowCrystal").click(function(){
	   		userScoreVar = userScoreVar + yellowCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>"); 
	        scoreCheck();		                
		});

		$("#purpleCrystal").click(function(){
	   		userScoreVar = userScoreVar + purpleCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");
	        scoreCheck(); 		              
		});

		$("#redCrystal").click(function(){
	   		userScoreVar = userScoreVar + redCrystalVar 
	   		$("#userScore").html("<h1>User Score: " + 
	        userScoreVar + "</h1>");
	        scoreCheck();	           
		});
	 
//end of document ready function		    
});

	   














