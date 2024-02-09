import "./style.css";
import Carousel from "../../components/carousel/Carousel";
import PictureComponent from "../../components/picture-component/PictureComponent";
import Card from "../../components/card/Card";
import { card } from "../../data";
import { NavLink } from "react-router-dom";

const Leistungen = () => {
  return (
    <>
      <main>
        <div className="pics">
          <PictureComponent
            pic={"../src/assets/optimizing-img.jpg"}
            picAlt={"optimizing"}
            className="pic1 pic99"
          />
          <PictureComponent
            pic={"../src/assets/background-img.jpg"}
            picAlt={"optimizing"}
            className="pic99"
          />
          <PictureComponent
            pic={"../src/assets/mb-auto-seite.jpg"}
            picAlt={"optimizing"}
            className="pic99"
          />
        </div>
        <h1 className="text-3xl font-extrabold">Unsere Leistungen</h1>
        <div className="mt-10">
          {card.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              customKey={index}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Leistungen;
