import "./style.css";

const Impressium = () => {
  return (
    <div className="text-center mb-10 container mx-auto p-8 bg-white shadow-2xl rounded-md">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2">Impressum</h1>

      <div className="mb-4">
        <strong className="text-lg">Firmenname GmbH</strong>
        <br />
        Musterstraße 123
        <br />
        12345 Musterstadt
        <br />
        Deutschland
      </div>

      <div className="mb-4">
        <strong className="text-lg">Vertreten durch:</strong>
        <br />
        Max Mustermann (Geschäftsführer)
      </div>

      <div className="mb-4">
        <strong className="text-lg">Kontakt:</strong>
        <br />
        Telefon: +49 123 456 789
        <br />
        E-Mail: info@firmenname.de
      </div>

      <div className="mb-4">
        <strong className="text-lg">Registergericht:</strong>
        <br />
        Amtsgericht Musterstadt
      </div>

      <div className="mb-4">
        <strong className="text-lg">Handelsregister:</strong>
        <br />
        HRB 12345
      </div>

      <div className="mb-4">
        <strong className="text-lg">Umsatzsteuer-ID:</strong>
        <br />
        DE123456789
      </div>

      <div className="mb-4">
        <strong className="text-lg">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </strong>
        <br />
        Max Mustermann
        <br />
        Musterstraße 123
        <br />
        12345 Musterstadt
        <br />
        Deutschland
      </div>
    </div>
  );
};

export default Impressium;
