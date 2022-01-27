import Router from "next/router";
import classes from "./landingsecond.module.css";
import Button from "../src/components/Button";
import { useState } from "react";

export default function landingsecond() {
  const [index, setIndex] = useState(2);
  return (
    <>
      <div
        className={classes.wrap}
        onClick={() => {
          if (index === 2) {
            console.log("hi");
          } else {
            if (index === 5) {
              Router.push("/auth");
            } else {
              setIndex(index + 1);
            }
          }
        }}
      >
        <img src="../cloud.png" />
        <div className={classes.wraptext}>
          {index === 2 ? (
            <div>
              {" "}
              여러분은 어드벤트 캘린더를 <br />
              선물받아본 적이 있나요?
            </div>
          ) : index === 3 ? (
            <div className={classes.text}>
              저는 매일 캘린더 속의
              <br />
              달콤한 초콜릿을 하나씩 먹으면서
              <br />
              크리스마스를 기다렸어요...!
            </div>
          ) : index === 4 ? (
            <div className={classes.text}>
              그런데 다가오는 2월도
              <br />
              12월처럼 설레는 마음으로
              <br />
              보낼 수는 없는걸까요?
            </div>
          ) : index === 5 ? (
            <div className={classes.text}>
              친구들의 달콤한 응원과 함께
              <br />
              매일 문을 하나씩 열면서 <br />
              한달 목표를 함께 이뤄볼까요?
            </div>
          ) : null}
        </div>
      </div>
      <div className={classes.landingsecond}>
        {index === 2 ? (
          <div className={classes.buttons}>
            <Button onClick={() => setIndex(index + 1)}>네! 0_0</Button>

            <Button onClick={() => setIndex(index + 1)}>아직이요!</Button>
          </div>
        ) : (
          <div className={classes.buttons} />
        )}
      </div>
    </>
  );
}
