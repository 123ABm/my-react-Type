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
            <div class="light-3 shadow"></div>
            <div class="light-4 shadow"></div>
          </div>
          <div class="wrapper-c1">
            <div class="wrapper-c2">
              <div class="wrapper-a">
                <div class="a">
                  <div class="a__front face flex">
                    <div class="turbo">
                      <div class="circle flex">
                        <div class="circle-a">
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__bottom"></div>
                          <div class="circle-a__top"></div>
                        </div>
                      </div>
                      <div class="circle flex">
                        <div class="circle-b">
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__bottom"></div>
                          <div class="circle-b__top"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="a__back face flex">
                    <div class="turbo-back">
                      <div class="turbo-back__item"></div>
                      <div class="turbo-back__item"></div>
                      <div class="turbo-back__item"></div>
                      <div class="turbo-back__item"></div>
                    </div>
                    <div class="wave-1 wave"></div>
                    <div class="wave-2 wave"></div>
                    <div class="wave-3 wave"></div>
                    <div class="wave-4 wave"></div>
                    <div class="wave-5 wave"></div>
                  </div>
                  <div class="a__right face"></div>
                  <div class="a__left face"></div>
                  <div class="a__top face">
                    <div class="a__top-shadow face"></div>
                    <div class="a__top-neon face"></div>
                  </div>
                  <div class="a__bottom face"></div>
                </div>
                <div class="a">
                  <div class="a__front face flex">
                    <div class="turbo">
                      <div class="circle flex">
                        <div class="circle-a">
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__side"></div>
                          <div class="circle-a__bottom"></div>
                          <div class="circle-a__top"></div>
                        </div>
                      </div>
                      <div class="circle flex">
                        <div class="circle-b">
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__side"></div>
                          <div class="circle-b__bottom"></div>
                          <div class="circle-b__top"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="a__back face flex">
                    <div class="turbo-back">
                      <div class="turbo-back__item"></div>
                      <div class="turbo-back__item"></div>
                      <div class="turbo-back__item"></div>
                      <div class="turbo-back__item"></div>
                    </div>
                    <div class="wave-1 wave"></div>
                    <div class="wave-2 wave"></div>
                    <div class="wave-3 wave"></div>
                    <div class="wave-4 wave"></div>
                    <div class="wave-5 wave"></div>
                  </div>
                  <div class="a__right face"></div>
                  <div class="a__left face"></div>
                  <div class="a__top face">
                    <div class="a__top-shadow face"></div>
                    <div class="a__top-neon face"></div>
                  </div>
                  <div class="a__bottom face"></div>
                </div>
                <div class="wings">
                  <div class="wing">
                    <div class="wing__front face"></div>
                    <div class="wing__back face"></div>
                    <div class="wing__right face"></div>
                    <div class="wing__left face"></div>
                    <div class="wing__top face"></div>
                    <div class="wing__bottom face"></div>
                  </div>
                  <div class="wing">
                    <div class="wing__front face"></div>
                    <div class="wing__back face"></div>
                    <div class="wing__right face"></div>
                    <div class="wing__left face"></div>
                    <div class="wing__top face"></div>
                    <div class="wing__bottom face"></div>
                  </div>
                </div>
              </div>
              <div class="wrapper-b">
                <div class="b">
                  <div class="b__front face"></div>
                  <div class="b__back face"></div>
                  <div class="b__right face"></div>
                  <div class="b__left face"></div>
                  <div class="b__top face"></div>
                  <div class="b__bottom face"></div>
                </div>
                <div class="c">
                  <div class="c__front face">
                    <div class="c__front-l face"></div>
                  </div>
                  <div class="c__back face"></div>
                  <div class="c__right face"></div>
                  <div class="c__left face"></div>
                  <div class="c__top face"></div>
                  <div class="c__bottom face"></div>
                </div>
                <div class="d">
                  <div class="d__right face"></div>
                  <div class="d__left face"></div>
                  <div class="d__top face">
                    <div class="d__top-l face"></div>
                  </div>
                  <div class="d__bottom face"></div>
                </div>
                <div class="e">
                  <div class="e__front face">
                    <div class="e__front-i flex">
                      <div class="e__front-t flex">◠‿◠</div>
                    </div>
                  </div>
                  <div class="e__back face"></div>
                  <div class="e__right face"></div>
                  <div class="e__left face"></div>
                  <div class="e__bottom face"></div>
                </div>
                <div class="f">
                  <div class="f__front face">
                    <div class="f__front-i face"></div>
                  </div>
                  <div class="f__right face"></div>
                  <div class="f__left face"></div>
                  <div class="f__top face"></div>
                  <div class="f__bottom face"></div>
                </div>
                <div class="g">
                  <div class="g__front face"></div>
                  <div class="g__right face"></div>
                  <div class="g__left face"></div>
                  <div class="g__top face"></div>
                  <div class="g__bottom face"></div>
                </div>
                <div class="h">
                  <div class="h__front face"></div>
                  <div class="h__back face"></div>
                  <div class="h__right face"></div>
                  <div class="h__left face"></div>
                  <div class="h__top face"></div>
                  <div class="h__bottom face"></div>
                </div>
                <div class="i">
                  <div class="i__right face"></div>
                  <div class="i__left face"></div>
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
