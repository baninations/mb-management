import "./style.css";
import ContactForm from "../../components/contact-form/ContactForm";

const Kontakt = () => {
  return (
    <div className="m-32 flex justify-center">
      <div className="contactUsStyle">
        <h1 className="text-2xl mb-6">Kontaktieren Sie uns</h1>
        <p>
          Zögern Sie nicht, uns über die unten stehenden Kontaktdaten zu
          erreichen oder das Kontaktformular auszufüllen.
        </p>

        <div className="mb-10">
          <h1 className="text-2xl mt-10 mb-6">Kontakt Information</h1>
          <p>Email: info@mb-managment.de</p>
          <p>Handy: 01725319702</p>
          <p>Address: Nienburg</p>
        </div>

        <div>
          <h1 className="text-2xl mb-6">Kontaktformular</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
