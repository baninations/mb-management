import "./styles.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="informative-card">
        <div className="card-content">
          <div>
            <h2 className="card-title">{props.title}</h2>
          </div>

          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
