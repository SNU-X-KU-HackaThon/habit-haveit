import React, { useState } from "react";
import Router from "next/router";
import classes from "./landingsecond.module.css";
import Button from "../src/components/Button";

export default function Landingsecond() {
  const [index, setIndex] = useState(2);
  const [check, setCheck] = useState(false);
  return (
    <div
      className={classes.highwrap}
      onClick={() => {
        if (index === 2) {
          console.log("hi");
        } else {
          if (index === 9) {
            console.log("hi");
            Router.push("/auth");
          } else {
            console.log(index);
            setIndex(index + 1);
          }
        }
      }}
    >
      <div className={classes.wrap}>
        {index === 2 ? (
          <img src="../landing1.png" />
        ) : index === 3 ? (
          <img src="../landing2.png" />
        ) : index === 4 ? (
          <img src="../landing3.png" />
        ) : index === 5 ? (
          <img src="../landing4.png" />
        ) : index === 6 ? (
          <img src="../landing5.png" />
        ) : index === 7 ? (
          <img src="../landing6.png" />
        ) : index === 8 ? (
          <img src="../landing7.png" />
        ) : index === 9 ? (
          <img src="../landing8.png" />
        ) : null}
      </div>
      <div className={classes.landingsecond}>
        {index === 2 ? (
          <div className={classes.buttons}>
            <Button
              onClick={() => {
                setIndex(index + 2);
                console.log(index);
              }}
            >
              네! 0_0
            </Button>

            <Button onClick={() => setIndex(index + 1)}>아직이요!</Button>
            <Button onClick={() => Router.push("/auth")}>스킵할래요!</Button>
          </div>
        ) : index === 3 || index === 4 ? (
          <div className={classes.buttons}>
            <img src="../adventcalendar.gif" />
          </div>
        ) : index === 5 ? (
          <div className={classes.mainFooter}>
            <div>
              {check ? (
                <img style={{ opacity: 0.2 }} src="../checkboxs.png" />
              ) : (
                <img style={{ opacity: 0.2 }} src="../empty.png" />
              )}
            </div>

            <div>
              {" "}
              <img src="../group.png" />
            </div>

            <div>
              <img style={{ opacity: 0.2 }} src="../vector.png" />
            </div>
          </div>
        ) : index === 7 ? (
          <>
            {check ? (
              <img
                style={{ zIndex: 100 }}
                src={`../openDoors/1.png`}
                width="80px"
                height="160px"
              />
            ) : (
              <img
                style={{ zIndex: 100 }}
                src={`../doors/1.png`}
                width="80px"
                height="160px"
              />
            )}
            <div className={classes.mainFooter}>
              <div>
                {check ? (
                  <img src="../checkboxs.png" />
                ) : (
                  <img src="../empty.png" />
                )}
              </div>

              <div>
                {" "}
                <img style={{ opacity: 0.2 }} src="../group.png" />
              </div>

              <div>
                <img style={{ opacity: 0.2 }} src="../vector.png" />
              </div>
            </div>
          </>
        ) : index === 8 ? (
          <div className={classes.mainFooter}>
            <div>
              {check ? (
                <img style={{ opacity: 0.2 }} src="../checkboxs.png" />
              ) : (
                <img style={{ opacity: 0.2 }} src="../empty.png" />
              )}
            </div>

            <div>
              {" "}
              <img style={{ opacity: 0.2 }} src="../group.png" />
            </div>

            <div>
              <img src="../vector.png" />
            </div>
          </div>
        ) : (
          <div className={classes.buttons} />
        )}
      </div>
    </div>
  );
}
