import "./index.less";
import { useRef, useEffect } from "react";
const FeiChuang = () => {
  const hRef = useRef(null);
  const b = useRef(null);

  useEffect(() => {
    const h = hRef.current;
    const b = document.body;

    const moveFunc = (e) => {
      const x = e.pageX / window.innerWidth - 0.5;
      const y = e.pageY / window.innerHeight - 0.5;

      if (h) {
        h.style.transform = `
          perspective(300vmin)
          rotateX(${y * 30 + 60}deg)
          rotateZ(${-x * 420 + 30}deg)
          translateZ(-8vmin)
        `;
      }
    };

    const mouseDownFunc = () => b.addEventListener("pointermove", moveFunc);
    const mouseUpFunc = () => b.removeEventListener("pointermove", moveFunc);

    h.addEventListener("pointerdown", mouseDownFunc);
    b.addEventListener("pointerup", mouseUpFunc);

    // Cleanup function
    return () => {
      h.removeEventListener("pointerdown", mouseDownFunc);
      b.removeEventListener("pointerup", mouseUpFunc);
    };
  }, []);
  return (
    <>
      <div className="feichuang1" ref={b}>
        <div className="main" ref={hRef}>
          <div className="shadows">
            <div className="shadow-5 shadow"></div>
            <div className="shadow-4 shadow"></div>
            <div className="shadow-1 shadow"></div>
            <div className="shadow-2 shadow"></div>
            <div className="shadow-3 shadow"></div>
            <div className="light-1 shadow"></div>
            <div className="light-2 shadow"></div>
            <div className="light-3 shadow"></div>
            <div className="light-4 shadow"></div>
          </div>
          <div className="wrapper-c1">
            <div className="wrapper-c2">
              <div className="wrapper-a">
                <div className="a">
                  <div className="a__front face flex">
                    <div className="turbo">
                      <div className="circle flex">
                        <div className="circle-a">
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__bottom"></div>
                          <div className="circle-a__top"></div>
                        </div>
                      </div>
                      <div className="circle flex">
                        <div className="circle-b">
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__bottom"></div>
                          <div className="circle-b__top"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="a__back face flex">
                    <div className="turbo-back">
                      <div className="turbo-back__item"></div>
                      <div className="turbo-back__item"></div>
                      <div className="turbo-back__item"></div>
                      <div className="turbo-back__item"></div>
                    </div>
                    <div className="wave-1 wave"></div>
                    <div className="wave-2 wave"></div>
                    <div className="wave-3 wave"></div>
                    <div className="wave-4 wave"></div>
                    <div className="wave-5 wave"></div>
                  </div>
                  <div className="a__right face"></div>
                  <div className="a__left face"></div>
                  <div className="a__top face">
                    <div className="a__top-shadow face"></div>
                    <div className="a__top-neon face"></div>
                  </div>
                  <div className="a__bottom face"></div>
                </div>
                <div className="a">
                  <div className="a__front face flex">
                    <div className="turbo">
                      <div className="circle flex">
                        <div className="circle-a">
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__side"></div>
                          <div className="circle-a__bottom"></div>
                          <div className="circle-a__top"></div>
                        </div>
                      </div>
                      <div className="circle flex">
                        <div className="circle-b">
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__side"></div>
                          <div className="circle-b__bottom"></div>
                          <div className="circle-b__top"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="a__back face flex">
                    <div className="turbo-back">
                      <div className="turbo-back__item"></div>
                      <div className="turbo-back__item"></div>
                      <div className="turbo-back__item"></div>
                      <div className="turbo-back__item"></div>
                    </div>
                    <div className="wave-1 wave"></div>
                    <div className="wave-2 wave"></div>
                    <div className="wave-3 wave"></div>
                    <div className="wave-4 wave"></div>
                    <div className="wave-5 wave"></div>
                  </div>
                  <div className="a__right face"></div>
                  <div className="a__left face"></div>
                  <div className="a__top face">
                    <div className="a__top-shadow face"></div>
                    <div className="a__top-neon face"></div>
                  </div>
                  <div className="a__bottom face"></div>
                </div>
                <div className="wings">
                  <div className="wing">
                    <div className="wing__front face"></div>
                    <div className="wing__back face"></div>
                    <div className="wing__right face"></div>
                    <div className="wing__left face"></div>
                    <div className="wing__top face"></div>
                    <div className="wing__bottom face"></div>
                  </div>
                  <div className="wing">
                    <div className="wing__front face"></div>
                    <div className="wing__back face"></div>
                    <div className="wing__right face"></div>
                    <div className="wing__left face"></div>
                    <div className="wing__top face"></div>
                    <div className="wing__bottom face"></div>
                  </div>
                </div>
              </div>
              <div className="wrapper-b">
                <div className="b">
                  <div className="b__front face"></div>
                  <div className="b__back face"></div>
                  <div className="b__right face"></div>
                  <div className="b__left face"></div>
                  <div className="b__top face"></div>
                  <div className="b__bottom face"></div>
                </div>
                <div className="c">
                  <div className="c__front face">
                    <div className="c__front-l face"></div>
                  </div>
                  <div className="c__back face"></div>
                  <div className="c__right face"></div>
                  <div className="c__left face"></div>
                  <div className="c__top face"></div>
                  <div className="c__bottom face"></div>
                </div>
                <div className="d">
                  <div className="d__right face"></div>
                  <div className="d__left face"></div>
                  <div className="d__top face">
                    <div className="d__top-l face"></div>
                  </div>
                  <div className="d__bottom face"></div>
                </div>
                <div className="e">
                  <div className="e__front face">
                    <div className="e__front-i flex">
                      <div className="e__front-t flex">◠‿◠</div>
                    </div>
                  </div>
                  <div className="e__back face"></div>
                  <div className="e__right face"></div>
                  <div className="e__left face"></div>
                  <div className="e__bottom face"></div>
                </div>
                <div className="f">
                  <div className="f__front face">
                    <div className="f__front-i face"></div>
                  </div>
                  <div className="f__right face"></div>
                  <div className="f__left face"></div>
                  <div className="f__top face"></div>
                  <div className="f__bottom face"></div>
                </div>
                <div className="g">
                  <div className="g__front face"></div>
                  <div className="g__right face"></div>
                  <div className="g__left face"></div>
                  <div className="g__top face"></div>
                  <div className="g__bottom face"></div>
                </div>
                <div className="h">
                  <div className="h__front face"></div>
                  <div className="h__back face"></div>
                  <div className="h__right face"></div>
                  <div className="h__left face"></div>
                  <div className="h__top face"></div>
                  <div className="h__bottom face"></div>
                </div>
                <div className="i">
                  <div className="i__right face"></div>
                  <div className="i__left face"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeiChuang;
