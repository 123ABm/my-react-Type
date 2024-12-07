import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./index.less";
import "./swiper.min.css";

const Souye = () => {
  const [effect, setEffect] = useState(0);
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      swiperRef.current = new Swiper(swiperContainerRef.current, {
        loop: true,
        speed: 2500,
        slidesPerView: 7,
        spaceBetween: 30,
        centeredSlides: true,
        watchSlidesProgress: true,
        on: {
          setTranslate: function () {
            const slides = this.slides;
            for (let i = 0; i < slides.length; i++) {
              const slide = slides[i];
              const progress = slide.progress;
              slide.style.opacity = "";
              slide.style.background = "";
              slide.style.transform = ""; // 清除样式

              if (effect === 1) {
                slide.style.transform = `scale(${1 - Math.abs(progress) / 8})`;
              } else if (effect === 2) {
                slide.style.opacity = `${1 - Math.abs(progress) / 6}`;
                slide.style.transform = `translate3d(0, ${
                  Math.abs(progress) * 20
                }px, 0)`;
              } else if (effect === 3) {
                slide.style.transform = `rotate(${progress * 30}deg)`;
              } else if (effect === 4) {
                slide.style.background = `rgba(${
                  255 - Math.abs(progress) * 20
                }, ${127 + progress * 32}, ${Math.abs(progress) * 64})`;
              }
            }
          },
          setTransition: function (transition) {
            for (let i = 0; i < this.slides.length; i++) {
              const slide = this.slides[i];
              slide.style.transition = `${transition}ms`;
            }
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }, [effect]);

  const handleEffectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEffect(Number(event.target.value));
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  };

  return (
    <>
      <body className="mySouye">
        <div class="box">
          <ul class="bubble-bgwall">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <select id="progressEffect" onChange={handleEffectChange}>
          <option value="0">无效果</option>
          <option value="1">缩放scale</option>
          <option value="2">Y轴位移+透明度</option>
          <option value="3">旋转rotate</option>
          <option value="4">背景色</option>
        </select>
        <div className="swiper-container" ref={swiperContainerRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div></div>
            </div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div>
            <div className="swiper-slide">Slide 8</div>
            <div className="swiper-slide">Slide 9</div>
            <div className="swiper-slide">Slide 10</div>
          </div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </body>
    </>
  );
};

export default Souye;
