import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ProductDetails from "./Pages/ProductDetails";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import App from "./App";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import ThemeContextProvider from "./Context/ThemeContext";



function AppRouters(){
    return(
        <>
        <ThemeContextProvider>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<Products/>} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/Products/:id" element={<ProductDetails/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
        </ThemeContextProvider>
        
      
        </>
    )

};
export default AppRouters;