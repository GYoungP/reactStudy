import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test1 from "./Test1";
import SignUp from "./SignUp";

const boardsTemp = [
  {
    idx: 1,
    writer: "글쓴이",
    title: "안녕하세요",
  },
  {
    idx: 2,
    writer: "글쓴이2",
    title: "안녕하세요2",
  },
  {
    idx: 3,
    writer: "글쓴이3",
    title: "안녕하세요3",
  },
];
function App() {
  const [cnt, setCnt] = useState(0);
  const [name, setName] = useState("");
  const [boards, setBoards] = useState(boardsTemp);
  const [modal, setModal] = useState(false);

  const chgName = (e) => {
    setName(e.target.value);
  };
  const addBoard = () => {
    const newBoard = { idx: 4, writer: "새글쓴이", title: "아녕하세요111" };
    setBoards(boards.concat(newBoard));
  };
  const deleteBoard = (a) => {
    setBoards(boards.filter((board, idx) => board.idx !== a));
  };

  return (
    <div className="App">
      <Test1 />
      <SignUp />
      <button onClick={() => setModal(!modal)}>모달 생성</button>
      {modal && <div>모달화면</div>}
    </div>
  );
}

export default App;
