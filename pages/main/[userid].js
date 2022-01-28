import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "../main.module.css";
import moment from "moment";
import MainMsgModal from "../../src/components/MainMsgModal";
import MainPresentModal from "../../src/components/MainPresentModal";
import SendCheerModal from "../../src/components/SendCheerModal";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import MainShareModal from "../../src/components/MainShareModal";
import Button from "../../src/components/Button";
import { getMainInfoApi } from "../../src/components/utils/api/mainApi";
import { loginState } from "../../src/components/utils/recoil/states";
import {
  checkgiftApi,
  checkletterApi,
  completeApi,
} from "../../src/components/utils/api/sendApi";
import range from "../../src/components/utils/hooks/range";

export default function Main() {
  const router = useRouter();
  const userId = String(router.query.userid);
  const today = moment().format("D");
  const month = moment().format("M");
  console.log(today, "today");
  const [modalSwitch, setModalSwitch] = useState(false);
  const [modalSwitch2, setModalSwitch2] = useState(false);
  const [modalSwitch3, setModalSwitch3] = useState(false);
  const [modalSwitch4, setModalSwitch4] = useState(false);
  const isLogin = useRecoilValue(loginState);
  const [check, setCheck] = useState(false);
  const [msg, setMsg] = useState([]);

  const [data, setData] = useState({
    name: "가영",
    goal: "2월 잘살기",
    message_list: {
      1: { msg: 3 },
      4: { msg: 7 },
      19: { msg: 3 },
      22: { msg: 7 },
    },
    complete_list: [1, 2, 5, 6, 7],
    total_date: 28,
  });
  const [gift, setGift] = useState([]);
  const [copy, setCopy] = useState(false);

  const { name, goal, message_list, total_date, complete_list } = data;
  const onClickCheck = async () => {
    const res = await completeApi(userId, today, goal);
    console.log(res);
    setCheck(!check);
    console.log(check);
  };
  const onClickToday = async () => {
    console.log("click");
    const res = await checkletterApi(userId, today);
    console.log(res);
    setMsg(res.data.letter_list);
    if (isLogin) setModalSwitch(true);
    console.log(isLogin);
  };
  const onClickPresent = async () => {
    console.log("click");
    const res = await checkgiftApi(userId);
    setGift(res.data.gift_list);
    setModalSwitch2(true);
  };
  const onClickSend = async () => {
    console.log("click");
    setModalSwitch3(true);
  };
  const onClickShare = async () => {
    console.log("click");

    setModalSwitch4(true);
  };
  const getMainInfo = async (userId) => {
    const res = await getMainInfoApi(userId);
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    if (!router.isReady) return;
    getMainInfo(userId);
  }, [router.isReady]);

  return (
    <div className={classes.mainWrapper}>
      {/* <img src={`../light.png`} /> */}
      <div className={classes.title}>
        {name} 님의 {month}월 목표
      </div>
      <div className={classes.goal}>{goal}</div>
      <div className={classes.dateCont}>
        {range(1, total_date).map((idx) => {
          return Number.parseInt(today) > idx ? (
            <div div key={idx}>
              {" "}
              {complete_list.includes(idx) ? (
                <div
                  className={classes.dateWrapper}
                  style={{ position: "relative" }}
                >
                  <div>
                    {" "}
                    <img
                      src={`../openDoors/${idx}.png`}
                      width="40px"
                      height="80px"
                      style={{ opacity: 0.8 }}
                    />
                  </div>
                  <div className={classes.date}>
                    <p>{idx}</p>
                  </div>{" "}
                </div>
              ) : (
                <div
                  className={classes.dateWrapper}
                  style={{ position: "relative" }}
                >
                  <div>
                    {" "}
                    <img
                      src={`../doors/${idx}.png`}
                      width="40px"
                      height="80px"
                      style={{ opacity: 0.2 }}
                    />
                  </div>
                  <div className={classes.date}>
                    <p>{idx}</p>
                  </div>
                </div>
              )}
            </div>
          ) : Number.parseInt(today) === idx ? (
            <div className={classes.dateWrapper} key={idx}>
              {message_list[idx - 1] && (
                <div className={classes.iGotMsg}>
                  <img src={`../image 402.png`} opacity="80%" />
                  <p>{message_list[idx - 1]}</p>
                </div>
              )}
              {check ? (
                <img
                  className={classes.today}
                  onClick={onClickToday}
                  src={`../openDoors/${idx}.png`}
                  width="40px"
                  height="80px"
                />
              ) : (
                <img src={`../doors/${idx}.png`} width="40px" height="80px" />
              )}
            </div>
          ) : (
            <div key={idx} className={classes.dateWrapper}>
              {message_list[idx - 1] && (
                <div className={classes.iGotMsg}>
                  <img src={`../image 402.png`} opacity="100%" />
                  <p>{message_list[idx - 1]}</p>
                </div>
              )}

              <img src={`../doors/${idx}.png`} width="40px" height="80px" />
            </div>
          );
        })}
      </div>

      {isLogin === userId ? (
        <div className={classes.mainFooter}>
          <div onClick={onClickCheck}>
            {check ? (
              <img src="../checkboxs.png" />
            ) : (
              <img src="../empty.png" />
            )}
          </div>
          <CopyToClipboard
            text={"https://lastfrontend.vercel.app/main/" + userId}
            onCopy={() => setCopy(true)}
          >
            <div onClick={onClickShare}>
              {" "}
              <img src="../group.png" />
            </div>
          </CopyToClipboard>
          <div onClick={onClickPresent}>
            <img src="../vector.png" />
          </div>
        </div>
      ) : (
        <div className={classes.falseFooter}>
          <Button onClick={onClickSend}>응원 보내기</Button>
        </div>
      )}

      {modalSwitch ? (
        <MainMsgModal setModalSwitch={setModalSwitch} msg={msg} />
      ) : null}
      {modalSwitch2 ? (
        <MainPresentModal setModalSwitch2={setModalSwitch2} gift={gift} />
      ) : null}
      {modalSwitch4 ? (
        <MainShareModal setModalSwitch4={setModalSwitch4} />
      ) : null}

      {modalSwitch3 ? (
        <SendCheerModal setModalSwitch3={setModalSwitch3} userId={userId} />
      ) : null}
    </div>
  );
}
