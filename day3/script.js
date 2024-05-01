const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
let ps = 0;
let cs = 0;

const rNumber = document.querySelector(".remaining-number");
let num = 10;

const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");

const result = document.querySelector(".result");
const chose = document.querySelector(".chose");

let com;

rNumber.innerText = num;

const randomNum = () => {
  com = Math.ceil(Math.random() * 3);
};

const onClickPaper = () => {
  if (num === 0) return;
  randomNum();
  console.log(com);
  if (com === 1) {
    result.innerText = "졌습니다.";
    cs++;
    cScore.innerText = cs;
  } else if (com === 2) {
    result.innerText = "이겼습니다.";
    ps++;
    pScore.innerText = ps;
  } else {
    result.innerText = "비겼습니다.";
  }
  num--;
  rNumber.innerText = num;
  if (num === 0) {
    rePlay();
  }
};

const onClickScissors = () => {
  if (num === 0) return;
  randomNum();
  if (com === 1) {
    result.innerText = "비겼습니다.";
  } else if (com == 2) {
    result.innerText = "졌습니니다.";
    cs++;
    cScore.innerText = cs;
  } else {
    result.innerText = "이겼습니다.";
    ps++;
    pScore.innerText = ps;
  }
  num--;
  rNumber.innerText = num;
  if (num === 0) {
    rePlay();
  }
};

const onClickRock = () => {
  randomNum();
  console.log(com);

  if (com === 1) {
    result.innerText = "이겼습니다.";
    ps++;
    pScore.innerText = ps;
  } else if (com === 2) {
    result.innerText = "비겼습니다.";
  } else {
    result.innerText = "졌습니니다.";
    cs++;
    cScore.innerText = cs;
  }
  num--;
  rNumber.innerText = num;

  if (num === 0) {
    rePlay();
  }
};

const rePlay = () => {
  result.innerText = "";
  chose.innerHTML = "";
  const resultText = document.createElement("h1");

  if (cs > ps) {
    resultText.innerText = "게임에서 졌습니다.";
  } else if (cs === ps) {
    resultText.innerText = "게임에서 비겼습니다.";
  } else {
    resultText.innerText = "게임에서 이겼습니다.";
  }

  const rePlaybtn = document.createElement("button");
  rePlaybtn.innerText = "다시하기";
  rePlaybtn.addEventListener("click", () => {
    location.reload();
  });

  chose.append(resultText);
  chose.append(rePlaybtn);
};
