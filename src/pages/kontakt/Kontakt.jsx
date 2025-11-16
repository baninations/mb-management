import "./style.css";
import ContactForm from "../../components/contact-form/ContactForm";

const Kontakt = () => {
  return (
    <div className="sm:mt-10 flex justify-center mb-10">
      <div className="contactUsStyle">
        <h1 className="text-2xl mb-6">Kontaktieren Sie uns</h1>
        <p>
          Zögern Sie nicht, uns über die unten stehenden Kontaktdaten zu
          erreichen oder das Kontaktformular auszufüllen.
        </p>

        <div className="mb-10">
          <h1 className="text-2xl mt-10 mb-6">Kontakt Information</h1>
          <p>Email: info@grünreinheit.de</p>
          <p>Handy: 01721234567</p>
          <p>
            Address: GrünReinheit Abfallmanagement, Musterstraße 123, 12345
            Musterstadt
          </p>
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
