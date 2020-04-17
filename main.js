var Rps = ["Rock", "Paper", "Scissors"];

var User = Rps[Math.floor(Math.random() * 3)];

var Computer = Rps[Math.floor(Math.random() * 3)];


function play(User, Computer) {
    if (User === Computer) {
        console.log("User selected:" + User + "!");
        console.log("Computer selected:" + Computer + "!");
        console.log("It's a Tie!");

    }
    else if (User === "Rock" && Computer === "Scissors" || User === "Paper" && Computer === "Rock" || User === "Scissors" && Computer === "Paper") {
        console.log("User selected:" + User + "!");
        console.log("Computer selected:" + Computer + "!");
        console.log("User Wins");

    }
    else {
        console.log("User selected:" + User + "!");
        console.log("Computer selected:" + Computer + "!");
        console.log("Computer Wins");

    }
}

play(User, Computer)

