import Lottie from "lottie-react";
import login from "../../../public/login.json";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import SocialLogin from "../../shared/components/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setDisabled(false);
  }

  return (
    <div className="py-16">
      <Helmet>
        <title>AstraGadgets / Sign In</title>
      </Helmet>
      <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-900 mx-auto max-w-sm lg:max-w-full">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundColor: "gray",
          }}
        >
          <Lottie animationData={login} loop={true} />;
        </div>
        <div className="w-full p-8 lg:w-1/2">
          <Link
            to="/"
            className="flex items-center justify-center mb-8 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AstraGadgets
            </span>
          </Link>
          <p className="text-xl text-gray-600 text-center dark:text-gray-200">
            Welcome back!
          </p>
          <SocialLogin />
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <p className="text-xs text-center text-gray-500 dark:text-gray-200 uppercase">
              or login with email
            </p>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <div className="relative">
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <span
                  className="absolute right-4 bottom-2"
                  onClick={handleToggle}
                >
                  <Icon
                    // class="absolute mr-10"
                    icon={icon}
                    size={25}
                  />
                </span>
              </div>
            </div>
            <ReCAPTCHA
              sitekey="6Le62AQqAAAAAFUTkoqs5puIqO8aHfQRBMLOpeIM"
              className="mt-8"
              onChange={onChange}
            />
            <div className="mt-8">
              <input
                type="submit"
                className="btn bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 dark:bg-green-500"
                disabled={disabled}
                value="Login"
              />
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/sign-up" className="text-xs text-gray-500 uppercase">
              or sign up
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
