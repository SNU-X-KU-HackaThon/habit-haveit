import Button from "../src/components/Button";
import classes from "./auth.module.css";
import NextLink from "next/link";

const auth = () => {
  return (
    <div className={classes.auth}>
      <div className={classes.buttons}>
        <NextLink href="./login">
          <Button>내 캘린더 보러가기</Button>
        </NextLink>
        <NextLink href="./signup">
          <Button>새로 만들러가기</Button>
        </NextLink>
      </div>
    </div>
  );
};

export default auth;
