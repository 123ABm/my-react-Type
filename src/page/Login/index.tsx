import styles1 from "./style.module.less";
import styles2 from "./btn.module.less";
import { DownOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeiChuang from "../../components/Feichuang";
import BsanLogin from "@/components/BsanLogin";
import classNames from "classnames";
import Myblack from "@/components/myblack";
import { throttle } from "lodash";

const Login = () => {
  const navigate = useNavigate();
  const [mybs, setMybs] = useState(false);
  const body = useRef(null);
  function start() {
    setMybs(true);
  }
  function end(m) {
    setMybs(m);
  }
  function togo() {
    navigate("/character");
  }
  useEffect(() => {
    function Star(id, x, y) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.r = Math.floor(Math.random() * 2) + 1;
      var alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
      this.color = "rgba(255,255,255," + alpha + ")";
    }

    Star.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    };

    Star.prototype.move = function () {
      this.y -= 0.15;
      if (this.y <= -10) this.y = HEIGHT + 10;
      this.draw();
    };

    Star.prototype.die = function () {
      stars[this.id] = null;
      delete stars[this.id];
    };

    function Dot(id, x, y, r) {
      this.id = id;
      this.x = x;
      this.y = y;
      this.r = Math.floor(Math.random() * 5) + 1;
      this.maxLinks = 2;
      this.speed = 0.5;
      this.a = 0.5;
      this.aReduction = 0.005;
      this.color = "rgba(255,255,255," + this.a + ")";
      this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";

      this.dir = Math.floor(Math.random() * 140) + 200;
    }

    Dot.prototype.draw = function () {
      ctx.fillStyle = this.color;
      ctx.shadowBlur = this.r * 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();
    };

    Dot.prototype.link = function () {
      if (this.id == 0) return;
      var previousDot1 = getPreviousDot(this.id, 1);
      var previousDot2 = getPreviousDot(this.id, 2);
      var previousDot3 = getPreviousDot(this.id, 3);
      if (!previousDot1) return;
      ctx.strokeStyle = this.linkColor;
      ctx.moveTo(previousDot1.x, previousDot1.y);
      ctx.beginPath();
      ctx.lineTo(this.x, this.y);
      if (previousDot2 != false) ctx.lineTo(previousDot2.x, previousDot2.y);
      if (previousDot3 != false) ctx.lineTo(previousDot3.x, previousDot3.y);
      ctx.stroke();
      ctx.closePath();
    };

    function getPreviousDot(id, stepback) {
      if (id == 0 || id - stepback < 0) return false;
      if (typeof dots[id - stepback] != "undefined") return dots[id - stepback];
      else return false; //getPreviousDot(id - stepback);
    }

    Dot.prototype.move = function () {
      this.a -= this.aReduction;
      if (this.a <= 0) {
        this.die();
        return;
      }
      this.color = "rgba(255,255,255," + this.a + ")";
      this.linkColor = "rgba(255,255,255," + this.a / 4 + ")";
      (this.x = this.x + Math.cos(degToRad(this.dir)) * this.speed),
        (this.y = this.y + Math.sin(degToRad(this.dir)) * this.speed);

      this.draw();
      this.link();
    };

    Dot.prototype.die = function () {
      dots[this.id] = null;
      delete dots[this.id];
    };

    var canvas = document.getElementById("canvas") as HTMLCanvasElement,
      ctx = canvas.getContext("2d"),
      WIDTH,
      HEIGHT,
      mouseMoving = false,
      mouseMoveChecker,
      mouseX,
      mouseY,
      stars = [],
      initStarsPopulation = 80,
      dots = [],
      dotsMinDist = 2,
      maxDistFromCursor = 50;

    setCanvasSize();
    init();

    function setCanvasSize() {
      (WIDTH = document.documentElement.clientWidth),
        (HEIGHT = document.documentElement.clientHeight);

      canvas.setAttribute("width", WIDTH);
      canvas.setAttribute("height", HEIGHT);
    }

    function init() {
      ctx.strokeStyle = "white";
      ctx.shadowColor = "white";
      for (var i = 0; i < initStarsPopulation; i++) {
        stars[i] = new Star(
          i,
          Math.floor(Math.random() * WIDTH),
          Math.floor(Math.random() * HEIGHT)
        );
        //stars[i].draw();
      }
      ctx.shadowBlur = 0;
      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      for (var i in stars) {
        stars[i].move();
      }
      for (var i in dots) {
        dots[i].move();
      }
      drawIfMouseMoving();
      requestAnimationFrame(animate);
    }

    // Throttle mousemove event
    const handleMouseMove = throttle((e) => {
      mouseMoving = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      clearTimeout(mouseMoveChecker);
      mouseMoveChecker = setTimeout(() => {
        mouseMoving = false;
      }, 100);
    }, 100); // Adjust throttle time as needed

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

    function drawIfMouseMoving() {
      if (!mouseMoving) return;

      if (dots.length == 0) {
        dots[0] = new Dot(0, mouseX, mouseY, 1);
        dots[0].draw();
        return;
      }

      var previousDot = getPreviousDot(dots.length, 1);
      var prevX = previousDot.x;
      var prevY = previousDot.y;

      var diffX = Math.abs(prevX - mouseX);
      var diffY = Math.abs(prevY - mouseY);

      if (diffX < dotsMinDist || diffY < dotsMinDist) return;

      var xVariation = Math.random() > 0.5 ? -1 : 1;
      xVariation =
        xVariation * Math.floor(Math.random() * maxDistFromCursor) + 1;
      var yVariation = Math.random() > 0.5 ? -1 : 1;
      yVariation =
        yVariation * Math.floor(Math.random() * maxDistFromCursor) + 1;
      dots[dots.length] = new Dot(
        dots.length,
        mouseX + xVariation,
        mouseY + yVariation,
        1
      );
      dots[dots.length - 1].draw();
      dots[dots.length - 1].link();
    }

    function degToRad(deg) {
      return deg * (Math.PI / 180);
    }
  }, []);
  return (
    <>
      <body className={styles1.xylogin}>
        <div className={styles1.landscape}></div>
        <div className={styles1.filter}></div>
        <canvas id="canvas"></canvas>
        <div className={styles1.container1}>
          <div className={styles1.mytop}>
            <img
              src="https://www.type.fun/assets/logo-home.589229d4.png"
              alt=""
            />
            <ul>
              <li>首页</li>
              <li>
                产品
                <DownOutlined />
              </li>
              <li>博客</li>
              <li>机构</li>
              <li>校园版</li>
              <li>继续学习</li>
            </ul>
          </div>
          <div className={styles1.mycontent}>
            <div className={styles1.tip}>
              TypeFun &nbsp;&nbsp; <span style={{ color: "#9e9ea3" }}>|</span>{" "}
              &nbsp;&nbsp;打字星球
            </div>
            <h1>在线打字练习</h1>
            <p>
              丰富的盲打课程，科学的打字课程设计，诗词歌赋，经典名著，少儿编程，背单词，小键盘，练习打字同时收获更多，结合跟读轻松学会拼音，百万用户选择的打字练习网站
            </p>
            <div className={styles1.box2}>
              <div
                className={classNames(
                  styles2.btn,
                  styles2.btntwo,
                  styles1.btntwo
                )}
                onClick={start}
              >
                <span>立即开始学习</span>
              </div>
            </div>
            <div className={styles1.them}>
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1499"
                width="30"
                height="30"
              >
                <path
                  d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                  fill="white"
                  p-id="1500"
                ></path>
                <path
                  d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                  fill="white"
                  p-id="1501"
                ></path>
              </svg>
              <span style={{ marginLeft: "10px" }}>观看影片</span>
            </div>
            <div className={styles1.auth}>
              <img
                src="https://www.type.fun/assets/img-character.d52efdbe.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles1.hanxing}>
            <div className={styles1.container}>
              <div className={styles1.planet}></div>
            </div>
          </div>
          <div className={styles1.hanxing}>
            <div className={styles1.container2}>
              <div className={styles1.planet}></div>
            </div>
          </div>
          <div className="feichuang1">
            <FeiChuang></FeiChuang>
          </div>
        </div>
        <div>
          {mybs ? (
            <BsanLogin
              fn={end}
              className={styles1.open}
              onClick={togo}
            ></BsanLogin>
          ) : (
            ""
          )}
        </div>
        {mybs ? <Myblack></Myblack> : ""}
      </body>
    </>
  );
};
export default Login;
