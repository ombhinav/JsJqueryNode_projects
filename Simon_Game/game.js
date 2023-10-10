var gamePattern = []

function nextSequence(){
    var randomNumber =math.floor(Math.random()*3);
    
    var randomChosenColour = buttonColours[randomNumber];
    
    var buttonColours = ["red", "blue", "green", "yellow"];
    
    gamePattern.push(randomChosenColour);
};
