import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
  };
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" />
      </div>
      <div className="main">
        <button onClick={() => play("rock")}>Rock</button>{" "}
        {/* onClick 함수 호출이 아닌 콜백 함수를 써야 한다!!*/}
        <button onClick={() => play("paper")}>Paper</button>
        <button onClick={() => play("scissor")}>Scissor</button>
      </div>
    </div>
  );
}

export default App;
