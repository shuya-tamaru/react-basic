import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCoountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShoowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">yeah</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCoountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShoowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </>
  );
};

export default App;
