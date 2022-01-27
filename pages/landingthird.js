import Head from "next/head";
import Router from "next/router";
import classes from "./landingthird.module.css"
import NextLink from "next/link";
import Button from "../src/components/Button";


export default function landingthird() {

  return (
    <>
      <div className={classes.wrap}>
        <div className={classes.wraptext}>
        <div className={classes.text}>저는 매일 캘린더 속의<br/>달콤한 초콜릿을 하나씩 먹으면서<br/>크리스마스를 기다렸어요...!</div>
        </div>
          <div>
        <img src="../cloud.png" />
        </div>
      </div>
      <div className={classes.landingsecond}>

      </div>

    </>
  );
}
