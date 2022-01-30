import React, { useState } from "react";
import ErrorModal from "../src/components/ErrorModal";
import classes from "./login.module.css";
import Button from "../src/components/Button";
import { useRecoilState } from "recoil";
import Router, { useRouter } from "next/router";

import { signupApi } from "../src/components/utils/api/authApi";
import { loginState } from "../src/components/utils/recoil/states";
import moment from "moment";

const Userinfo = () => {
  const router = useRouter();
  const month = moment().format("M");

  const userid = router.query.userid;
  const password = router.query.password;
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredgoal, setEnteredgoal] = useState("");
  const [error, setError] = useState();
  const [, setLogin] = useRecoilState(loginState);

  const userinfoHandler = async (event, enteredUsername, enteredgoal) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredgoal.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "이름과 목표를 모두 입력해주세요.",
      });
    } else {
      const res = await signupApi(
        userid,
        enteredUsername,
        password,
        enteredgoal
      );

      const resUserId = res.data.userId;
      setLogin(resUserId);
      //   const createUserInfo = await axios.post();
      Router.push("/main/" + resUserId);
    }
    // props.onAddUser(enteredUserid, enteredpassword, enteredpasswordcheck);
  };

  const usernameChangehandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const goalChangehandler = (event) => {
    setEnteredgoal(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
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
          나만의 어드벤트 캘린더를 만들고,
          <br />
          친구들에게 응원을 받아보세요!
        </h2>
      </div>

      <form onSubmit={(e) => userinfoHandler(e, enteredUsername, enteredgoal)}>
        <label htmlFor="name">당신의 이름은 무엇인가요?</label>
        <input
          id="name"
          type="text"
          onChange={usernameChangehandler}
          value={enteredUsername}
        />
        <label htmlFor="goal">당신의 {month}월 목표는 무엇인가요?</label>
        <input
          id="goal"
          type="text"
          onChange={goalChangehandler}
          value={enteredgoal}
        />
        <div className={classes.thisbutton}>
          <Button type="submit">시작하기</Button>
        </div>
      </form>
    </div>
  );
};

export default Userinfo;
