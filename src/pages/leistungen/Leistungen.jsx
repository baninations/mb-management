import "./style.css";
import Carousel from "../../components/carousel/Carousel";
import PictureComponent from "../../components/picture-component/PictureComponent";
import Card from "../../components/card/Card";
import { card } from "../../data";

const Leistungen = () => {
  return (
    <>
      <main>
        <div className="pics">
          <PictureComponent
            pic={"../src/assets/optimizing-img.jpg"}
            picAlt={"optimizing"}
            className="pic1"
          />
          <PictureComponent
            pic={"../src/assets/background-img.jpg"}
            picAlt={"optimizing"}
          />
          <PictureComponent
            pic={"../src/assets/mb-auto-seite.jpg"}
            picAlt={"optimizing"}
          />
        </div>
        <h1 className="text-3xl font-extrabold">Unsere Leistungen</h1>
        <div className="mt-10">
          {card.map((card) => (
            <Card title={card.title} description={card.description} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Leistungen;
