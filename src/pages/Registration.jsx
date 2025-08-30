import { useState } from "react";
import { Link, useNavigate } from "react-router";
import formImage from "../assets/SignupFormImage.png";
import Button from "../components/Button"; // Assuming you're using shadcn/ui
import { toast } from "react-toastify";
import axiosInstance from "../api/axiosInstance";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("password", form.password);

    try {
      const res = await axiosInstance.post(
        "/auth/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("User registered:", res.data);
      toast.success("Registration successful!");
      navigate("/verify-email", { state: { email: form.email } });
    } catch (err) {
      console.error("Registration error:", err.response?.data || err);
      toast.error("Error during registration");
    }
  };

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="h-max w-[413px] pb-[40px] rounded-xl overflow-hidden mx-auto my-10 shadow-md bg-white">
        <div className="bg-[#FCF3E9] px-[40px] h-[245px]">
          <div className="flex h-full">
            <div className="pt-[40px]">
              <h1 className="text-2xl font-medium leading-6 my-2">
                First Time Here?
              </h1>
              <h1 className="bg-black text-white w-[100px] text-xl text-center rounded-md leading-6">
                Sign Up & Save Big!
              </h1>
            </div>
            <div className="h-full w-full">
              <img
                className="w-full h-full"
                src={formImage}
                alt="form visual"
              />
            </div>
          </div>
        </div>

        <div className="px-[40px] flex flex-col gap-8 mt-1">
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] font-medium">
             Register Now
            </h1>
            <p className="text-[12px] text-[#787878]">
              Your shopping journey starts here
            </p>
          </div>

          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              className="py-2 px-2 border rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={form.email}
              onChange={handleChange}
              className="py-2 px-2 border rounded-md w-full"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="py-2 px-2 border rounded-md w-full"
              required
            />

            <div className="flex gap-4 items-start">
              <input type="checkbox" id="terms" className="mt-[3px]" required />
              <label htmlFor="terms" className="text-[12px] text-[#787878]">
                By continuing, I agree to the website’s Terms of Use and{" "}
                <span className="text-[#DDAC0E]">Privacy policy.</span>
              </label>
            </div>

            <Button type="submit" className="justify-center py-3">
              Continue
            </Button>
          </form>

          <p className="text-[12px] text-[#898989] self-end">
            Have an account ?{" "}
            <Link
              to="/login"
              className="text-[#DDAC0E] underline font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
