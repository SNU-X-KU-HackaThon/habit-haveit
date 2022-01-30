import React, { useState } from "react";
import classes from "./InviteModal.module.css";

import Router from "next/router";
import Button from "./Button";

const InviteModal = ({ setInviteState, name }) => {
  const [idx, setIdx] = useState(0);
  return (
    <div>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          {idx === 1 ? (
            <>
              {" "}
              <header className={classes.header}>
                <h2></h2>
              </header>
              <div className={classes.content}>
                <h3>
                  {name}님의 어드벤트 캘린더에 <br />
                  맛있는 선물과 &#127840; <br />
                  응원의 메세지를 넣어주세요!
                </h3>
              </div>
              <footer className={classes.actions}>
                <Button onClick={() => setInviteState(false)}>
                  빨리 구경가요!!
                </Button>
              </footer>
            </>
          ) : (
            <>
              <header className={classes.header}>
                <h2>반가워요:)</h2>
              </header>
              <div className={classes.content}>
                <h3>
                  {name}님의 한달 목표가 담긴
                  <br />
                  어드벤트 캘린더에 초대받으셨군요!
                </h3>
              </div>
              <footer className={classes.actions}>
                <Button onClick={() => setIdx(1)}>너무 신나요..</Button>
              </footer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InviteModal;
