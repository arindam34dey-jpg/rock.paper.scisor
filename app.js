let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user");
const comScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let opt=['rock','paper','scissor'];
    const randomArr=Math.floor(Math.random()*3);
    return opt[randomArr];
}

const DrawGame=()=>{
    msg.innerText="Draw";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user++;
        userScorePara.innerText=user;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
    }
    else{
        comp-score++;
        comScorePara.innerText=comp-score;
        console.log("you lose");
        msg.innerText=`you lose. ${compChoice} beats you ${userChoice}`;
    }
}
const playGame = (userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("com choice=",compChoice);

    if(userChoice==compChoice){
        DrawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"? false : true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice===scissors ? false : true;
        }
        else{
            userWin=compChoice===rock ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    });
});