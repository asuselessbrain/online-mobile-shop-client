import { Helmet } from "react-helmet";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import Lottie from "lottie-react";
import signUp from "../../../public/signUp.json";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [confType, setConfType] = useState("password");
  const [confIcon, setConfIcon] = useState(eyeOff);

  const image_hosting_api = import.meta.env.VITE_Imagebb_API_KEY;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosting_url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const { name, email, password } = data;

    

    console.log(name, email, password, res.data.data.display_url);
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleToggleConfirmPassword = () => {
    if (confType === "password") {
      setConfIcon(eye);
      setConfType("text");
    } else {
      setConfIcon(eyeOff);
      setConfType("password");
    }
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <Helmet>
        <title>AstraGadgets / Sign Up</title>
      </Helmet>
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-8 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-20" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                          AstraGadgets
                        </span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p className="mb-4">Please register an account</p>
                      {/* <!--Username input--> */}
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <div className="mt-4">
                          <label className="block text-gray-700 dark:text-gray-200 text-md font-bold mb-2">
                            Full Name
                          </label>
                          <input
                            className="bg-gray-200 mb-2 text-gray-700 dark:text-gray-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            placeholder="Enter Your Name"
                            type="text"
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <span className="text-red-500">
                              Name is required
                            </span>
                          )}
                        </div>
                      </div>
                      {/* email input */}
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <div className="mt-4">
                          <label className="block text-gray-700 dark:text-gray-200 text-md font-bold mb-2">
                            Email Address
                          </label>
                          <input
                            className="bg-gray-200 text-gray-700 mb-2 dark:text-gray-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            placeholder="Enter Your Email"
                            type="email"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="text-red-500">
                              Email is required
                            </span>
                          )}
                        </div>
                      </div>

                      {/* <!--Password input--> */}
                      <div className="mt-4">
                        <div className="flex justify-between">
                          <label className="block text-gray-700 dark:text-gray-200 text-md font-bold mb-2">
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            className="bg-gray-200 text-gray-700 dark:text-gray-800 mb-2 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type={type}
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                          />
                          <span
                            className="absolute right-4 bottom-2"
                            onClick={handleToggle}
                          >
                            <Icon class="text-black" icon={icon} size={25} />
                          </span>
                        </div>
                        {errors.password && (
                          <span className="text-red-500">
                            Password is required
                          </span>
                        )}
                      </div>

                      {/* confirm password */}
                      <div className="mt-4">
                        <div className="flex justify-between">
                          <label className="block text-gray-700 dark:text-gray-200 text-md font-bold mb-2">
                            Confirm Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            className="bg-gray-200 text-gray-700 mb-2 dark:text-gray-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type={confType}
                            name="confPassword"
                            placeholder="Confirm Password"
                            autoComplete="current-password"
                            {...register("confirmPassword", { required: true })}
                          />

                          <span
                            className="absolute right-4 bottom-2 cursor-pointer"
                            onClick={handleToggleConfirmPassword}
                          >
                            <Icon
                              className="text-black"
                              icon={confIcon}
                              size={25}
                            />
                          </span>
                        </div>
                        {errors.confirmPassword && (
                          <span className="text-red-500">
                            Confirm Password is required
                          </span>
                        )}
                      </div>

                      {/* image input */}
                      <div className="mt-4">
                        <label className="block text-gray-700 dark:text-gray-200 text-md font-bold mb-2">
                          Image
                        </label>
                        <input
                          type="file"
                          className="file-input mb-2 w-full"
                          {...register("image", { required: true })}
                        />
                        {errors.image && (
                          <span className="text-red-500">
                            Image is required
                          </span>
                        )}
                      </div>
                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <input
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mt-4"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          type="submit"
                          value="Sign up"
                        />
                        {/* <!--Forgot password link--> */}
                        <a href="#!">Terms and conditions</a>
                      </div>
                    </form>

                    {/* <!--Register button--> */}
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 me-2">Have an account?</p>
                      <Link
                        to="/login"
                        className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <Lottie animationData={signUp} loop={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
