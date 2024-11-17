import { Link, Outlet } from "react-router-dom";
import "../style.css";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-[10px] md:px-[80px] lg:px-[160px] pt-4 h-[120px] bg-blue-100 bg-opacity-20">
        <Link to="/">
          <div className="flex justify-center items-center gap-4 text-[36px]">
            <img src="img/logo192.png" alt="logo" className="w-10 h-10" />{" "}
            <p>TO-DO</p>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-[10px] text-[18px]">
          <Link to="/todo">
            <button className="header-link">Main</button>
          </Link>
          <div className=" flex justify-center items-center gap-[10px]">
            <button className="header-btn h-[40px] bg-blue-100">Sign In</button>
            <button className="header-btn h-[40px] bg-blue-100">Sign Up</button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
