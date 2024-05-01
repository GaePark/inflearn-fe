const quiz = document.getElementById("Quiz");
const answer = document.getElementById("answer");
let i = 0;

const quizItem = [
  {
    Q: "5 + 10",
    text1: 20,
    text2: 15,
    text3: 5,
    text4: 30,
    answer: "15",
  },
  {
    Q: "1+2",
    text1: 3,
    text2: 4,
    text3: 1,
    text4: 20,
    answer: "3",
  },
  {
    Q: "26+14",
    text1: 30,
    text2: 25,
    text3: 84,
    text4: 40,
    answer: "40",
  },
];

const renderQuiz = () => {
  quiz.innerText = quizItem[i].Q;
  createQuiz();
};

const createQuiz = () => {
  const text1 = document.createElement("div");
  text1.className = "text";
  text1.innerText = quizItem[i].text1;
  console.log(quizItem[i].text1);

  const text2 = document.createElement("div");
  text2.className = "text";
  text2.innerText = quizItem[i].text2;

  const text3 = document.createElement("div");
  text3.className = "text";
  text3.innerText = quizItem[i].text3;

  const text4 = document.createElement("div");
  text4.className = "text";
  text4.innerText = quizItem[i].text4;

  const check = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === quizItem[i].answer) {
      alert("정답입니다!");
      onClickNext();
    } else {
      alert("틀렸습니다!");
    }
  };

  text1.addEventListener("click", (e) => {
    check(e);
  });

  text2.addEventListener("click", (e) => {
    check(e);
  });

  text3.addEventListener("click", (e) => {
    check(e);
  });

  text4.addEventListener("click", (e) => {
    check(e);
  });

  answer.append(text1);
  answer.append(text2);
  answer.append(text3);
  answer.append(text4);
};

renderQuiz();

const onClickNext = () => {
  if (i < quizItem.length - 1) {
    i = i + 1;
    answer.innerHTML = "";
    renderQuiz();
  } else {
    alert("문제가 없습니다!");
  }
};

const onClickPrev = () => {
  if (i === 0) return;
  i--;
  answer.innerHTML = "";
  renderQuiz();
};
