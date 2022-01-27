import Head from "next/head";
import Router from "next/router";
import classes from "./landingthird.module.css"
import NextLink from "next/link";
import Button from "../src/components/Button";


export default function landingfifth() {

  return (
    <>
      <div className={classes.wrap}>
        <div className={classes.wraptext}>
        <div className={classes.text}>친구들의 달콤한 응원과 함께<br/>매일 문을 하나씩 열면서 <br/>한달 목표를 함께 이뤄볼까요?</div>
        </div>
          <div>
        <img src="../cloud.png" />
        </div>
      </div>

    </>
  );
}
