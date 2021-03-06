import React, { useState } from "react";
import ErrorModal from "../src/components/ErrorModal";
import classes from "./signup.module.css";
import Button from "../src/components/Button";
import Router from "next/router";
import { checkApi } from "../src/components/utils/api/authApi";
import LoadingPage from "../src/components/LoadingPage";

const Signup = () => {
  const [enteredUserid, setEnteredUserid] = useState("");
  const [enteredpassword, setEnteredpassword] = useState("");
  const [enteredpasswordcheck, setEnteredpasswordcheck] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const addUserHandler = async (
    event,
    enteredUserid,
    enteredpassword,
    enteredpasswordcheck
  ) => {
    event.preventDefault();

    if (
      enteredUserid.trim().length === 0 ||
      enteredpassword.trim().length === 0 ||
      enteredpasswordcheck.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "빈칸을 모두 입력해주세요.",
      });
      return;
    }
    if (enteredpassword != enteredpasswordcheck) {
      setError({
        title: "Invalid password",
        message: "비밀번호를 맞게 입력했는지 확인해주세요.",
      });
      return;
    }
    if (!check) {
      setError({
        title: "Invalid password",
        message: "아이디 확인을 해주세요.",
      });
      return;
    }

    Router.push({
      pathname: "/userinfo",
      query: { userid: enteredUserid, password: enteredpassword },
    });
    // props.onAddUser(enteredUserid, enteredpassword, enteredpasswordcheck);
  };
  const useridChangehandler = (event) => {
    setEnteredUserid(event.target.value);
  };
  const passwordChangehandler = (event) => {
    setEnteredpassword(event.target.value);
  };
  const passwordcheckChangehandler = (event) => {
    setEnteredpasswordcheck(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  const onClick = async () => {
    if (enteredUserid === "") {
      setError({
        title: "Invalid input",
        message: "아이디를 입력해 주세요.",
      });
      return;
    }
    try {
      setLoading(true);
      const res = await checkApi(enteredUserid);
      setLoading(false);
      if (res.data) {
        setCheck(true);
        setError({
          title: "Id Duplicate Check",
          message: "사용하실 수 있는 아이디 입니다.",
        });
      }
    } catch (e) {
      setError({
        title: "Invalid input",
        message: "아이디가 겹칩니다.",
      });
    }

    // const res = await checkgiftApi(userId);
    // setGift(res.data.gift_list);
    // setModalSwitch2(true);
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
          <div className="">
            <h2>
              {" "}
              나만의 어드벤트 캘린더를 만들고,
              <br />
              친구들에게 응원을 받아보세요!
            </h2>
          </div>

          <form
            onSubmit={(e) =>
              addUserHandler(
                e,
                enteredUserid,
                enteredpassword,
                enteredpasswordcheck
              )
            }
          >
            <div className={classes.idbox}>
              <div className={classes.idboxCont}>
                <label htmlFor="id">아이디</label>
                <div>
                  <input
                    id="id"
                    type="text"
                    onChange={useridChangehandler}
                    value={enteredUserid}
                  />
                  <button className={classes.checkBtn} onClick={onClick}>
                    아이디 확인
                  </button>
                </div>
              </div>
            </div>

            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              onChange={passwordChangehandler}
              value={enteredpassword}
            />
            <label htmlFor="passwordcheck">비밀번호 확인</label>
            <input
              id="passwordcheck"
              type="password"
              onChange={passwordcheckChangehandler}
              value={enteredpasswordcheck}
            />
            <div className={classes.submitWrapper}>
              <Button className={classes.submitBtn} type="submit">
                NEXT
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Signup;
