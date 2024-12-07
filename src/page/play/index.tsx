import React, { useState } from "react";
import "./index.less";

const Play = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(0);

  const words = ["pollute", "example", "practice", "react", "typescript"];
  const currentWord = words[currentWordIndex];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === currentWord) {
      setProgress(progress + 1);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <div className="wordDisplay">
        {currentWord.split("").map((char, index) => (
          <span
            key={index}
            style={{
              color: inputValue[index] === char ? "green" : "red",
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input"
      />
      <div className="progressBar">
        <div
          className="progress"
          style={{ width: `${(progress / 10) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Play;
