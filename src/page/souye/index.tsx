import "./index.less";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/less/scrollbar";
import btnSvg from "./assets/img/btn.svg";

const Souye = () => {
  const itemBox = [
    {
      id: 1,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 2,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 3,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 4,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 5,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 6,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 7,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 8,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
    {
      id: 9,
      img: "src/page/souye/assets/img/1.png",
      current: 0,
      total: "965",
      title: "诗词歌赋",
      content:
        "精选《唐诗三百首》，《宋词三百首》，《诗经》作品共九百余篇，是中小学必学的古文内容，一边学拼音，一边背诵诗词，同时练习打字速度，一举多得。",
    },
  ];

  return (
    <div className="souye">
      {/* 导航 */}
      <div className="navigat">
        <div className="left">
          <img
            src="https://www.type.fun/assets/logo-home.589229d4.png"
            alt=""
          />
        </div>
        <ul>
          <li>
            <div></div>
            <div>
              <img
                src="https://www.type.fun/assets/game-text.98e8dc51.png"
                alt=""
              />
            </div>
          </li>
          <li>我的</li>
          <li>帮助</li>
          <li>
            <img src="" alt="" />
          </li>
          <li>返回</li>
        </ul>
      </div>
      {/* 轮播图 */}
      <div className="mylunbo">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
          navigation={{
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {itemBox.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "270px" }}>
              <div className="myItem">
                <div
                  className="tp"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="xtq">
                  <div className="tip">
                    已探索{item.current}/{item.total}
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev1">
          <img src={btnSvg} alt="Previous" />
        </div>
        <div className="swiper-button-next1">
          <img src={btnSvg} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Souye;
