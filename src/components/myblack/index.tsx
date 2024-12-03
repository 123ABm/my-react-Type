import styles from "./index.module.less";
import classNames from "classnames";
const Myblack = (props) => {
  return (
    <>
      <div className={classNames(styles.myblack, props.className)}></div>
    </>
  );
};
export default Myblack;
