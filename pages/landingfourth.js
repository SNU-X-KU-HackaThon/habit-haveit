import Head from "next/head";
import Router from "next/router";
import classes from "./landingthird.module.css"
import NextLink from "next/link";
import Button from "../src/components/Button";


export default function landingfourth() {

  return (
    <>
      <div className={classes.wrap}>
        <div className={classes.wraptext}>
        <div className={classes.text}>그런데 다가오는 2월도<br/>12월처럼 설레는 마음으로<br/>보낼 수는 없는걸까요?</div>
        </div>
          <div>
        <img src="../cloud.png" />
        </div>
      </div>

    </>
  );
}
