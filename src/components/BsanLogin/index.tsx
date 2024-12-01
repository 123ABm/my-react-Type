import styles from "./index.module.less";
import PlayBtn from "../playBtn";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
const BsanLogin = (props) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  function fn() {
    setShow(false);
    props.fn(false);
    console.log(props.className);
  }
  const toRole = () => {
    console.log("点击了");

    navigate("/role");
  };
  return (
    <>
      {show ? (
        <div className={styles.BsanLogin}>
          <div className={classNames(styles.content, props.className)}>
            <div className={styles.formcontent}>
              <CloseOutlined onClick={fn} className={styles.anticon} />
              <h1 className={styles.title}>
                <img
                  src="https://www.type.fun/assets/logo-home.589229d4.png"
                  alt=""
                />
              </h1>
              <div className={styles.input_field}>
                <span className={styles.areaCode}>+86</span>
                <input
                  className={styles.phoneInput}
                  type="text"
                  placeholder="手机号"
                />
              </div>
              <div className={styles.input_field}>
                <input
                  className={styles.PassInput}
                  type="password"
                  placeholder="验证码"
                />
                <div className={styles.Acquire_box}>
                  <p className={styles.Acquire}>获取验证码</p>
                </div>
              </div>
              <p className={styles.social_text}>
                <input
                  className={styles.shortMessage}
                  type="checkbox"
                  aria-hidden="false"
                  value="false"
                />
                <span className={styles.agree_text}>
                  <span>
                    已阅读并同意
                    <a target="_blank" href="">
                      《用户协议》
                    </a>
                    <a target="_blank" href="">
                      《隐私政策》
                    </a>
                    ，未注册的手机号验证通过将自动注册
                  </span>
                </span>
              </p>
              <PlayBtn
                onClick={toRole}
                text={"登入"}
                className={styles.BSPlayBtn}
              ></PlayBtn>
              <div className={styles.otherlogin}>
                <div className={styles.divider}>
                  <span className={styles.line}></span>
                  <a className={styles.dividertext} href="">
                    遇到问题{" "}
                  </a>
                  <span className={styles.line}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default BsanLogin;
