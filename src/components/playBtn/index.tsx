import styles from "./index.module.less";
import classNames from "classnames";
const PlayBtn = (props) => {
  function a() {
    console.log(props.onClick);
  }
  return (
    <div
      className={classNames(styles.PlayBtn, props.className)}
      onClick={props.onClick}
    >
      <div className={styles.wrapper}>
        <button>
          {props.text}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default PlayBtn;
