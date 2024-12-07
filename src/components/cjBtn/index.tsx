import styles from "./index.module.less";
import classNames from "classnames";
const CjBtn = (props) => {
  return (
    <div className={classNames(styles.btn, props.className)}>
      <button onClick={props.onClick}>{props.text}</button>
      <span></span>
    </div>
  );
};
export default CjBtn;
