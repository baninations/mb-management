import "./style.css";
import { Carousel } from "flowbite-react";
import Contact from "../../components/contact/Contact";
import List from "../../components/list/List";
import { FaLongArrowAltDown } from "react-icons/fa";
import { card } from "../../data";
import { Link, NavLink } from "react-router-dom";
import Experience from "../../components/experience/Experience";

const Main = () => {
  return (
    <>
      <main className="flex flex-col items-center m-0 p-0">
        <div className="w-screen mt-10 h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>

        <div className="md:w-4/6 sm:w-100wv  flex flex-col justify-center items-center">
          <h1 className="mt-10 text-4xl">MB Abfallmanagement</h1>
          <p className=" m-10">
            Herzlich willkommen bei Ihrem verlässlichen Partner für sämtliche
            Anliegen im Bereich der Abfallwirtschaft. Unser Ziel ist es, Ihnen
            zu helfen, Geld zu sparen, und gleichzeitig erstklassigen Service
            anzubieten.
          </p>

          <Experience />

          <h1 className="m-10 text-2xl">Kontaktieren sie uns!</h1>
          {/* <p className="mb-10">Arrow downwards</p> */}
          <div>
            <div className="mb-2 w-screen flex justify-around">
              <FaLongArrowAltDown />
              <FaLongArrowAltDown />
            </div>
            <div className="w-screen flex justify-around">
              <Contact
                message="01721234567"
                type="tel:"
                contactType="01721234567"
              />

              <Contact
                message="info@mb-abfallmanagement.de"
                type="mailto:"
                contactType="info@mb-abfallmanagement.de"
              />
            </div>
          </div>
          <p className="mt-10 text-center text-xl">
            Wir schicken Ihnen ein persönliches Angebot.
          </p>
        </div>
        <ul className="mt-10">
          {card.map((item, index) => (
            <NavLink key={index} to={`/leistungen#${index}`}>
              <List key={index} items={item.title} customKey={index} />
            </NavLink>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Main;
