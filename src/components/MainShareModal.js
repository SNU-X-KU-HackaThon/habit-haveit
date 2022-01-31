import React from "react";
import ReactDom from "react-dom";
import classes from "./MainShareModal.module.css";
import Button from "../components/Button";
export default function MainShareModal({ setModalSwitch4 }) {
  return ReactDom.createPortal(
    <div>
      <div className={classes.backdrop} onClick={() => setModalSwitch4(false)}>
        <div className={classes.modal}>
          <div className={classes.content}>
            <h3>링크가 복사되었어요! <br/>친구들에게 공유해보세요!</h3>
          </div>
          <div className={classes.actions}>
            <Button onClick={() => setModalSwitch4(false)}>닫기</Button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
