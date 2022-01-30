import React, { useState } from "react";
import ReactDom from "react-dom";
import classes from "./MainPresentModal.module.css";
import Button from "../components/Button";

export default function MainPresentModal({ setModalSwitch2, gift }) {
  const [idx, setIdx] = useState(0);

  return ReactDom.createPortal(
    <div>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <div className={classes.content}>
            <h2>내 선물함</h2>

            <>
              {gift.length === 0 ? (
                <>
                  <p>아직 받은 선물이 없습니다!</p>
                  <div className={classes.presentbutton}>
                    <Button
                      className={classes.button}
                      onClick={() => setModalSwitch2(false)}
                    >
                      {"닫기"}
                    </Button>
                  </div>
                </>
              ) : (
                <div className={classes.mintbox}>
                  <ul>
                    <div className={classes.content}>
                      <h2>From. {gift[idx][0]}</h2>
                      {gift[idx][1] === "붕어빵" ? (
                        <img src="../present2.png"></img>
                      ) : gift[idx][1] === "타코야끼" ? (
                        <img src="../present1.png"></img>
                      ) : gift[idx][1] === "군고구마" ? (
                        <img src="../present3.png"></img>
                      ) : null}
                      <p>{gift[idx][1]}</p>
                    </div>
                    <div className={classes.actions}>
                      {idx !== 0 && (
                        <Button onClick={() => setIdx(idx - 1)}>{"<"}</Button>
                      )}

                      <Button
                        className={classes.button}
                        onClick={() => setModalSwitch2(false)}
                      >
                        {"닫기"}
                      </Button>
                      {idx < gift.length - 1 && (
                        <Button onClick={() => setIdx(idx + 1)}>{">"}</Button>
                      )}
                    </div>
                  </ul>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
