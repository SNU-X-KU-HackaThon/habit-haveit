import React, { useState } from "react";
import ReactDom from "react-dom";
import classes from "./MainMsgModal.module.css";
import Button from "../components/Button";

export default function MainMsgModal({ setModalSwitch, msg }) {
  const [idx, setIdx] = useState(0);
  console.log(msg);
  return ReactDom.createPortal(
    <div>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          {msg.length > 0 ? (
            <>
              {" "}
              <div className={classes.content}>
                <h2>오늘의 응원 편지</h2>
                <p>{msg[idx][1]}</p>
                <p>From. {msg[idx][0]}</p>
              </div>
              <div className={classes.actions}>
                {idx !== 0 && (
                  <Button onClick={() => setIdx(idx - 1)}>{"<"}</Button>
                )}

                <Button
                  className={classes.button}
                  onClick={() => setModalSwitch(false)}
                >
                  {"x"}
                </Button>
                {idx < msg.length - 1 && (
                  <Button onClick={() => setIdx(idx + 1)}>{">"}</Button>
                )}
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className={classes.content2}>
                <h3>오늘의 응원 편지가 없습니다!</h3>
                <Button
                  className={classes.button}
                  onClick={() => setModalSwitch(false)}
                >
                  닫기
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
