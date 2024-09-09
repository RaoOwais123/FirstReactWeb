import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import Button from "./Button";
import { AuthContext } from "../Context/AuthContext";
import { Avatar, User } from "@nextui-org/react";
import { h1 } from "framer-motion/client";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";

function Header(){
    // const navigate = useNavigate();

    // const goToContactUs = ()=>{
    //     navigate("/ContactUs");

    // };
    const{user, setUser} = useContext(AuthContext);
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(user);

    const handleUserLogout = async ()=>{
       await signOut(auth);
    }

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
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          
          <Link to="/AboutUs" className="mr-5 hover:text-gray-900">
          About Us
          </Link>
          <Link to={'/ContactUs'} className="mr-5 hover:text-gray-900">
          Contact Us
          </Link>
          <Link to="/Products" className="mr-5 hover:text-gray-900">
          Products
          </Link>
          {
            user?.isLogin ?
            <h1 className="mr-5">{user?.userInfo?.name}</h1>
            :
            <Link to="/Login" className="mr-5 hover:text-gray-900">
         Login
          </Link>
          }
        
          {
            user?.isLogin ?
            <Avatar className="mr-5" src={user?.userInfo?.photoUrl}
            size="md"/>
            :
            <Link to="/SignUp" className="mr-5 hover:text-gray-900">
         SignUp
          </Link>
          }

{
          user.isLogin ?(
            <Button  label={"Logout"} onclick={handleUserLogout} />

          ):(
            <div></div>
          )
        }
       
        <Button  onPress={()=>{
          if (theme === "light") {
            setTheme("dark");
          }
          else{
            setTheme("light");
          }
        }} label={theme === "light" ? "Make it Drak" : "Make it light"} />
        </nav>
        
      </div>
    </header>
      


    );
}

export default Header;