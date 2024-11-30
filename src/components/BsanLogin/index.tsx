import "./index.less";
import PlayBtn from "../playBtn";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
const BsanLogin = (props) => {
  const [show, setShow] = useState(true);
  function fn() {
    setShow(false);
    props.fn(false);
  }
  return (
    <>
      {show ? (
        <div className="BsanLogin">
          <div class="content">
            <div class="form-content">
              <CloseOutlined onClick={fn} />
              <h1 class="title">
                <img
                  src="https://www.type.fun/assets/logo-home.589229d4.png"
                  alt=""
                />
              </h1>
              <div class="input_field">
                <span class="areaCode">+86</span>
                <input
                  className="phoneInput"
                  type="text"
                  placeholder="手机号"
                />
              </div>
              <div class="input_field">
                <input
                  className="PassInput"
                  type="password"
                  placeholder="验证码"
                />
                <div class="Acquire_box">
                  <p class="Acquire">获取验证码</p>
                </div>
              </div>
              <p class="social_text">
                <input
                  class="shortMessage"
                  type="checkbox"
                  aria-hidden="false"
                  value="false"
                />
                <span class="agree_text">
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
              <PlayBtn text={"登入"}></PlayBtn>
              <div class="other-login">
                <div class="divider">
                  <span class="line"></span>
                  <a class="divider-text" href="">
                    遇到问题{" "}
                  </a>
                  <span class="line"></span>
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
