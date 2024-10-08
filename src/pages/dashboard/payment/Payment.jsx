import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { TbCurrencyTaka } from "react-icons/tb";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publishable_Key);

const Payment = ({ isOpen, closeModal, totalPrice, cartData }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-gray-900 mb-6 text-center"
                >
                  Confirm Order
                </Dialog.Title>

                {cartData.map((item) => (
                  <div key={item._id} className="flex items-center gap-1 mb-1">
                    <h3 className="text-lg font-semibold">
                      {item.orderDetails.phone_name}
                    </h3>{" "}
                    <p>({item.quantity})</p>
                  </div>
                ))}

                <div className="text-red-500 mb-6 flex items-center">
                  <h2>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Total Price:{" "}
                    </span>
                    {totalPrice}
                  </h2>
                  <TbCurrencyTaka size={24} />
                </div>

                <Elements stripe={stripePromise}>
                  <PaymentForm closeModal={closeModal} />
                </Elements>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Payment;
