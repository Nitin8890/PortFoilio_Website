import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function App() {
  const [text] = useTypewriter({
    words: ["Design!", "Develop!", "Deploye!", "Game :)"],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <h1 className="text-4xl text-black" >
      i <span className="font-extrabold text-tt" id="typing">{text}</span>
      <span className="text-amber-900">
        <Cursor />
      </span>
    </h1>
  );
}

export default App;
