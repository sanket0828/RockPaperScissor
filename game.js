let compChoice = '';
    let score = {
        win : 0,
        lose : 0,
        ties : 0
    };
    let result = '';

function computerChoice(userChoice, userNo){
    let randNo = Math.random();
    if(userNo === 0){
        if(randNo < 1/3){
            compChoice = 'Rock';
            result = 'Tie';
            score.ties += 1;

        }else if(randNo>=1/3 && randNo<2/3){
            compChoice = 'Paper';
            result = 'Lose';
            score.lose += 1;
        }else{
            compChoice = 'Scissor';
            result = 'Win';
            score.win += 1;
        }
    }else if(userNo === 1/3){
        if(randNo < 1/3){
            compChoice = 'Rock';
            result = 'Win';
            score.win += 1;

        }else if(randNo>=1/3 && randNo<2/3){
            compChoice = 'Paper';
            result = 'Tie';
            score.ties += 1;
        }else{
            compChoice = 'Scissor';
            result = 'Lose';
            score.lose += 1;
        }
    }else{
        if(randNo < 1/3){
            compChoice = 'Rock';
            result = 'Lose';
            score.lose += 1;

        }else if(randNo>=1/3 && randNo<2/3){
            compChoice = 'Paper';
            result = 'Win';
            score.win += 1;
        }else{
            compChoice = 'Scissor';
            result = 'Tie';
            score.ties += 1;
        }
    }
}

function displayScore(){
    let displayEle = document.querySelector('.p-score');
    displayEle.innerHTML = `Win : ${score.win} <br> Lose : ${score.lose} <br> Tie : ${score.ties}`;
}

function tempResult(userChoice){
    let resultEle = document.querySelector('.curResult');
    resultEle.innerHTML = `Your Choice : ${userChoice} <br> Computers Choice : ${compChoice} <br> Result : ${result}`;
    displayScore();
}

function resetScore(){
    score.lose = 0, score.win = 0, score.ties = 0;
    let displayEle = document.querySelector('.p-score');
    displayEle.innerHTML = `Score will be displayed here`;
    let resultEle = document.querySelector('.curResult');
    resultEle.innerHTML = 'Current Game Result will display here';
}