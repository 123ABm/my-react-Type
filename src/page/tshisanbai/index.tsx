import "./index.less";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Tshisanbai = () => {
  const divRef = useRef(null);
  const [userInput, setUserInput] = useState("");
  const [gushi, setGushi] = useState({});
  const [spokenChars, setSpokenChars] = useState(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [keyCount, setKeyCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [typedChars, setTypedChars] = useState(0);
  const [progressChars, setProgressChars] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
    const newGushi = {
      title: [
        { char: "相", pinyin: "xiāng" },
        { char: "思", pinyin: "sī" },
      ],
      author: [
        { char: "王", pinyin: "wáng" },
        { char: "维", pinyin: "wéi" },
      ],
      content: [
        [
          { char: "红", pinyin: "hóng" },
          { char: "豆", pinyin: "dòu" },
          { char: "生", pinyin: "shēng" },
          { char: "南", pinyin: "nán" },
          { char: "国", pinyin: "guó" },
          { char: "↵", pinyin: "↵" },
        ],
        [
          { char: "春", pinyin: "chūn" },
          { char: "来", pinyin: "lái" },
          { char: "发", pinyin: "fā" },
          { char: "几", pinyin: "jǐ" },
          { char: "枝", pinyin: "zhī" },
          { char: "↵", pinyin: "↵" },
        ],
        [
          { char: "愿", pinyin: "yuàn" },
          { char: "君", pinyin: "jūn" },
          { char: "多", pinyin: "duō" },
          { char: "采", pinyin: "cǎi" },
          { char: "撷", pinyin: "xié" },
          { char: "↵", pinyin: "↵" },
        ],
        [
          { char: "此", pinyin: "cǐ" },
          { char: "物", pinyin: "wù" },
          { char: "最", pinyin: "zuì" },
          { char: "相", pinyin: "xiāng" },
          { char: "思", pinyin: "sī" },
          { char: "↵", pinyin: "↵" },
        ],
      ],
    };
    setGushi(newGushi);
  }, []);

  const removeTone = (pinyin) => {
    if (!pinyin) return "";
    return pinyin.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    if (key.length === 1 && /^[a-zA-Z]$/.test(key)) {
      const newInput = userInput + key;
      setUserInput(newInput);
      console.log(newInput);
    } else if (key === "Enter") {
      const newInput = userInput + "↵";
      setUserInput(newInput);
      console.log(newInput);
    } else if (key === "Backspace") {
      const newInput = userInput.slice(0, -1);
      setUserInput(newInput);
      console.log(newInput);

      // 更新 spokenChars 集合，移除不再匹配的字符
      const updatedSpokenChars = new Set();
      let currentIndex = 0;
      const updateSpokenChars = (items, context) => {
        items.forEach((item, index) => {
          const pinyinLength = item.pinyin.length;
          const charContext = `${item.char}-${context}-${index}`;
          if (currentIndex + pinyinLength <= newInput.length) {
            updatedSpokenChars.add(charContext);
          }
          currentIndex += pinyinLength;
        });
      };

      updateSpokenChars(gushi.title || [], 'title');
      updateSpokenChars(gushi.author || [], 'author');
      gushi.content?.forEach((line, lineIndex) => {
        updateSpokenChars(line, `content-${lineIndex}`);
      });

      setSpokenChars(updatedSpokenChars);
    }

    // 记录按键次数和开始时间
    setKeyCount((prev) => prev + 1);
    if (!startTime) {
      setStartTime(Date.now());
    }
  };

  const speakChar = (char) => {
    const utterance = new SpeechSynthesisUtterance(char);
    utterance.lang = "zh-CN";
    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const checkAndSpeak = (items, startIndexOffset = 0, context) => {
      let startIndex = startIndexOffset;
      items.forEach((item, index) => {
        const currentPinyin = item.pinyin;
        const endIndex = startIndex + currentPinyin.length;

        // 使用上下文和索引作为唯一标识符
        const charContext = `${item.char}-${context}-${index}`;

        const isWholeCorrect = currentPinyin.split("").every((letter, letterIndex) => {
          const inputIndex = startIndex + letterIndex;
          return inputIndex < userInput.length && removeTone(letter) === removeTone(userInput[inputIndex]);
        });

        const isColored = currentPinyin.split("").some((letter, letterIndex) => {
          const inputIndex = startIndex + letterIndex;
          return inputIndex < userInput.length;
        });

        if (!spokenChars.has(charContext) && endIndex <= userInput.length) {
          if (isColored) {
            setProgressChars((prev) => prev + 1);
            setTypedChars((prev) => prev + 1);
          }
          if (isWholeCorrect) {
            setCorrectCount((prev) => prev + 1);
            speakChar(item.char);
          }
          setSpokenChars((prev) => new Set(prev).add(charContext));
        }

        startIndex = endIndex;
      });
    };

    const titleLength = gushi.title ? gushi.title.reduce((acc, cur) => acc + cur.pinyin.length, 0) : 0;
    const authorLength = gushi.author ? gushi.author.reduce((acc, cur) => acc + cur.pinyin.length, 0) : 0;

    checkAndSpeak(gushi.title || [], 0, 'title');
    checkAndSpeak(gushi.author || [], titleLength, 'author');
    gushi.content?.forEach((line, lineIndex) => {
      checkAndSpeak(line, titleLength + authorLength + gushi.content.slice(0, lineIndex).reduce((acc, line) => acc + line.reduce((acc, cur) => acc + cur.pinyin.length, 0), 0), `content-${lineIndex}`);
    });
  }, [userInput, gushi]);

  const totalChars = gushi.title?.length + gushi.author?.length + gushi.content?.reduce((acc, line) => acc + line.length, 0) || 0;
  const accuracy = totalChars > 0 ? Math.round((correctCount / totalChars) * 100) : 0;

  // 计算打字速度
  const elapsedTime = (Date.now() - startTime) / 60000; // 转换为分钟
  const typingSpeed = startTime ? Math.round(typedChars / elapsedTime) : 0;

  // 计算进度
  const progress = Math.min(100, Math.round((progressChars / totalChars) * 100));

  const handleRestart = () => {
    window.location.reload();
  };

  const handleBack = () => {
    navigate('/Souye');
  };

  return (
    <div className="totals">
      <div
        className="tshisanbai"
        onKeyDown={handleKeyPress}
        tabIndex={0}
        ref={divRef}
      >
        <div className="navgator">
          <div className="left">
            <div onClick={handleRestart} className="navitem1">
              <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6381" width="25" height="25"><path d="M362.666667 938.666667c0-17.066667-8.533333-32-23.466667-38.4C189.866667 834.133333 85.333333 684.8 85.333333 512S189.866667 189.866667 339.2 123.733333C354.133333 115.2 362.666667 100.266667 362.666667 85.333333v-2.133333c0-32-32-51.2-59.733334-38.4C123.733333 125.866667 0 305.066667 0 512s123.733333 386.133333 302.933333 467.2c27.733333 12.8 59.733333-8.533333 59.733334-40.533333z" p-id="6382" fill="#7f8596"></path><path d="M467.2 985.6l-102.4-179.2c-10.666667-17.066667-34.133333-17.066667-44.8 0l-102.4 179.2c-10.666667 17.066667 2.133333 38.4 21.333333 38.4h206.933334c19.2 0 32-21.333333 21.333333-38.4zM661.333333 85.333333c0 17.066667 8.533333 32 23.466667 38.4C834.133333 189.866667 938.666667 339.2 938.666667 512s-104.533333 322.133333-253.866667 388.266667c-14.933333 6.4-23.466667 21.333333-23.466667 38.4v2.133333c0 32 32 51.2 59.733334 38.4C900.266667 898.133333 1024 718.933333 1024 512S900.266667 125.866667 721.066667 44.8C693.333333 32 661.333333 53.333333 661.333333 85.333333z" p-id="6383" fill="#7f8596"></path><path d="M556.8 38.4l102.4 179.2c10.666667 17.066667 34.133333 17.066667 44.8 0l102.4-179.2c10.666667-17.066667-2.133333-38.4-21.333333-38.4h-206.933334c-19.2 0-32 21.333333-21.333333 38.4z" p-id="6384" fill="#7f8596"></path></svg>
              <span>重打</span>
            </div>
            <div  className="navitem2">
              <svg t="1735633353934" className="icon" viewBox="0 0 1114 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8250" width="25" height="25"><path d="M1080.991796 394.739229l-162.539683-278.639456c-41.795918-71.981859-118.421769-116.099773-199.69161-116.099773H393.681138c-81.269841 0-160.217687 44.117914-199.69161 116.099773l-162.539683 278.639456c-41.795918 71.981859-41.795918 162.539683 0 234.521542l162.539683 278.639456c41.795918 71.981859 118.421769 116.099773 199.69161 116.099773h325.079365c81.269841 0 160.217687-44.117914 199.69161-116.099773l162.539683-278.639456c41.795918-74.303855 41.795918-162.539683 0-234.521542z m-78.947846 185.759637l-162.539683 278.639456c-25.54195 41.795918-71.981859 69.659864-120.743764 69.659864H393.681138c-48.761905 0-95.201814-25.54195-120.743764-69.659864l-162.539683-278.639456c-25.54195-44.117914-25.54195-97.52381 0-139.319728l162.539683-278.639455c25.54195-41.795918 71.981859-69.659864 120.743764-69.659864h325.079365c48.761905 0 95.201814 25.54195 120.743764 69.659864l162.539683 278.639455c25.54195 41.795918 25.54195 97.52381 0 139.319728z" fill="#7f8596" p-id="8251"></path><path d="M556.22082 301.85941c-116.099773 0-208.979592 92.879819-208.979591 208.979592s92.879819 208.979592 208.979591 208.979592 208.979592-92.879819 208.979592-208.979592-92.879819-208.979592-208.979592-208.979592z m0 325.079366c-65.015873 0-116.099773-51.0839-116.099773-116.099774s51.0839-116.099773 116.099773-116.099773 116.099773 51.0839 116.099774 116.099773-51.0839 116.099773-116.099774 116.099774z" fill="#7f8596" p-id="8252"></path></svg>
              <span>跟读已开启</span>
            </div>
            <div className="navitem3">
              <svg t="1735633511804" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9386" width="25" height="25"><path d="M896 267.008v535.552c0 81.28-65.792 157.44-149.888 157.44H463.68c-41.28 0-79.488-25.536-108.032-53.632 0 0-189.76-281.28-213.824-322.432C99.584 512 162.496 466.688 218.112 504.32c6.848 4.672 104.96 116.288 104.96 116.288v-408.96c0-19.84 10.88-38.08 28.608-48a58.944 58.944 0 0 1 57.28 0 55.04 55.04 0 0 1 28.608 48v239.296a19.2 19.2 0 0 0 38.4 0V119.36c0-30.592 25.6-55.36 57.216-55.36s57.28 24.768 57.28 55.36v331.712a19.136 19.136 0 1 0 38.208 0V156.224c0-19.776 10.88-38.016 28.608-47.936a58.944 58.944 0 0 1 57.216 0 55.04 55.04 0 0 1 28.672 48v294.784a19.136 19.136 0 0 0 38.208 0V267.008c0-30.592 25.6-55.296 57.344-55.296s57.28 24.704 57.28 55.296z" fill="#7f8596" p-id="9387"></path></svg>
              <span>指法示意已关闭</span>
            </div>
          </div>
          <div className="center">
            <span>《相思》唐·王维</span>
          </div>
          <div className="right">
            <div className="navitem4">
              <svg t="1735634095259" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10503" width="25" height="25"><path d="M512 486.4a243.2 243.2 0 1 0-243.2-243.2A243.712 243.712 0 0 0 512 486.4zM512 51.2a192 192 0 1 1-192 192A192 192 0 0 1 512 51.2zM512 588.8a409.6 409.6 0 0 0-409.6 409.6v25.6h819.2v-25.6a409.6 409.6 0 0 0-409.6-409.6zM153.6 972.8a358.4 358.4 0 0 1 716.8 0z" p-id="10504" fill="#7f8596"></path></svg>
              <span>我的</span>
            </div>
            <div className="navitem5">
              <svg t="1735634153401" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11594" width="25" height="25"><path d="M511.449009 213.858462a179.278769 179.278769 0 1 1 0 358.557538 179.278769 179.278769 0 0 1 0-358.557538z m393.294769 179.357538A393.294769 393.294769 0 1 0 182.036086 608.098462l294.203077 392.270769a39.384615 39.384615 0 0 0 70.498462 0l294.754461-392.270769c39.699692-61.912615 63.251692-135.483077 63.251692-214.882462z" fill="#7f8596" p-id="11595"></path></svg>
              <span>导航</span>
            </div>
            <div className="navitem6">
              <svg t="1735634200749" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12709" width="25" height="25"><path d="M512 80c238.588 0 432 193.412 432 432s-193.412 432-432 432S80 750.588 80 512 273.412 80 512 80z m0 64c-203.24 0-368 164.76-368 368s164.76 368 368 368 368-164.76 368-368-164.76-368-368-368z" fill="#7f8596" p-id="12710"></path><path d="M549.84 630.16v-12.24c0-17.28 3.6-33.12 11.52-47.52 6.48-12.96 16.56-25.92 30.24-37.44 33.84-29.52 54-48.24 60.48-56.16 18-23.04 27.36-52.56 27.36-87.84 0-43.2-14.4-77.76-43.2-102.96-28.8-25.92-66.24-38.16-112.32-38.16-53.28 0-95.04 15.12-125.28 46.08-30.24 30.24-45.36 71.28-45.36 123.84h75.6c0-31.68 6.48-56.16 19.44-73.44 14.4-20.88 38.16-30.96 70.56-30.96 25.92 0 46.8 7.2 61.2 21.6 13.68 14.4 20.88 33.84 20.88 59.04 0 18.72-7.2 36-20.16 52.56l-12.24 13.68c-44.64 39.6-72 69.12-81.36 89.28-10.08 18.72-14.4 41.76-14.4 68.4v12.24h77.04zM510.96 772c14.4 0 27.36-5.04 37.44-14.4 10.08-10.08 15.84-22.32 15.84-37.44 0-15.12-5.04-27.36-15.12-36.72-10.08-10.08-23.04-14.4-38.16-14.4-14.4 0-27.36 4.32-37.44 14.4-10.08 9.36-15.12 21.6-15.12 36.72 0 14.4 5.04 26.64 15.12 36.72 10.08 10.08 23.04 15.12 37.44 15.12z" fill="#7f8596" p-id="12711"></path></svg>
              <span>帮助</span>
            </div>
            <div onClick={handleBack} className="navitem7">
              <svg t="1735800495118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5558" width="25" height="25"><path d="M341.333333 298.666667v170.666666L85.333333 256l256-213.333333v170.666666h213.333334a341.333333 341.333333 0 1 1 0 682.666667H170.666667v-85.333333h384a256 256 0 0 0 0-512H341.333333z" fill="#7f8596" p-id="5559"></path></svg>
              <span>返回</span>
            </div>
          </div>
        </div>
        <div className="gsnr">
          <div className="title">
            {gushi.title?.map((item, index) => {
              const currentPinyin = item.pinyin;
              const startIndex = gushi.title.slice(0, index).reduce((acc, cur) => acc + cur.pinyin.length, 0);
              const endIndex = startIndex + currentPinyin.length;
              
              const isWholeCorrect = currentPinyin.split("").every((letter, letterIndex) => {
                const inputIndex = startIndex + letterIndex;
                return inputIndex < userInput.length && removeTone(letter) === removeTone(userInput[inputIndex]);
              });

              const isWholeIncorrect = !isWholeCorrect && userInput.length >= endIndex;

              return (
                <div key={index} className={`hanzi ${isWholeCorrect ? "whole-correct" : isWholeIncorrect ? "whole-incorrect" : ""}`}>
                
                  <div className="pinyin">
                  {currentPinyin.split("").map((letter, letterIndex) => {
                    const inputIndex = startIndex + letterIndex;
                    const isCorrect = inputIndex < userInput.length && removeTone(letter) === removeTone(userInput[inputIndex]);
                    const isWrong = inputIndex < userInput.length && removeTone(letter) !== removeTone(userInput[inputIndex]);
                    return (
                      <span key={letterIndex} className={`
                        ${isCorrect ? "correct" : ""}
                        ${isWrong ? "incorrect" : ""}
                      `} style={{ color: isCorrect ? 'green' : isWrong ? 'red' : '' }}>
                        {letter}
                      </span>
                    );
                  })}
                  </div>
                    {item.char}
                </div>
              );
            })}
          </div>
          <div className="author">
            {gushi.author?.map((item, index) => {
              const currentPinyin = item.pinyin;
              const startIndex = gushi.title.reduce((acc, cur) => acc + cur.pinyin.length, 0) +
                                 gushi.author.slice(0, index).reduce((acc, cur) => acc + cur.pinyin.length, 0);
              const endIndex = startIndex + currentPinyin.length;
              
              const isWholeCorrect = currentPinyin.split("").every((letter, letterIndex) => {
                const inputIndex = startIndex + letterIndex;
                return inputIndex < userInput.length && removeTone(letter) === removeTone(userInput[inputIndex]);
              });

              const isWholeIncorrect = !isWholeCorrect && userInput.length >= endIndex;

              return (
                <div key={index} className={`hanzi ${isWholeCorrect ? "whole-correct" : isWholeIncorrect ? "whole-incorrect" : ""}`}>
                 <div className="pinyin">
                  {currentPinyin.split("").map((letter, letterIndex) => {
                    const inputIndex = startIndex + letterIndex;
                    const isCorrect = inputIndex < userInput.length && removeTone(letter) === removeTone(userInput[inputIndex]);
                    const isWrong = inputIndex < userInput.length && removeTone(letter) !== removeTone(userInput[inputIndex]);
                    return (
                      <span key={letterIndex} className={`pinyin
                        ${isCorrect ? "correct" : ""}
                        ${isWrong ? "incorrect" : ""}
                      `} style={{ color: isCorrect ? 'green' : isWrong ? 'red' : '' }}>
                        {letter}
                      </span>
                    );
                  })}
                  </div>
                    {item.char}
                </div>
              );
            })}
          </div>
          <div className="content">
            {gushi.content?.map((line, lineIndex) => (
              <div className="juzi" key={lineIndex}>
                {line.map((item, index) => {
                  const currentPinyin = item.pinyin;
                  const startIndex = gushi.title.reduce((acc, cur) => acc + cur.pinyin.length, 0) +
                                     gushi.author.reduce((acc, cur) => acc + cur.pinyin.length, 0) +
                                     gushi.content.slice(0, lineIndex).reduce((acc, line) => acc + line.reduce((acc, cur) => acc + cur.pinyin.length, 0), 0) +
                                     line.slice(0, index).reduce((acc, cur) => acc + cur.pinyin.length, 0);
                  const endIndex = startIndex + currentPinyin.length;
                  
                  const isWholeCorrect = currentPinyin.split("").every((letter, letterIndex) => {
                    const inputIndex = startIndex + letterIndex;
                    return inputIndex < userInput.length && removeTone(letter) === removeTone(userInput[inputIndex]);
                  });

                  const isWholeIncorrect = !isWholeCorrect && userInput.length >= endIndex;

                  return (
                    <div key={index} className={`hanzi ${isWholeCorrect ? "whole-correct" : isWholeIncorrect ? "whole-incorrect" : ""}`}>
                     <div className="pinyin">
                      {currentPinyin.split("").map((letter, letterIndex) => {
                        const inputIndex = startIndex + letterIndex;
                        const isCorrect = inputIndex < userInput.length && removeTone(letter) === removeTone(userInput[inputIndex]);
                        const isWrong = inputIndex < userInput.length && removeTone(letter) !== removeTone(userInput[inputIndex]);
                        return (
                          <span key={letterIndex} className={`
                            ${isCorrect ? "correct" : ""}
                            ${isWrong ? "incorrect" : ""}
                          `} style={{ color: isCorrect ? 'green' : isWrong ? 'red' : '' }}>
                            {letter}
                          </span>
                        );
                      })}
                      </div>
                       {item.char}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="footer">
              <span className="accuracy">准确率: {accuracy}%</span>
              <span className="typing-speed">打字速度: {typingSpeed} 字/分钟</span>
              <span className="progress2">进度: {progress}%</span>
            </div>
      </div>
    </div>
  );
};

export default Tshisanbai;
