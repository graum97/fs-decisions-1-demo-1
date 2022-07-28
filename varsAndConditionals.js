// In this file, we'll be using variables, conditionals,
// and loops to model a soccer match.

//Create variables to represent teh two team's offensive and defensive ability based on stats from previous games.

let eaglesOff = 5;
let dragonOff = 5;
let eaglesDef = 6;
let dragonDef = 3;

if (eaglesOff > dragonOff) {
    console.log("The Emerald Eagles have a better offense than the Draconian Dragons.");
} else if (dragonOff > eaglesOff) {
    console.log("The Draconian Dragons have a better offense than the Emerald Eagles.")
} else {
    console.log("The two teams have the same offense ability.")
}

let eaglesScore = 0;
let dragonScore = 0;

if (dragonOff > eaglesDef) {
    console.log("The dragons have scored!");
    dragonScore = dragonScore + 1;
} else {
    console.log("The game continues...")
}

//Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues”.

if (eaglesOff > dragonDef) {
    console.log("The eagles have scored!");
    eaglesScore = eaglesScore + 1;
} else {
    console.log("The game continues...")
}

//After playing a long time, the players are tired. The coach for the Eagles team decides to swap out one of the offensive players for their best offensive player. This player will raise the offense ability of the team by 5. However, the offense ability cannot canont exceed 10. Using an if else statement, increase the Eagles’ offense ability to the correct value.

if (eaglesOff <= 5) {
    eaglesOff += 5;
} else {
    eaglesOff = 10;
}
console.log(eaglesOff)

//The coach for the Dragons team is thinking about taking a timeout. She decides to flip a coin, and if the coin lands on heads, she will take a timeout. If it lands on tails, she won’t. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).

let coinLandsHeads = false
if (coinLandsHeads === true) {
    console.log("the dragon's coach calls timeout.")
} else {
    console.log("Let's keep playing.")
}
// Demonstrate how you can use != to accomplish the same thing.
//
//Let’s see how this game will play out if it continues. Create a for loop to model the Eagles scoring 5 times. Console.log the scores of the teams after each goal.
for (let i = 1; i <= 5; i++) {
    if (eaglesOff > dragonDef) {
        console.log("The eagles have scored!");
        eaglesScore = eaglesScore + 1;
        console.log("Eagles:", eaglesScore, "Dragons:", dragonScore)
    } else {
        console.log("The game continues...")
    }
}

//Demonstrate a while loop that will have the Dragons keep making goals until their score is 5. You will need to comment out the above for loops for these to run properly.

if (dragonOff > eaglesDef) {
    while (dragonScore < 5) {
        dragonScore++
    } 
}
console.log(dragonScore);

//Add an if statement to the while loop that will only let the Dragons make a goal if their offense ability is greater than the Eagles’ defense ability. ^^
