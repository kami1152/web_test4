
let randomNumber = 0;
let inputNum = document.getElementById("inputNumber");
let startBtn = document.getElementById("startButton");
let result = document.getElementById("result");
let resetBtn = document.getElementById("resetButton");
let chanceArea = document.getElementById("chance");
let chance = 10;
let gameEnd = false;
let inputNumList = [];
let pp = false;
startBtn.style.cursor="pointer";

function computerNum(){
    randomNumber = Math.floor(Math.random()*1000)+1;
    console.log(randomNumber);
}

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);


inputNum.addEventListener("focus", function(){
    inputNum.value="";
})


function start(){
    let inputNumValue = inputNum.value;

    if(inputNumValue > 1000 || inputNumValue < 1){
        result.textContent = "1부터 100사이의 숫자만 입력해주세요."
        return;
    }

    if(inputNumList.includes(inputNumValue)){
        result.textContent = "이미 입력한 숫자입니다."
        return;
    }

    chance--;

    chanceArea.textContent =`남은 기회 : ${chance}`;

    if(inputNumValue < randomNumber){
        result.textContent = "UP!!";
        
    } else if(inputNumValue > randomNumber){
        result.textContent = "DOWN!!";
    } else {
        result.textContent = "정답입니다!!!";
        pp =true;
        gameEnd = true;
    }

    inputNumList.push(inputNumValue);
    
    if(chance==0){
        gameEnd = true;
    }

    if(gameEnd==true){
      
        startBtn.disabled= true;
        startBtn.style.backgroundColor="rgba(75, 87, 255, 0.4)";
        startBtn.style.cursor = "default";
        if(pp == true){
          result.textContent = "정답입니다!!!";
          pp=false;
        }else{
        result.textContent = "처음부터!!!";}
        reset();
    }
};


function reset(){
    inputNumValue="";
    computerNum();
    gameEnd = false;
    chance = 10;
    startBtn.disabled =false;
    chanceArea.textContent =`남은 기회 : ${chance}`;
    inputNumList = [];
};

computerNum();