import { toast } from "react-toastify";
import formImage from "../assets/SignupFormImage.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    try {
      const data = await loginUser({ email, password });
      toast.success("Login Successfully");

      // Save token to localStorage/sessionStorage
      localStorage.setItem("token", data.token);
      //save user id in localstorage
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.message);
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="h-max w-[413px] pb-[40px] rounded-xl overflow-hidden mx-auto my-10 shadow-md bg-white">
        <div className=" bg-[#FCF3E9] px-[40px] h-[245px]">
          <div className="flex h-full">
            <div className="pt-[40px]">
              <h1 className="text-2xl font-medium leading-6 my-2">Welcome</h1>
              <h1 className="bg-black text-white w-[100px] text-xl text-center rounded-md leading-6">
                Log In & Save Big!
              </h1>
            </div>
            <div className="h-full w-full">
              <img className="w-full h-full" src={formImage} alt="" />
            </div>
          </div>
          {/* <div className="flex gap-2">
          <button className="bg-[#FFCB2F] flex-1 py-3 rounded-md">
            Sign up
          </button>
          <button className="bg-[#FFCB2F] flex-1 rounded-md">Log in</button>
        </div> */}
        </div>
        <div className="px-[40px] flex flex-col gap-8 mt-1">
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] font-medium">LaserCut Login</h1>
            <p className="text-[12px] text-[#787878]">
              Enter the World of Precision Art{" "}
            </p>
          </div>
          <form className="flex flex-col gap-8" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              className="py-2 px-2 border rounded-md w-full"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="py-2 px-2 border rounded-md w-full"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button className="justify-center py-3">Continue</Button>
          </form>

          <div className="text-[12px] text-[#898989] flex justify-between items-center">
            <Link
              className="text-[#DDAC0E] text-[13px] cursor-default underline"
              to="/forgot-password"
            >
              Forgot Password ?
            </Link>

            <p>
              New to LaserCut ?{" "}
              <Link
                to="/signup"
                className="text-[#DDAC0E] underline font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
