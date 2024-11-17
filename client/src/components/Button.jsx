const Button = (props) => {
  return (
    <button className="bg-blue-500 text-white text-[20px] text-center rounded-[5px] py-[10px]">
      {props.name}
    </button>
  );
};

export default Button;
