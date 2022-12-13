import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Aos from "aos";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

Aos.init({ duration: "500" });

const Pay = () => {
  const url = "/home";
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire("Thanks for your order!", "Successfully, payment has been completed!.", "success");
    navigate(url);
  };
  return (
    <div className="bg-blue-50 py-5">
      <div className="m-4">
        <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
          <header className="flex flex-col justify-center items-center">
            <Swiper
              mousewheel={true}
              loop={true}
              cssMode={true}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              /*  pagination={{
                clickable: true,
              }} */
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper container"
            >
              <SwiperSlide>
                <div className="relative">
                  <img
                    className="w-full h-auto"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                    alt="front credit card"
                  />
                  <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
                    <p className="number mb-5 sm:text-xl" x-text="cardNumber !== '' ? cardNumber : '0000 0000 0000 0000'"></p>
                    <div className="flex flex-row justify-between">
                      <p x-text="cardholder !== '' ? cardholder : 'Card holder'"></p>
                      <div className="">
                        <span x-text="expired.month"></span>
                        <span x-show="expired.month !== ''">/</span>
                        <span x-text="expired.year"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="relative">
                  <img
                    className="w-full h-auto"
                    src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
                    alt=""
                  />
                  <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12">
                    <div className="border border-white w-16 h-9 flex justify-center items-center">
                      <p x-text="securityCode !== '' ? securityCode : 'code'"></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <ul className="flex">
              <li className="mx-2">
                <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
              </li>
              <li className="mx-2">
                <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
              </li>
              <li className="ml-5">
                <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
              </li>
            </ul>
          </header>
          <form action="#" onSubmit={handleSubmit}>
            <main className="mt-4 p-4">
              <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
              <div className="">
                <div className="my-3">
                  <input
                    type="text"
                    className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    placeholder="Card holder"
                    maxLength="22"
                    x-model="cardholder"
                    required
                  />
                </div>
                <div className="my-3">
                  <input
                    type="text"
                    className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    placeholder="Card number"
                    maxLength="19"
                    required
                  />
                </div>
                <div className="my-3 flex flex-col">
                  <div className="mb-2">
                    <label htmlFor="" className="text-gray-700">
                      Expired
                    </label>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <select
                      name=""
                      id=""
                      className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      x-model="expired.month"
                      required
                    >
                      <option value="" selected disabled>
                        MM
                      </option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      x-model="expired.year"
                      required
                    >
                      <option value="" selected disabled>
                        YY
                      </option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                    <input
                      type="text"
                      className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                      placeholder="Security code"
                      maxLength="3"
                      required
                    />
                  </div>
                </div>
              </div>
            </main>
            <footer className="mt-6 p-4">
              <button
                type="submit"
                className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
              >
                Pay now
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pay;
