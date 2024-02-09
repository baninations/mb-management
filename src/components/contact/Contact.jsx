import "./styless.css";

const Contact = (props) => {
  const handleCallClick = () => {
    window.location.href = `${props.type} ${props.contactType}`;
  };
  return (
    <button
      className="border-2 text-center h-28 w-72 bg-green-500 rounded-3xl email-button"
      onClick={handleCallClick}
    >
      {props.message}
    </button>
  );
};

export default Contact;
