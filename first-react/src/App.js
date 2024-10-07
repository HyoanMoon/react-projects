import './App.css';
import { useState } from 'react'; 


function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0) // useState 함수를 통해서 state를 만든다. -> 함수의 매개변수를 넣어야 하는데 그게 초기 값 
  // 어레이를 반환하는데 값이 2가지가 있다. 1. 초기값이 담긴 state, state 값을 변경해주는 함수
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 +1)  // setCounter2() 함수를 이용해서 counter2 값을 바꿀 수 있음. And 비동기적 함수임!
    console.log("counter는", counter, "counter2 state는", counter2 )
  };

  //1. 유저가 버튼을 클릭한다. 
  //2. counter가 counter +1 해서 1이됨
  //3. setState 함수 호출
  //4. console.log가 실행됨 변수값은 1로 보이고 state값은 아직 안 변했기 때문에 그 전에 값이 보인다. (state값은 비동기적으로 처리된다. )
  //  함수 끝
  //  app이 re render
  //  let counter = 0을 거치면서 counter값은 0으로 다시 초기화가 된다
  //  업데이트된 state값이 보이면서 다시 render를 한다. 

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>state: {counter2} </div>
      <button onClick={increase}>Click!</button> 
    </div>
  );
}

export default App;
