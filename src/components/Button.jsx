  const Button = ({ children, btnType = "button",onClick ,className}) => {
    return (
      <button
        type={btnType}
        className={`${className?className :"flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-1 rounded-full"} `}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  export default Button;
