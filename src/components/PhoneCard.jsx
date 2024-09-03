import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import useCart from "../hooks/useCart";

/* eslint-disable react/prop-types */
const PhoneCard = ({ phone }) => {
  const { phone_name, image, price, _id } = phone;
  const axiosSecure = useAxiosPublic();
  const { user } = useAuth();
  const [, refetch] = useCart()

  const handleAddToCart = async (id) => {
    // /my-cart
    const cartInfo = {
      productId: id,
      quantity: 1,
      userInfo: {
        name: user?.displayName,
        email: user?.email,
      },
    };
    try {
      const res = await axiosSecure.post("/my-cart", cartInfo);

      if (res.data.acknowledged) {
        refetch()
        toast.success("Added to cart Successfully!");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="card bg-base-100 rounded-xl duration-500 hover:shadow-xl shadow-2xl group">
      <figure className="mt-4">
        <img
          src={image}
          alt="Shoes"
          className="group-hover:scale-110 duration-1000"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title dark:text-gray-200">{phone_name}</h2>
        <p className="flex items-center gap-2">
          Price:{" "}
          <span className="flex items-center text-red-500 font-semibold">
            {price}
            <TbCurrencyTaka size={20} />
          </span>
        </p>
        <div className="card-actions justify-start gap-4">
          <button
            className="btn bg-black hover:bg-black hover:scale-105 duration-1000 text-white"
            onClick={() => handleAddToCart(_id)}
          >
            <MdOutlineShoppingCart size={20} />
            Add Cart
          </button>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-transparent border-2 border-black text-black hover:scale-105 duration-1000 hover:bg-transparent hover:border-2 hover:border-black font-semibold dark:text-white">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
