import React, { useState } from "react";
import Router from "next/router";
import classes from "./landingsecond.module.css";
import Button from "../src/components/Button";

export default function Landingsecond() {
  const [index, setIndex] = useState(2);
  return (
    <div
      className={classes.highwrap}
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
      <div className={classes.wrap}>
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
              한달에 하나씩, 나만의 어드벤트 캘린더를 만들고
              <br />
              이달의 목표를 정하고
              <br />
              친구들에게 공유해봐요!
            </div>
          ) : index === 5 ? (
            <div className={classes.text}>
              매일 목표를 달성하면
              <br />
              체크박스를 눌러 문을 열어봐요!
              <br />
              문속에 친구들의 편지가 들어있네요! <br />
              지금부터 한달 목표를 이뤄볼까요?
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
    </div>
  );
}
