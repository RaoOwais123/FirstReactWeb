

function Chip({isChosen,title,onClick}){
    return (
        <div onClick={onClick} className={`${isChosen ? "bg-orange-700 text-white" : "bg-white text-black"} 
        cursor-pointer hover:bg-orange-600 inline-block m-2 p-2 w-fit px-4 border border-orange-400 rounded-md`}>
            <h1>{title}</h1>

        </div>
        
      );
    }

export default Chip;