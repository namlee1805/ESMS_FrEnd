import { useCallback } from "react";
import "./Login.css";

const Login = () => {
  const onLoginButtonClick = useCallback(() => {
    window.open("localhost:8888/loginStudents");
  }, []);

  const onLoginGoogleClick = useCallback(() => {
    // window.location.href = "localhost:8888/loginStudents;
    window.open("localhost:8888/loginStudents");
  }, []);

  return (
    <div className="login">
      <div className="login1">
        <b>Login</b>
        <span className="span">{` `}</span>
      </div>
      <div className="please-enter-your">
        Please enter your login details to sign in.
      </div>
      <input className="username-input" placeholder="Username" type="text" />
      <input
        className="password-input"
        placeholder="Password"
        type="password"
      />
      <div className="remember-username">Remember username</div>
      <a
        className="forgot-username-or"
        href={`https://www.canva.com/design/DAFwFwf8Ksg/IaVVcwGakZNm2lFrMgOfQA/view?utm_content=DAFwFwf8Ksg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`}
        target="_blank"
      >
        Forgot username or password?
      </a>
      <button className="login-button" onClick={onLoginButtonClick}>
        <b className="log-in">{`Log in `}</b>
      </button>
      <button className="login-google" onClick={onLoginGoogleClick}>
        <div className="login-with-google">Login With Google</div>
        <img className="clip-path-group" alt="" src="/clip-path-group.svg" />
      </button>
      <input className="check-box" type="checkbox" />
      <div className="account-on">
        <div className="login-with-your">login with your account on</div>
        <div className="account-on-child" />
        <div className="account-on-item" />
      </div>
      <div className="background">
        <img
          className="n-1-icon"
          alt=""
          src="/380135114-716040463899130-3499952434336368420-n-1@2x.png"
        />
        <img className="logo-long-2-icon" alt="" src="/logolong-2@2x.png" />
      </div>
    </div>
  );
};

export default Login;
