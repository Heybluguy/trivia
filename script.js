// Keep track of the number of questions the user answered correctly
var correct = 0;

// Ask at least five questions
var guess = prompt("what year is it?");
if (parseInt(guess) === 2018) {
  correct += 1;
}

var guess = prompt("What color is the sky?");
if (guess.toUpperCase() === "BLUE") {
  correct += 1;
}

var guess = prompt("Orange is the new...");
if (guess.toUpperCase() === "BLACK") {
  correct += 1;
}

var guess = prompt("What color are bananas?");
if (guess.toUpperCase() === "YELLOW") {
  correct += 1;
}

var guess = prompt("What color is President Trump?");
if (guess.toUpperCase() === "ORANGE") {
  correct += 1;
}

// Provide a final message after the quiz letting
// the user know the number of questions he or she got right.
document.write("You've answered " + correct + " right!");

// Rank the player.If the player answered
// all five correctly, give that player the gold crown:
// 3 - 4 is a silver crown;
// 1 - 2 correct answers is a bronze crown and
//  0 correct is no crown at all.
if (correct === 5) {
  document.write("You recieved a gold crown!");
} else if (correct === 4 || correct === 3) {
    document.write("You recieved a silver crown!");
} else if (correct === 2 || correct === 1) {
    document.write("You recieved a bronze crown!");
} else {
    document.write("You recieved no crown.");
}



