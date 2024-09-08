function Button({onPress, label}){
    return(
        <button  className='btn  px-4 bg-purple-400 p-2 text-white rounded font-medium text-center mx-4' onClick={onPress} >{label}</button>
    );
}

export default Button;