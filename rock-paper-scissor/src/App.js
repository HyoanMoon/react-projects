import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import Score from "./component/Score";

// 1. 박스 2개 (박스 타이틀,  사진 정보, 결과 값, )
// 2. 입력 버튼 3개
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 테두리 색을 값에 따라 변경 (이기면 초록 지면 빨강 비기면 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1zCEubaQ3TaLKC43mfRtYB2KoZmzqhgIzoe8vCnCbxTNYuRSsEOOqeitC0c3S8xrtoA&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://thumb17.iclickart.co.kr/Thumb17/16930000/16922273.jpg",
  },
  scissor: {
    name: "Scissor",
    img: "https://thumb17.iclickart.co.kr/Thumb17/16930000/16922271.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = getRandomChoice();
    setComputerSelect(computerChoice);

    const gameResult = judgement(choice[userChoice], computerChoice);
    setResult(gameResult); // 게임 결과 설정 (WIN, LOSE, TIE)

    // 게임 결과에 따라 점수 업데이트
    if (gameResult === "WIN") {
      setUserScore((prevScore) => prevScore + 1); // 사용자가 이기면 점수 증가
    } else if (gameResult === "LOSE") {
      setComputerScore((prevScore) => prevScore + 1); // 컴퓨터가 이기면 점수 증가
    }
    console.log("userScore", userScore);
    console.log("computerScore", computerScore)
  };

  const getRandomChoice = () => {
    let choices = Object.keys(choice); // ["rock", "paper", "scissor"] 객체에 키 값만 뽑아서 array로 만들어 주는 함수
    let randomIndex = Math.floor(Math.random() * choices.length); // 0, 1, 2 중 하나의 랜덤 인덱스
    // return choice[choices[randomIndex]]; // choice[choices[1]] = choice["paper"]
    let final = choices[randomIndex];
    return choice[final]; // 이 값이 리턴이 되면서 computerChoice 안으로 쏙 들어간다!
  };

  const judgement = (user, computer) => {
    // 결과 경우의 수
    // user가 이길 때 <-> 컴퓨터가 질 때
    // 1. if user가 rock을 내고 computer가 scissor면
    // 2. if user가 paper 내고 computer가 rock을 내면
    // 3. if user가 scissor 내고 computer가 paper 내면

    // user가 질 때 <-> 컴퓨처가 이길 때
    // 1. if user가 rock을 내고 computer가 paper 내면
    // 2. if user가 paper 내고 computer가 scissor면
    // 3. if user가 scissor 내고 computer가 rock을 내면

    // 비길 때
    // user == computer

    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "Rock")
      return computer.name === "Scissor" ? "WIN" : "LOSE";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "WIN" : "LOSE";
    else if (user.name === "Scissor")
      return computer.name === "Paper" ? "WIN" : "LOSE";
  };

  return (
    <div className="container">
      <div className="score-main">
      <Score userScore={userScore} computerScore={computerScore} />
      <button className="resetBtn" onClick={() => { setUserScore(0); setComputerScore(0); }}>
          Reset
        </button>
      </div>

      <div className="main-middle">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main-bottom">
        <button className="button" onClick={() => play("rock")}>
          <img
            src={choice.rock.img}
            alt="Rock"
          />
        </button>
        {/* onClick 함수 호출이 아닌 콜백 함수를 써야 한다!!*/}
        <button className="button" onClick={() => play("paper")}>
          <img
            src={choice.paper.img}
            alt="Paper"
          />
        </button>
        <button className="button" onClick={() => play("scissor")}>
          <img
            src={choice.scissor.img}
            alt="Scissor"
            
          />
        </button>
      </div>
    </div>
  );
}

export default App;
