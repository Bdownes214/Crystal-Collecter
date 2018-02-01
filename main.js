$(function () {
    //variable for wins
    var wins = 0;
    //variable for random number
    var computerRandom = Math.floor(Math.random() * (120 - 12 + 1)) + 12;
    console.log(computerRandom)
    //variable to hold sum of user guesses
    var userGuessValue = 0;
  
    //random numbers for each crystal
    $("img").each(function () {
      $(this).attr("data-value", Math.floor(Math.random() * 12) + 1);
    });
  
    //click handler for each Crystal
      //register random number from each crystal clicked
      //add value of each crystal clicked
    $("img").on("click", function () {
      userGuessValue += parseInt($(this).attr("data-value"));
      console.log(userGuessValue);
    });
  
    //Compare userGuessValue against computerRandom
    
      //if userGuessValue = computerRandom, then win

      //else if userGuessValue > computerRandom, then lose
    });