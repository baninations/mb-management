import "./style.css";

const PictureComponent = (props) => {
  return (
    <>
      <div className={props.className}>
        <img className="picss" src={props.pic} alt={props.picAlt} />
      </div>
    </>
  );
};

export default PictureComponent;
