import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { server_url } from "../../../util";
import Password from "../../../components/Password";
import Username from "../../../components/Username";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    passconfirm: "",
  });

  const register = async () => {
    if (user.email && user.password && user.username && user.passconfirm) {
      try {
        delete user.passconfirm;
        let res = await axios.post(`${server_url}/api/auth/signup`, user);
        console.log(res.data);
        if (res.data === "success") {
          alert("success");
          navigate("/signin");
        } else {
          alert("failed");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="flex items-center justify-center py-[130px]">
      <div className="flex flex-col gap-[25px] w-[400px] p-[32px] bg-white bg-[#F7FBFA] rounded-[10px]">
        <div className="flex justify-between items-center">
          <p className="text-[35px]">Sign up</p>
          <Link to="/signin">
            <p className="text-[15px] text-blue-500">
              Already have an account?
            </p>
          </Link>
        </div>
        <div>
          <p className="text-gray text-[15px] pb-[5px]">Email Address</p>
          <Username
            placeholder="Enter your email"
            name="email"
            state={[user, setUser]}
          />
        </div>
        <div>
          <p className="text-gray text-[15px] pb-[5px]">Username</p>
          <Username
            placeholder="Enter your username"
            name="username"
            state={[user, setUser]}
          />
        </div>
        <div>
          <p className="text-gray text-[15px] pb-[5px]">Password</p>
          <Password name="password" state={[user, setUser]} />
        </div>
        <div>
          <p className="text-gray text-[15px] pb-[5px]">Confirm Password</p>
          <Password name="passconfirm" state={[user, setUser]} />
        </div>
        <button
          className="bg-blue-500 text-white text-[20px] text-center rounded-[5px] py-[10px]"
          onClick={register}
        >
          Create Acount
        </button>
      </div>
    </div>
  );
};

export default SignIn;
