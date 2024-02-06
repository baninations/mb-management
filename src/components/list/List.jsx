import "./styles.css";

const List = (props) => {
  return (
    <>
      <div className="p-10 m-2 text-2xl text-center bg-green-400 border-green-400 border-2 rounded-3xl">
        <li className="text-white">{props.items}</li>
      </div>
    </>
  );
};

export default List;
