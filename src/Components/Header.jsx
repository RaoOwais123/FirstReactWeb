import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import Button from "./Button";

function Header(){
    // const navigate = useNavigate();

    // const goToContactUs = ()=>{
    //     navigate("/ContactUs");

    // };
    const {theme, setTheme} = useContext(ThemeContext);

    return(

      

      <header className={`${theme == "light" ? "bg-white text-gray-600" : "bg-gray-600 text-white"} body-font border-b-4 border-blue-500` }>
        
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">
            Tailblocks
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/Login" className="mr-5 hover:text-gray-900">
         Login
          </Link>
          <Link to="/SignUp" className="mr-5 hover:text-gray-900">
         SignUp
          </Link>
          <Link to="/AboutUs" className="mr-5 hover:text-gray-900">
          About Us
          </Link>
          <Link to={'/ContactUs'} className="mr-5 hover:text-gray-900">
          Contact Us
          </Link>
          <Link to="/Products" className="mr-5 hover:text-gray-900">
          Products
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Logout
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <Button onPress={()=>{
          if (theme === "light") {
            setTheme("dark");
          }
          else{
            setTheme("light");
          }
        }} label={theme === "light" ? "Make it Drak" : "Make it light"}/>
      </div>
    </header>
      


    );
}

export default Header;