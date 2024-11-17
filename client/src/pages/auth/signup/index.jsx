import Button from "../../../components/Button";
import Password from "../../../components/Password";
import Username from "../../../components/Username";
// import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex flex-col gap-[25px] w-[400px] p-[32px] bg-white">
      <div className="flex justify-between">
        <p className="text-[27px] font-bold">Sign up</p>
        {/* <Link> */}
        <p className="text-[15px] text-blue-500">Already have an account?</p>
        {/* </Link> */}
      </div>
      <div>
        <p className="text-gray text-[15px] pb-[5px]">Email Address</p>
        <Username name="Enter your email" />
      </div>
      <div>
        <p className="text-gray text-[15px] pb-[5px]">Username</p>
        <Username name="Enter your username" />
      </div>
      <div>
        <p className="text-gray text-[15px] pb-[5px]">Password</p>
        <Password />
      </div>
      <div>
        <p className="text-gray text-[15px] pb-[5px]">Confirm Password</p>
        <Password />
      </div>
      {/* <Link> */}
      <Button name="create Account" />
      {/* </Link> */}
    </div>
  );
};

export default SignIn;
