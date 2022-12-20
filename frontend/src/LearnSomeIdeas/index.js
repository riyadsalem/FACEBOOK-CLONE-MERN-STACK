import { useState } from "react";
import { LearnSomeIdeasClass, LearnSomeIdeasFunction } from "./LearnSomeIdeas";

export default function LearnSomeIdeas() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <>
          <LearnSomeIdeasClass email="riyad.m.salem.19988@gmail.com" />
          <LearnSomeIdeasFunction email="riyad.m.salem.19988@gmail.com" />
        </>
      )}
      <br />
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </>
  );
}
