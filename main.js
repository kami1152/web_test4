// 랜덤 번호 지정
// 유저가  번호를 입력한다. 그리고 .go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down
// 랜덤번호가 > 유저번호 up
// reset버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.

let randomNumber = 0;
let inputNum = document.getElementById("inputNumber");
let startBtn = document.getElementById("startButton");
let result = document.getElementById("result");
let resetBtn = document.getElementById("resetButton");
let chanceArea = document.getElementById("chance");
let chance = 5;
let gameEnd = false;
let inputNumList = [];
let change = document.getElementById("changeImg");

startBtn.style.cursor="pointer";

// 랜덤 번호 지정.
function computerNum(){
    randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
}
// 버튼
startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);

// 마우스로 입력창을 클릭할때 입력되어 있는 값을 리셋
inputNum.addEventListener("focus", function(){
    inputNum.value="";
})

// startbutton을 눌렀을 때 반응
function start(){
    let inputNumValue = inputNum.value;

    if(inputNumValue > 100 || inputNumValue < 1){
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
        change.src="Images/up.gif"
        result.textContent = "UP!!";
        
    } else if(inputNumValue > randomNumber){
        result.textContent = "DOWN!!";
        change.src="Images/down.gif"
    } else {
        result.textContent = "정답입니다!!!";
        change.src="Images/ok.gif"
        gameEnd=true;
    }

    inputNumList.push(inputNumValue);
    
    if(chance==0){
        gameEnd = true;
    }

    if(gameEnd==true){
        startBtn.disabled= true;
        startBtn.style.backgroundColor="rgba(75, 87, 255, 0.4)";
        startBtn.style.cursor = "default";
    }
};

// 리셋버튼 함수
function reset(){
    inputNumValue="";
    computerNum();
    gameEnd = false;
    chance = 5;
    startBtn.disabled =false;
    chanceArea.textContent =`남은 기회 : ${chance}`;
    inputNumList = [];
    change.src="Images/go!.gif"
};
// 함수를 실행하는 것.
computerNum();