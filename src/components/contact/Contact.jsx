import "./styles.css";
import { Button } from "flowbite-react";

const Contact = (props) => {
  const handleCallClick = () => {
    window.location.href = `${props.type} ${props.contactType}`;
  };
  return (
    <button
      className="border-2 text-center h-28 w-72 bg-green-500 rounded-3xl text-white"
      onClick={handleCallClick}
    >
      {props.message}
    </button>
    // <Button className="" onClick={handleCallClick} pill>
    //   {props.message}
    // </Button>
  );
};

export default Contact;

//////////////////////////////////////

// return (
//     <>
//       <div onClick={handleCallClick} className="email-button">
//         <p>{props.message}</p>
//       </div>
//     </>
//   );
