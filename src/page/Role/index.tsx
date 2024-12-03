import styles from "./index.module.less";
import Myblack from "@/components/myblack";
import { useState, useRef } from "react";
import classNames from "classnames";
import faker from "faker";
import CjBtn from "@/components/cjBtn";
faker.locale = "zh_CN";
const Role = () => {
  const [state, setState] = useState(1);
  const [isLogin, setIsLogin] = useState(false);
  const mouse = useRef(null);

  // 学生数组
  const sturole = [
    {
      id: 1,
      avator: "src/page/Role/public/s1.png",
      img: "src/page/Role/public/s11.png",
      role: "学生角色",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
      bg: "src/page/Role/public/img/1.png",
    },
    {
      id: 2,
      avator: "src/page/Role/public/s2.png",
      img: "src/page/Role/public/s22.png",
      role: "学生角色",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
      bg: "src/page/Role/public/img/2.png",
    },
    {
      id: 3,
      avator: "src/page/Role/public/s3.png",
      img: "src/page/Role/public/s33.png",
      role: "学生角色",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
      bg: "src/page/Role/public/img/3.png",
    },
    {
      id: 4,
      avator: "src/page/Role/public/s4.png",
      img: "src/page/Role/public/s44.png",
      role: "学生角色",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
      bg: "src/page/Role/public/img/4.png",
    },
    {
      id: 5,
      avator: "src/page/Role/public/s5.png",
      img: "src/page/Role/public/s55.png",
      role: "学生角色",
      vip: "yes",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
      bg: "src/page/Role/public/img/5.png",
    },
    {
      id: 6,
      avator: "src/page/Role/public/s6.png",
      img: "src/page/Role/public/s66.png",
      role: "学生角色",
      vip: "yes",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
      bg: "src/page/Role/public/img/6.png",
    },
  ];
  //教师数组
  const teacher = [
    {
      id: 7,
      avator: "src/page/Role/public/s7.png",
      img: "src/page/Role/public/s77.png",
      role: "教师角色",
      talent: [
        "创建学习小组",
        "邀请成员进组",
        "自定义课程包",
        "统计群组数据",
        "查看个人成绩",
      ],
      bg: "src/page/Role/public/img/7.png",
    },
    {
      id: 8,
      avator: "src/page/Role/public/s8.png",
      img: "src/page/Role/public/s88.png",
      role: "教师角色",
      talent: [
        "创建学习小组",
        "邀请成员进组",
        "自定义课程包",
        "统计群组数据",
        "查看个人成绩",
      ],
      bg: "src/page/Role/public/img/8.png",
    },
  ];
  //机构数组
  const construct = [
    {
      id: 9,
      avator: "src/page/Role/public/school.png",
      img: "src/page/Role/public/schooll.png",
      role: "校园服务平台",
      talent: [
        "经典指法课程和配套教案",
        "批量管理班级和学生",
        "支持自定义课程内容",
        "全方位学习数据分析",
        "趣味教具激发学习动力",
      ],
      bg: "src/page/Role/public/img/9.png",
    },
    {
      id: 10,
      avator: "src/page/Role/public/c1.png",
      img: "src/page/Role/public/instruct.png",
      role: "机构服务平台",
      talent: [
        "定制机构版首页",
        "支持批量开通账号",
        "支持自定义课程内容",
        "支持多个班级和老师",
        "更多详尽成绩报告",
      ],
      bg: "src/page/Role/public/img/10.png",
    },
  ];
  const [obj, setObj] = useState(sturole[0]);
  //切换角色函数
  function change(item) {
    setObj(item);
    setState(item.id);
  }
  //生成随机姓名函数
  function randomName() {
    const randomNickname = faker.name.lastName() + faker.name.firstName();
    console.log(1111);
    setInputValue(randomNickname);
  }
  //鼠标经过显示随机
  function handlemouse() {
    console.log(mouse.current.style.display);

    mouse.current.style.visibility = "visible";
  }
  function handlemouse2() {
    mouse.current.style.visibility = "hidden";
  }
  const [inputValue, setInputValue] = useState("小易");
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    adjustInputWidth();
  };

  const adjustInputWidth = () => {
    if (inputRef.current) {
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.style.whiteSpace = "pre";
      tempSpan.style.fontSize = window.getComputedStyle(
        inputRef.current
      ).fontSize;
      tempSpan.textContent = inputValue || " ";
      document.body.appendChild(tempSpan);
      inputRef.current.style.width = `${tempSpan.offsetWidth + 100}px`;
      document.body.removeChild(tempSpan);
    }
  };
  //自定义姓名表单
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <body className={styles.background}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.item1}>
                <div className={styles.ssvg}>
                  <img src="./src/page/Role/public/s.svg" alt="" />
                  <span>学生</span>
                </div>

                <ul className={styles.stu}>
                  {sturole.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => change(item)}
                      className={state === item.id ? styles.active : ""}
                    >
                      <img src={item.avator} alt="" />
                      {item.vip === "yes" ? (
                        <div className={styles.Vip}>会员专享</div>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.item2}>
                <div className={styles.js}>
                  <div className={`${styles.jsvg} ${styles.ssvg}`}>
                    <img src="./src/page/Role/public/j.svg" alt="" />
                    <span>教师</span>
                  </div>
                  <ul className={styles.stu}>
                    {teacher.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => change(item)}
                        className={state === item.id ? styles.active : ""}
                      >
                        <img src={item.avator} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.construct}>
                  <ul className={`${styles.top} ${styles.ssvg}`}>
                    <li>
                      <img src="./src/page/Role/public/c1.svg" alt="" />
                      <span>校园</span>
                    </li>
                    <li>
                      <img src="./src/page/Role/public/c2.svg" alt="" />
                      <span>机构</span>
                    </li>
                  </ul>
                  <ul className={`${styles.bottom} ${styles.stu}`}>
                    {construct.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => change(item)}
                        className={state === item.id ? styles.active : ""}
                      >
                        <img src={item.avator} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={styles.middle}
              style={{ backgroundImage: `url(${obj.bg})` }}
            >
              <img src={obj.img} alt="" />
            </div>
            <div className={styles.right}>
              <div className={styles.tip}>
                <div className={styles.top}>
                  <img
                    src={
                      obj.vip
                        ? "./src/page/Role/public/ffuse.png"
                        : "./src/page/Role/public/mfuse.png"
                    }
                    alt=""
                    className={obj.vip ? styles.width : ""}
                  />
                  <span>{obj.role}</span>
                </div>
                <ul className={styles.bottom}>
                  <p>可以使用{obj.role}：</p>
                  {obj.talent.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                  <p>暂不支持多个角色同时登录</p>
                </ul>
                <span className={`${styles.t} ${styles.t1}`}></span>
                <span className={`${styles.t} ${styles.t2}`}></span>
                <span className={`${styles.t} ${styles.t3}`}></span>
                <span className={`${styles.t} ${styles.t4}`}></span>
              </div>
            </div>
          </div>
          <div
            className={styles.footer}
            onMouseLeave={handlemouse2}
            onMouseEnter={handlemouse}
          >
            <div className={styles.top}>
              <div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  ref={inputRef}
                  style={{ width: "auto" }}
                />
              </div>
            </div>
            <div className={styles.btn}>
              <button>新建角色</button>
              <span></span>
            </div>
            <ul className={styles.gz} ref={mouse} onMouseMove={handlemouse}>
              <li onClick={randomName}>
                <img src="src/page/Role/public/sz.svg" alt="" />
                <span>随机</span>
              </li>
              <li onClick={() => setIsLogin(true)}>
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4397"
                  width="25"
                  height="25"
                >
                  <path
                    d="M751.872 208.554667c26.88 21.333333 45.312 49.365333 51.754667 79.018666 7.168 33.109333-0.768 66.688-22.314667 94.464L413.952 855.893333c-18.602667 23.978667-46.506667 37.973333-76.714667 38.357334L195.498667 896h-0.426667a33.28 33.28 0 0 1-32.384-26.026667l-32.085333-139.477333a100.437333 100.437333 0 0 1 18.517333-84.437333l48.213333-62.208a32.938667 32.938667 0 0 1 46.677334-5.717334 33.834667 33.834667 0 0 1 5.632 47.189334l-48.213334 62.208a32.896 32.896 0 0 0-6.058666 27.733333l26.026666 113.152 114.986667-1.408a32.256 32.256 0 0 0 25.173333-12.586667l367.402667-473.813333c9.386667-12.074667 12.629333-25.088 9.728-38.698667-3.157333-14.378667-13.013333-28.757333-27.818667-40.448l-61.610666-48.896c-23.850667-18.773333-57.472-28.458667-80.426667 1.237334l-48.554667 62.549333L597.333333 338.773333c14.293333 11.562667 16.64 32.768 5.12 47.189334a32.938667 32.938667 0 0 1-46.72 5.248l-76.458666-61.952-125.696 162.133333a32.938667 32.938667 0 0 1-46.72 5.674667 33.92 33.92 0 0 1-5.589334-47.189334l215.210667-277.589333c41.770667-53.930667 114.901333-59.221333 173.781333-12.586667l61.610667 48.853334z m-171.776 620.245333h282.666667c18.346667 0 33.237333 15.061333 33.237333 33.578667a33.450667 33.450667 0 0 1-33.28 33.621333h-282.624a33.408 33.408 0 0 1-33.237333-33.621333c0-18.517333 14.848-33.578667 33.28-33.578667z"
                    fill="#707070"
                    p-id="4398"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <Myblack className={styles.Rolemyblack}></Myblack>
        {isLogin ? <Myblack className={styles.isLogin}></Myblack> : ""}
        {isLogin ? (
          <div className={styles.xgName}>
            <h1 style={{ color: "white" }}>修改角色名称</h1>
            <input type="text" />
            <CjBtn text={"确认"}></CjBtn>
          </div>
        ) : (
          ""
        )}
      </body>
    </>
  );
};

export default Role;
