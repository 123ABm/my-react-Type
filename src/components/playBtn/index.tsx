import "./index.less";

const PlayBtn = (props) => {
  return (
    <div className="PlayBtn">
      <div class="wrapper">
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
