import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [contactShow, setContactShow] = useState(true);
  const [shippingShow, setShippingShow] = useState(false);
  const [paymentShow, setPaymentShow] = useState(false);
  const handleContact = () => {
    setContactShow(!shippingShow);
    setShippingShow(false);
    setPaymentShow(false);
  };
  const handleShipping = () => {
    setContactShow(false);
    setPaymentShow(false);
    setShippingShow(!shippingShow);
  };
  const handlePayment = () => {
    setContactShow(false);
    setShippingShow(false);
    setPaymentShow(!shippingShow);
  };
  return (
    <div className="container py-16 md:py-20 lg:py-24 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
        <div className="border-2 p-4">
          <div>
            <div className="flex mb-10 items-center text-gray-500 hover:text-gray-600 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <Link to="/cart" className="text-sm pl-2 leading-none">
                Back to cart
              </Link>
            </div>
            <p className="text-4xl font-medium  leading-10 text-gray-800 pt-3">Checkout</p>
            <p className="text-gray-700 mt-2">
              <small>Homepage/Cart/Checkout</small>
            </p>
          </div>
          {/*  */}
          <div className="border mt-10 border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden z-0">
            <div class="flex flex-col sm:flex-row items-start p-6 ">
              <span class="hidden sm:block">
                <svg class="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div class="sm:ml-8">
                <h3 class=" text-slate-700 dark:text-slate-300 flex ">
                  <span class="uppercase tracking-tight">CONTACT INFO</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100 "
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                </h3>
                <div class="font-semibold mt-1 text-sm">
                  <span class="">Enrico Smith</span>
                  <span class="ml-3 tracking-tighter">+855 - 666 - 7744</span>
                </div>
              </div>
              <button
                onClick={handleContact}
                class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2 px-4   ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800  mt-5 sm:mt-0 sm:ml-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              >
                Change
              </button>
            </div>

            {/* conditionally open */}
            {contactShow && (
              <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 block">
                <div class="flex justify-between flex-wrap items-baseline">
                  <h3 class="text-lg font-semibold">Contact information</h3>
                  <span class="block text-sm my-1 md:my-0">
                    Do not have an account?{" "}
                    <Link to="/login" class=" text-blue-400 font-medium">
                      Log in
                    </Link>
                  </span>
                </div>
                {/*  */}
                <div class="max-w-lg">
                  <label class=" text-base font-medium text-neutral-900 dark:text-neutral-200 " data-nc-id="Label">
                    Your phone number
                  </label>
                  <input
                    type="email"
                    class="block py-2 px-4 border-gray-100 w-full rounded-3xl mt-2 focus:outline-none border-2"
                    placeholder="+8820256*"
                  />
                </div>{" "}
                <div class="max-w-lg">
                  <label class=" text-base font-medium text-neutral-900 dark:text-neutral-200 " data-nc-id="Label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="block py-2 px-4 border-gray-100 w-full rounded-3xl mt-2 focus:outline-none border-2"
                    placeholder="Your email"
                  />
                </div>
                <div className=" space-x-0 lg:space-x-4 space-y-4">
                  <button onClick={() => setContactShow(false)} className="bg-black text-gray-100 rounded-3xl py-3 px-5">
                    Save and next to shipping
                  </button>
                  <button onClick={() => setContactShow(false)} className="bg-gray-200 text-black rounded-3xl py-3 px-5">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          {/*  */}
          <div className="border mt-10 border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden z-0">
            <div class="flex flex-col sm:flex-row items-start p-6 ">
              <span class="hidden sm:block">
                <svg class="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div class="sm:ml-8">
                <h3 class=" text-slate-700 dark:text-slate-300 flex ">
                  <span class="uppercase tracking-tight">SHIPPING ADDRESS</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100 "
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                </h3>
                <div class="font-semibold mt-1 text-sm">
                  <span class="">St. Paul's Road, Norris, SD 57560, Dakota, USA</span>
                </div>
              </div>
              <button
                onClick={handleShipping}
                class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2 px-4   ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800  mt-5 sm:mt-0 sm:ml-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              >
                Change
              </button>
            </div>

            {/* conditionally open */}
            {shippingShow && (
              <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 block">
                <div class="flex justify-between flex-wrap items-baseline">
                  <h3 class="text-lg font-semibold">Contact information</h3>
                  <span class="block text-sm my-1 md:my-0">
                    Do not have an account?{" "}
                    <Link to="/login" class=" text-blue-400 font-medium">
                      Log in
                    </Link>
                  </span>
                </div>
                {/*  */}
                <div class="max-w-lg">
                  <label class=" text-base font-medium text-neutral-900 dark:text-neutral-200 " data-nc-id="Label">
                    Your phone number
                  </label>
                  <input
                    type="email"
                    class="block py-2 px-4 border-gray-100 w-full rounded-3xl mt-2 focus:outline-none border-2"
                    placeholder="+8820256*"
                  />
                </div>{" "}
                <div class="max-w-lg">
                  <label class=" text-base font-medium text-neutral-900 dark:text-neutral-200 " data-nc-id="Label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="block py-2 px-4 border-gray-100 w-full rounded-3xl mt-2 focus:outline-none border-2"
                    placeholder="Your email"
                  />
                </div>
                <div className=" space-x-0 lg:space-x-4 space-y-4">
                  <button onClick={() => setContactShow(false)} className="bg-black text-gray-100 rounded-3xl py-3 px-5">
                    Save and next to shipping
                  </button>
                  <button onClick={() => setContactShow(false)} className="bg-gray-200 text-black rounded-3xl py-3 px-5">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>{" "}
          {/*  */}
          <div className="border mt-10 border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden z-0">
            <div class="flex flex-col sm:flex-row items-start p-6 ">
              <span class="hidden sm:block">
                <svg class="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <div class="sm:ml-8">
                <h3 class=" text-slate-700 dark:text-slate-300 flex ">
                  <span class="uppercase tracking-tight">SHIPPING ADDRESS</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    class="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100 "
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                  </svg>
                </h3>
                <div class="font-semibold mt-1 text-sm">
                  <span class="">St. Paul's Road, Norris, SD 57560, Dakota, USA</span>
                </div>
              </div>
              <button
                onClick={handlePayment}
                class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2 px-4   ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800  mt-5 sm:mt-0 sm:ml-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              >
                Change
              </button>
            </div>

            {/* conditionally open */}
            {paymentShow && (
              <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 block">
                <div class="flex justify-between flex-wrap items-baseline">
                  <h3 class="text-lg font-semibold">Contact information</h3>
                  <span class="block text-sm my-1 md:my-0">
                    Do not have an account?{" "}
                    <Link to="/login" class=" text-blue-400 font-medium">
                      Log in
                    </Link>
                  </span>
                </div>
                {/*  */}
                <div class="max-w-lg">
                  <label class=" text-base font-medium text-neutral-900 dark:text-neutral-200 " data-nc-id="Label">
                    Your phone number
                  </label>
                  <input
                    type="email"
                    class="block py-2 px-4 border-gray-100 w-full rounded-3xl mt-2 focus:outline-none border-2"
                    placeholder="+8820256*"
                  />
                </div>{" "}
                <div class="max-w-lg">
                  <label class=" text-base font-medium text-neutral-900 dark:text-neutral-200 " data-nc-id="Label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="block py-2 px-4 border-gray-100 w-full rounded-3xl mt-2 focus:outline-none border-2"
                    placeholder="Your email"
                  />
                </div>
                <div className=" space-x-0 lg:space-x-4 space-y-4">
                  <button onClick={() => setContactShow(false)} className="bg-black text-gray-100 rounded-3xl py-3 px-5">
                    Save and next to shipping
                  </button>
                  <button onClick={() => setContactShow(false)} className="bg-gray-200 text-black rounded-3xl py-3 px-5">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border-2 p-4">
         <Link to="/payment" > <button className="bg-black py-3 px-5 text-white rounded-3xl" >Continue to payment</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
