import Profile from './components/Profile';
import { useState } from "react"; //state hook을 import
import ListComp from './components/ListComp';
import Header from './components/Header';

function App() {

  let username = "미입력";
  let [usernameWithState, setUsernameWithState] = useState("초기값");
  //[a,b] -> [데이터를 불러올 변수, a데이터를 바꿀 수 있는 메소드가 숨어있는? 상태]

  const handleInputChange = (e) => {
    //console.log(e.target.value); //입력될 데이터
    //username = e.target.value;   //받아온 값을 username에 넣어줌
    setUsernameWithState(e.target.value);
    console.log(username);
  };

  return (
    <div>
      <Header title="settings" />
      <br></br>
      <div>입력: <input onChange={handleInputChange}></input></div>
      {/* 주석 처리: ctrl+/ */}
      {/* <Profile username="윤주" grade="4"></Profile>  */}
      <h4>{usernameWithState}</h4>
      <ListComp></ListComp>
    </div>
  );

}

export default App;