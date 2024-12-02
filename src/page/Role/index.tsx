import "./index.less";
import Myblack from "@/components/myblack";
const Role = () => {
  // 学生数组
  const sturole = [
    {
      id: 1,
      avator: "src/page/Role/public/s1.png",
      img: "src/page/Role/public/s11.png",
      role: "学生角色",
      vip: "no",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
    },
    {
      id: 2,
      avator: "src/page/Role/public/s2.png",
      img: "src/page/Role/public/s22.png",
      role: "学生角色",
      vip: "no",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
    },
    {
      id: 3,
      avator: "src/page/Role/public/s3.png",
      img: "src/page/Role/public/s33.png",
      role: "学生角色",
      vip: "no",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
    },
    {
      id: 4,
      avator: "src/page/Role/public/s4.png",
      img: "src/page/Role/public/s44.png",
      role: "学生角色",
      vip: "no",
      talent: [
        "学习指法课程",
        " 练习打字速度",
        "访问打字游戏",
        " 查看成绩报告",
        " 加入学习小组",
      ],
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
    },
  ];
  //教师数组
  const teacher = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
  ];
  //机构数组
  const construct = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
  ];
  return (
    <>
      <body className="background">
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="item1">
                <div className="ssvg">
                  <img src="./src/page/Role/public/s.svg" alt="" />
                  <span>学生</span>
                </div>

                <ul className="stu">
                  {sturole.map((item) => (
                    <li key={item.id}>
                      <img src={item.avator} alt="" />
                      {item.vip === "yes" ? (
                        <div className="Vip">会员专享</div>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="item2">
                <div className="js">
                  <div className="jsvg ssvg">
                    <img src="./src/page/Role/public/j.svg" alt="" />
                    <span>教师</span>
                  </div>
                  <ul className="stu">
                    {teacher.map((item) => (
                      <li key={item.id}>
                        <img src={item.avator} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="construct">
                  <ul className="top ssvg">
                    <li>
                      <img src="./src/page/Role/public/c1.svg" alt="" />
                      <span>校园</span>
                    </li>
                    <li>
                      <img src="./src/page/Role/public/c2.svg" alt="" />
                      <span>机构</span>
                    </li>
                  </ul>
                  <ul className="bottom stu">
                    {construct.map((item) => (
                      <li key={item.id}>
                        <img src={item.avator} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="middle">
              <img src="src/page/Role/public/instruct.png" alt="" />
            </div>
            <div className="right">
              <div className="tip">
                <div className="top">
                  <img src="./src/page/Role/public/mfuse.png" alt="" />
                  <span>学生角色</span>
                </div>
                <ul className="bottom">
                  <p>可以使用学生角色：</p>
                  <li>· 学习指法课程</li>
                  <li>· 练习打字速度</li>
                  <li>· 访问打字游戏</li>
                  <li>· 查看成绩报告</li>
                  <li>· 加入学习小组</li>
                  <p>暂不支持多个角色同时登录</p>
                </ul>
                <span className="t t1"></span>
                <span className="t t2"></span>
                <span className="t t3"></span>
                <span className="t t4"></span>
              </div>
            </div>
          </div>
        </div>
        <Myblack></Myblack>
      </body>
    </>
  );
};

export default Role;
