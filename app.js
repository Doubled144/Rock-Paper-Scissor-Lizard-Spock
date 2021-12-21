//DOM settings
var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.getElementById(".score-board");
var result_div = document.querySelector(".result");
var result_p = document.querySelector(".result p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissor_div = document.getElementById("s");
var lizard_div = document.getElementById("l");
var spock_div = document.getElementById("k");
var reset_div = document.getElementById("reset");
var re;

function getCompChoice()
{
  var choice = ["r", "p", "s", "l", "k"];
  var index = Math.floor(Math.random()*5);
  return choice[index];
}

function game(userchoice, userScore, compScore)
{
  if(userScore_span.innerHTML == '0' && compScore_span.innerHTML == '0' && re == true)
  {
    userScore = 0;
    compScore = 0;
  }
  
  if(userScore <= 9 && compScore <= 9)
  {
    var computer = getCompChoice();
    switch (userchoice + computer)
    {
      case"rs":
      case"rl":
      case"sp":
      case"sl":
      case"pr":
      case"pk":
      case"lk":
      case"lp":
      case"ks":
      case"kr":
        win(userchoice, computer);
        break;
      case"sr":
      case"ls":
      case"ps":
      case"ls":
      case"rp":
      case"kp":
      case"kl":
      case"pl":
      case"sk":
      case"rk":
        lose(userchoice, computer);
        break;
      case"rr":
      case"ss":
      case"pp":
      case"ll":
      case"kk":
        draw();
        break;
    }
  }
}

function win(userchoice, computer)
{
  if(userScore_span.innerHTML == '0')
  {
    userScore = 0;
  }
  userScore++;
  userScore_span.innerHTML = userScore;

  if(userchoice == 'r' && computer == 's'){
    result_p.innerHTML = "Rock destroys Scissor! You Win!";
  }
  else if(userchoice == 'r' && computer == 'l'){
    result_p.innerHTML = "Rock crushes Lizard! You Win!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 'p' && computer == 'r'){
    result_p.innerHTML = "Paper covers Rock! You Win!";
  }
  else if(userchoice == 'p' && computer == 'k'){
    result_p.innerHTML = "Paper disproves Spock! You Win!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 's' && computer == 'p') {
    result_p.innerHTML = "Scissor cuts Paper! You Win!";
  }
  else if(userchoice == 's' && computer == 'l') {
    result_p.innerHTML = "Scissor decapitates Lizard! You Win!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 'l' && computer == 'p') {
    result_p.innerHTML = "Lizard eats Paper! You Win!";
  }
  else if(userchoice == 'l' && computer == 'k') {
    result_p.innerHTML = "Lizard poisons Spock! You Win!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 'k' && computer == 's') {
    result_p.innerHTML = "Spock smashes Scissor! You Win!";
  }
  else if(userchoice == 'k' && computer == 'r') {
    result_p.innerHTML = "Spock vaporizes Rock! You Win!";
  }
  
  if(userScore == 10)
  {
    result_p.innerHTML = "";
    userWins();
  }
}

function lose(userchoice, computer)
{
  if(compScore_span.innerHTML == '0')
  {
    compScore = 0;
  }
  compScore++;
  compScore_span.innerHTML = compScore;

  

  if(userchoice == 'r' && computer == 'p'){
    result_p.innerHTML = "Paper covers Rock! You Lose!";
  }
  else if(userchoice == 'k' && computer == 'p'){
    result_p.innerHTML = "Paper disproves Spock! You Lose!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 'p' && computer == 's'){
    result_p.innerHTML = "Scissor cuts Paper! You Lose!";
  }
  else if(userchoice == 'p' && computer == 's'){
    result_p.innerHTML = "Scissor decapitates Lizard! You Lose!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 's' && computer == 'r'){
    result_p.innerHTML = "Rock destroys Scissor! You Lose!";
  }
  else if(userchoice == 'l' && computer == 'r'){
    result_p.innerHTML = "Rock crushes Lizard! You Lose!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 's' && computer == 'k'){
    result_p.innerHTML = "Spock smashes Scissor! You Lose!";
  }
  else if(userchoice == 'r' && computer == 'k'){
    result_p.innerHTML = "Spock vaporizes Rock! You Lose!";
  }
  //-----------------------------------------------------------//
  else if(userchoice == 'k' && computer == 'l'){
    result_p.innerHTML = "Lizard poisons Spock! You Lose!";
  }
  else if(userchoice == 'p' && computer == 'l'){
    result_p.innerHTML = "Lizard eats Paper! You Lose!";
  }
  if(compScore == 10)
  {
    result_p.innerHTML = "";
    compWins();
  }
}

function draw()
{
  result_p.innerHTML = "This is a draw! Play again!";
}

function userWins(){
  result_p.innerHTML =  " User player reaches 10 first. User wins";
}

function compWins(){
  result_p.innerHTML = " Comp player reaches 10 first. Comp wins";
}
function reset(userScore, compScore)
{
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = "Game Reset";
  reset_div.innerHTML = "Reset";
  re = true;

}
//triggers
rock_div.addEventListener("click", ()=> {game("r", userScore, compScore);});
paper_div.addEventListener("click", ()=> {game("p", userScore, compScore);});
scissor_div.addEventListener("click", ()=> {game("s", userScore, compScore);});
lizard_div.addEventListener("click", ()=> {game("l", userScore, compScore);});
spock_div.addEventListener("click", ()=> {game("k", userScore, compScore);});
reset_div.addEventListener("click", ()=> {reset(userScore, compScore);});