import Head from "next/head";
import Router from "next/router";
import classes from "./landingsecond.module.css";
import NextLink from "next/link";
import Button from "../src/components/Button";

export default function landingsecond() {
  return (
    <>
      <div className={classes.wrap}>
        <img src="../cloud.png" />
        <div className={classes.wraptext}>
            여러분은 어드벤트 캘린더를 <br />
            선물받아본 적이 있나요?
        </div>
      </div>
      <div className={classes.landingsecond}>
        <div className={classes.buttons}>
          <NextLink href="./landingthird">
            <Button>네! 0_0</Button>
          </NextLink>
          <NextLink href="./landingthird">
            <Button>아직이요!</Button>
          </NextLink>
        </div>
      </div>
    </>
  );
}
