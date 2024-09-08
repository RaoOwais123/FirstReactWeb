import { data } from "autoprefixer";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Card from "../Components/Card";
import Chip from "../Components/Chip";
import { ThemeContext } from "../Context/ThemeContext";




function Products() {
const[products, setProducts] = useState([]);
const[category, setCategory] = useState([]);
const[loading, setLoading] = useState(true);
const[chosenCategory, setChosenCategory] = useState("All")
const {theme, setTheme} = useContext(ThemeContext);


useEffect(()=>{

  const url = chosenCategory == "All"
  ? "https://dummyjson.com/products"
  :`https://dummyjson.com/products/category/${chosenCategory}`;
  fetch(url)
  .then((res)=> res.json())
  .then((data)=> {setProducts(data.products)
    setLoading(false)
  })
  .catch(()=> setLoading(false));
},[chosenCategory])

useEffect(()=>{
  fetch("https://dummyjson.com/products/categories")
  .then((res)=> res.json())
  .then((data)=> { setCategory(data);
    setLoading(false);
  })
  .catch(()=> setLoading(false));
},[])

  
return (
  <div className="container mx-auto">
    {loading ? (
      <h1 className="text-center text-3xl">Loading....</h1>
    ):(
      <div>
        <div className=" overflow-x-scroll">
          <Chip isChosen={chosenCategory === "All"} title={"All"}/>
          {category.map((categories)=>(
            <Chip isChosen={chosenCategory === categories.slug}
            onClick ={()=> setChosenCategory(categories.slug) }
            key={categories.slug}
            title={categories.name}/>

          ))}
         
        </div>

        <div className={`flex flex-wrap justify-around ${theme === "light" ? "bg-purple-400" : "bg-gray-600"}`}>
          {products.map((data) => (
            <Card info={data} key={data.id} />
          ))}
        </div>
      </div>
    )}
      
    
  </div>
);
}

export default Products;