const playerScoreEl=document.getElementById('playerScore');
const playerChoiceEl=document.getElementById('playerChoice');
const computerScoreEl=document.getElementById('computerScore');
const computerChoiceEl=document.getElementById('computerChoice');
const result=document.getElementById('resultText');
// player rock paper sci details
const playerRock1=document.getElementById('player-rock');
const playerPaper1=document.getElementById('player-paper');
const playerScissor1=document.getElementById('player-Scissor');
//computer rock paper details
const computerRock1=document.getElementById('computer-rock');
const computerPaper1=document.getElementById('computer-paper');
const computerScissor1=document.getElementById('computer-Scissor');

// let picks={
//     rock :{ name:'Rock',defeats:['scissor']},
//     paper :{ name:'Paper',defeats:['rock']},
//     scissor :{ name:'Scissor',defeats:['paper']},
// };
const choices = {
    rock: { name: 'Rock', defeats: ['scissor']},
   paper: { name: 'Paper', defeats: ['rock'] },
  scissor: { name: 'Scissor', defeats: ['paper'] },
//     lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
//     spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
 };
  
  
//game icons
function reset(){
const gameIcons=document.querySelectorAll('.fa-regular');
gameIcons.forEach(element => {
    element.classList.remove("selected");
});
const rem=document.querySelectorAll(".fa-solid")
for(var i=0;i<rem.length;i++)
{
rem[i].classList.remove("selected");
}

}
let playerScoreNumber=0;
let computerScoreNumber=0;

//computer choice
let computerChoice=''; 
function randomChoice()
{
    let random=Math.random();
    if(random<=0.4)
    {
        computerChoice='rock';
    }
    else if(random<=0.7)
    {
        computerChoice='paper';
    }
    else
    {
        computerChoice='scissor';
    }
}
//passing computerchoice and stylin it
function display(computerChoice)
{
//add selected styling and update computerchoice
switch(computerChoice){
   
case 'rock':
    computerRock1.classList.add('selected');
    computerChoiceEl.textContent='---Rock';
    break;
 case 'paper':
    computerPaper1.classList.add('selected');
    computerChoiceEl.textContent='---Paper';
    break;
 case 'scissor':
       computerScissor1.classList.add('selected');
        computerChoiceEl.textContent='---Scissor';
        break;

default:break;
}
}

//function to update score
function updateScore(playerChoice)
{
if(computerChoice===playerChoice)
{    
    result.textContent='It is a tie';
}
else{
    let cho=choices[playerChoice];
    let r=cho.defeats.indexOf(computerChoice);
   if(r>-1)
   {
    result.textContent="You win";
    playerScoreNumber++;
    playerScoreEl.textContent=playerScoreNumber;
   }
   else
   {
    result.textContent="Computer wins";
    computerScoreNumber++;
    computerScoreEl.textContent=computerScoreNumber;
   }
}
}

//function to process results
function checkResult(playerChoice){
reset();
randomChoice();
display(computerChoice);
updateScore(playerChoice);
}


//passing player selection
function select(playerChoice)
{
checkResult(playerChoice);
//add selected styling and update playerchoice
switch(playerChoice){
   
case 'rock':
    playerRock1.classList.add('selected');
    playerChoiceEl.textContent='---Rock';
    break;
 case 'paper':
    playerPaper1.classList.add('selected');
    playerChoiceEl.textContent='---Paper';
    break;
 case 'scissor':
       playerScissor1.classList.add('selected');
        playerChoiceEl.textContent='---Scissor';
        break;

default:break;
}
}
//resetAll
function resetAll()
{
    playerScoreNumber=0;
    computerScoreNumber=0;
    playerScoreEl.textContent=playerScoreNumber;
    computerScoreEl.textContent=computerScoreNumber;
    playerChoiceEl.textContent='';
    computerChoiceEl.textContent='';
    result.textContent=''
    reset();
}

resetAll();

