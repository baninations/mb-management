import "./styles.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect } from "react";
import { useParams } from "react-router";

const Card = (props) => {
  return (
    <div id={`${props.customKey}`} className="card-container">
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
