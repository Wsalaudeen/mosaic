import { Link } from "react-router-dom";
import Google from "../assets/Images/Google.png";
import Apple from "../assets/Images/Apple.png";
import Close from "../assets/Images/close.png";
function Login() {
  return (
    <section className="bg-[#F9F9FA] border-2 border-[#C6C6C6] font-family lg:w-[50%] w-[90%] mx-auto my-20 rounded-xl p-10 text-center relative">
      <Link to="/">
        {" "}
        <img src={Close} alt="close icon" className="absolute right-6" />
      </Link>

      <h1 className="text-[#1B1B1E] font-bold text-3xl mb-4 mt-8">Sign In</h1>
      <p className="text-[#777777] text-sm font-[500] mb-6">
        Welcome Back Explorer!
        <br />
        Let’s Map Out More Memories
      </p>
      <button className="border-[#076879] border-2 bg-[#EDEEF0] w-full flex items-center justify-center gap-3 py-4 rounded-full mb-2 text-sm font-[500]">
        Continue with Google
        <img src={Google} alt="google logo" />
      </button>
      <button className="border-[#076879] border-2 bg-[#EDEEF0] w-full flex items-center justify-center gap-3 py-4 rounded-full text-sm font-[500] mb-8">
        Continue with Apple
        <img src={Apple} alt="apple logo" />
      </button>
      <button className="shadow-xl bg-[#EDEEF0] w-full flex items-center justify-center gap-3 py-4 rounded-full text-sm font-[500] text-[#474747]">
        Continue with Email
      </button>
      <p className="text-[#1B1B1E] text-sm mt-4">
        Don't Have An Account?{" "}
        <Link to="/signup">
          <span className="font-[700] text-sm">Sign Up</span>
        </Link>
      </p>
    </section>
  );
}

export default Login;
