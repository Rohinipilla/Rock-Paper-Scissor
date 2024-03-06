let userPoints = 0;
let compPoints = 0;

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

const tie = () =>{
    console.log("Tie");
    msg.innerText = "It's a Tie";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userPoints++;
        console.log("you win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore.innerText = userPoints;
    }
    else{
        compPoints++;
        console.log("computer win");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore.innerText = compPoints;
    }
}
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //generating computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        //Tie
        tie();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

