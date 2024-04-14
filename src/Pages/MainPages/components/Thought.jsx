import ThoughtPicURL from "../../../Assets/Thought.png";

const Thought_UI = (props) => {
  // let intFrameWidth = props.intFrameWidth;
  return (
    <div className="divThought">
      <img src={ThoughtPicURL} alt="" />
      <h2>
        以人為本的設計思維
        <br />
        創造舒適、貼心的產品服務
        <br />
        專注細節與合理性
      </h2>
    </div>
  );
};

export default Thought_UI;
