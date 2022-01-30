import React, { useState } from "react";
import ErrorModal from "../src/components/ErrorModal";
import classes from "./login.module.css";
import Button from "../src/components/Button";
import Router from "next/router";

import { useRecoilState } from "recoil";

import { loginApi } from "../src/components/utils/api/authApi";
import { loginState } from "../src/components/utils/recoil/states";
import LoadingPage from "../src/components/LoadingPage";

const Login = () => {
  const [enteredUserid, setEnteredUserid] = useState("");
  const [enteredpassword, setEnteredpassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [, setLoginState] = useRecoilState(loginState);

  const LoginHandler = async (enteredUserid, enteredpassword) => {
    //

    if (
      enteredUserid.trim().length === 0 ||
      enteredpassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "아이디와 비밀번호를 입력해주세요.",
      });
      return;
    } else {
      try {
        setLoading(true);
        const res = await loginApi(enteredUserid, enteredpassword);
        setLoading(false);
        setLoginState(res.data.userid);
        Router.push("/main/" + res.data.userid);
      } catch (e) {
        setError({
          title: "Invalid input",
          message: "비밀번호 혹은 아이디가 틀렸습니다.",
        });
      }
    }
  };
  const useridChangehandler = (event) => {
    // if (event.target.value === "id") {
    setEnteredUserid(event.target.value);

    // } else {
    //   setError({
    //     title: "Invalid Input",
    //     message: "아이디를 다시 입력하세요.",
    //   });
    // }
  };
  //"id"나 "password"는 백앤드에서 가져와야되는거
  const passwordChangehandler = (event) => {
    setEnteredpassword(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className={classes.input}>
          {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}
          <div>
            <h2>
              {" "}
              내 어드벤트 캘린더에
              <br />
              친구들이 남긴 응원을 확인하세요!
            </h2>
          </div>

          <form>
            <label htmlFor="id">아이디</label>
            <input
              id="id"
              type="text"
              onChange={useridChangehandler}
              value={enteredUserid}
            />
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={passwordChangehandler}
              value={enteredpassword}
            />
            <div className={classes.thisbutton}>
              <Button
                onClick={() => LoginHandler(enteredUserid, enteredpassword)}
              >
                로그인
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
