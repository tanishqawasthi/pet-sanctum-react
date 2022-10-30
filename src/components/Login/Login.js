import { useState } from "react";
import "./Login.css";

import { getBlur,getFocus,getBlur1,getFocus1,show,show1 } from "./sideEffect_Login";

export default function Login() {
    const [username,setUsername] = useState('');
    const [pwd,setPwd] = useState('');
  return (
    <>
      <div className="container_login">
        <div className="page_login">
          <div className="image_login">
            <img
              src={process.env.PUBLIC_URL + "/images/mobile.svg"}
              alt="sorry"
            />
          </div>

          <div className="form_login">
            <form name="loginForm" id="form_login">
              <div className="header_login">
                <img
                  src={process.env.PUBLIC_URL + "/images/best.jfif"}
                  alt="sorry"
                />
                <h2 id="h2_login">WELCOME</h2>
              </div>
              <div className="input-container_login">
                <label
                  for="name_login"
                  id="l-name_login"
                  className="label_class_login"
                >
                  Username
                </label>
                <span id="s-name_login" className="span_class_login">
                  Username
                </span>
                <input
                  type="text"
                  id="name_login"
                  name="name_login"
                  className="input_login"
                  value={username}
                  onChange={(e) => {setUsername(e.target.value)}}
                  onFocus={getFocus}
                  onBlur={getBlur}
                  required
                />
              </div>
              <div className="input-container_login">
                <span id="s-pwd_login" className="span_class_login">
                  Password
                </span>
                <label
                  for="pwd_login"
                  id="l-pwd_login"
                  className="label_class_login"
                >
                  Password
                </label>
                <div className="lock_login">
                  <input
                    type="password"
                    id="pwd_login"
                    className="input_login"
                    value={pwd}
                    onChange={(e) => {setPwd(e.target.value)}}
                    onFocus={getFocus1}
                    onBlur={getBlur1}
                    required
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/c-eye.png"}
                    id="c-eye_login"
                    onClick={show}
                    alt="sorry"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/o-eye.png"}
                    id="o-eye_login"
                    onClick={show1}
                    alt="sorry"
                  />
                </div>
              </div>
              <div className="btn_login">
                <a id="forgot_login" href="">
                  *Forgot your password?
                </a>
                <input type="submit" id="btn_login" value="SIGN IN" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
