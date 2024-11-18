import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server_url } from "../../../util";
import Password from "../../../components/Password";
import Username from "../../../components/Username";
import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    if (user.email && user.password) {
      try {
        let res = await axios.post(`${server_url}/api/auth/signin`, user);
        // console.log(res.data);
        if (res.data.msg === "success") {
          alert("success");
          navigate("/todo");
          console.log(res.data);
        } else {
          alert("failed");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="flex items-center justify-center py-[190px]">
      <div className="flex flex-col gap-[25px] w-[400px] p-[32px] bg-[#F7FBFA] rounded-[10px]">
        <div className="flex justify-between items-center">
          <p className="text-[35px]">Log in</p>
          <Link to="/signup">
            <p className="text-[15px] text-blue-500">Don't have account?</p>
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
        {/* <div>
          <p className="text-gray text-[15px] pb-[5px]">Username</p>
          <Username
            placeholder="Enter your username"
            name="username"
            state={[user, setUser]}
          />
        </div> */}
        <div>
          <p className="text-gray text-[15px] pb-[5px]">Password</p>
          <Password name="password" state={[user, setUser]} />
        </div>
        <button
          className="bg-blue-500 text-white text-[20px] text-center rounded-[5px] py-[10px]"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
