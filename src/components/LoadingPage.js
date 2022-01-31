import classes from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.LoadingWrapper}>
      <img src="../loading.gif" />
    </div>
  );
};

export default LoadingPage;
