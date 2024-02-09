import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex sm:flex-row">
      <div className="logo flex flex-col justify-center items-center relative z-10">
        <img
          className="mt-20 w-4/6 h-7/12 sm:mt-0 rounded-2xl sm:w-42 sm:h-16 lg:w-64 lg:h-24 "
          src="../src/assets/logo.png"
          alt="Logo"
        />
      </div>

      <nav className="nav-bar w-screen h-16 flex sm:justify-end justify-center items-center fixed sm:static top-0 left-0 bg-white z-50 sm:shadow-none shadow-md">
        <ul>
          <li>
            <NavLink className="" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/leistungen">
              Leistungen
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/impressium">
              Impressium
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/kontakt">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

//////////////////////////////////////////////

// import { Link, NavLink } from "react-router-dom";
// import "./style.css";

// const Header = () => {
//   return (
//     <header>
//       <div className="logo">
//         <img
//           className="rounded-2xl w-42 h-16 lg:w-64 lg:h-24 "
//           src="../src/assets/logo.png"
//           alt="Logo"
//         />
//       </div>

//       <nav className="h-16 flex justify-center items-center">
//         <ul>
//           <li>
//             <NavLink className="hidden sm:block" to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="hidden sm:block" to="/leistungen">
//               Leistungen
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="hidden sm:block" to="/impressium">
//               Impressium
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="hidden sm:block" to="/kontakt">
//               Kontakt
//             </NavLink>
//           </li>
//           <li>
//             <input className="sm:hidden" type="checkbox" />
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };
// export default Header;
