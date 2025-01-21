let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara= document.querySelector("#user-score");
const compScorepara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    // rock paper Scisore
    const options =["rock","paper","scisor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText=`Game was Draw`;
    msg.style.backgroundColor= "grey";

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you wins");
        msg.innerText=`You wins ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you loose!");
        msg.innerText=`You loose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "red";

    }
}
const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    // generate comp choice-> modular way of programing
    const compChoice=genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice===compChoice){
        // drawgame
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            // scissor,paper
            userWin=compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="scisor" ? false: true;
        }else{
            // rock,paper
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });

});