import moment from "moment";
import React, { useState } from "react";
import ReactDom from "react-dom";
import Router from "next/router";
import Button from "../components/Button";
import classes from "./SendCheerModal.module.css";
import range from "./utils/hooks/range";
import { sendApi } from "./utils/api/sendApi";

export default function SendCheerModal({ setModalSwitch3, userId }) {
  const [step, setStep] = useState(1);
  // const [letterChange,setLetterChange] = useState(false)

  // const letterChangeHandler = (e) => {
  //   e.preventdefault;
  //   setLetterChange(!letterChange);
  // }

  const today = moment().format("D");
  console.log(userId);
  const [input, setInput] = useState({
    sender: "",
    sendType: "LETTER",
    letterDate: today,
    presentType: "붕어빵",
    letterContent: "",
  });
  const onClickNext = async (
    userId,
    sender,
    sendType,
    letterContent,
    letterDate,
    presentType
  ) => {
    if (step === 4) {
      console.log(
        userId,
        sender,
        sendType,
        letterContent,
        letterDate,
        presentType
      );
      const res = await sendApi(
        sender,
        userId,
        sendType,
        letterDate,
        presentType,
        letterContent
      );

      console.log(res);
    }
    if (step === 5) {
      setModalSwitch3(false);
      Router.push("/auth");
    }

    if (step === 3 && sendType === "PRESENT") {
      console.log(
        userId,
        sender,
        sendType,
        letterContent,
        letterDate,
        presentType
      );
      const res = await sendApi(
        sender,
        userId,
        sendType,
        letterDate,
        presentType,
        letterContent
      );

      console.log(res);
      setStep(step + 2);
    } else setStep(step + 1);
  };

  const { sender, sendType, letterContent, letterDate, presentType } = input;
  const onChange = (e) => {
    const { name, value } = e.target;
    const copy = { ...input };
    copy[name] = value;
    console.log(copy);
    setInput(copy);
  };
  const onClick = (type) => {
    const copy = { ...input };
    copy["sendType"] = type;
    console.log(copy);
    setInput(copy);
  };

  return ReactDom.createPortal(
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.content}>
          {step === 5 && (
            <div
              className={classes.cancel}
              onClick={() => setModalSwitch3(false)}
            >
              x
            </div>
          )}
          {step === 1 ? (
            <>
              <p>2월의 응원을 보내시는 분은 누구신가요?</p>
              <input
                type="text"
                onChange={onChange}
                name="sender"
                value={sender}
              />
            </>
          ) : step === 2 ? (
            <>
              <p>선물을 할까요, 편지를 쓸까요?</p>
              <div className={classes.whatitem}>
                <img
                  className={classes.newletter}
                  onClick={() => onClick("LETTER")}
                  src={`../letternew.png`}
                />

                <img
                  className={classes.present}
                  onClick={() => onClick("PRESENT")}
                  src={`../present.png`}
                />
              </div>
              <div>{sendType === "PRESENT" ? "선물" : "편지"}</div>
            </>
          ) : step === 3 ? (
            sendType === "LETTER" ? (
              <>
                <p>편지를 보낼 날짜를 골라주세요</p>
                <select
                  className={classes.select}
                  onChange={onChange}
                  name="letterDate"
                >
                  {range(today, 28).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <>
                <p>선물을 골라주세요</p>
                <select
                  className={classes.select}
                  onChange={onChange}
                  name="presentType"
                >
                  {[
                    {
                      item: "붕어빵",
                      key: 0,
                    },
                    {
                      item: "타코야끼",
                      key: 1,
                    },
                    {
                      item: "군고구마",
                      key: 2,
                    },
                  ].map((item) => (
                    <option key={item.key} value={item.item}>
                      {item.item}
                    </option>
                  ))}
                </select>
                {presentType === "붕어빵" ? (
                  <img src="../present2.png"></img>
                ) : presentType === "타코야끼" ? (
                  <img src="../present1.png"></img>
                ) : presentType === "군고구마" ? (
                  <img src="../present3.png"></img>
                ) : null}
              </>
            )
          ) : step === 4 ? (
            <>
              <p>편지를 작성해주세요</p>
              <input
                type="text"
                onChange={onChange}
                name="letterContent"
                value={letterContent}
              />
            </>
          ) : step === 5 ? (
            <>
              <p>
                성공적으로
                {sendType === "LETTER" ? "편지가" : "선물이"}
                전송되었어요!{" "}
              </p>
              <img src="../presente.gif" width="192px" />
            </>
          ) : null}
        </div>

        <div className={classes.actions}>
          <Button
            onClick={() =>
              onClickNext(
                userId,
                sender,
                sendType,
                letterContent,
                letterDate,
                presentType
              )
            }
          >
            {step === 5 ? "나도 만들러 가기" : "다음"}
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
