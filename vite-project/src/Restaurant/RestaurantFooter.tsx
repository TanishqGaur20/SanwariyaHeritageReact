"use client";
import  { useEffect } from "react";
import AOS from "aos";
import star8 from "../../public/Star 5.svg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const date = new Date();

const RestaurantFooter = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <footer
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
      id="contacts"
      className="pb-2 sm:pb-6 pt-12 md:pt-16 lg:pt-12 w-full h-full  px-5 md:px-[1.9rem] largesceen:px-14 fourk:px-44 desktop:pt-28 2xl:pt-36 largesceen:pb-6 bg-white-100"
    >
      {/* <p className="text-gradient text-2xl sm:text-3xl lg:text-[2.375rem] desktop:text-[3.125rem] largesceen:text-[5rem]   flex  h-full leading-normal w-fit mb-10  sm:mb-16 lg:mb-20 p-3 largesceen:p-5 border-b">
        +38 032 297 50 20
      </p>

      <p className="text-xs uppercase lg:text-base desktop:text-lg largesceen:text-[1.625rem] text-gradient  text-end  mr-[10%]">
        8 Lystopadovoho <br /> Chynu,Lviv
      </p> */}

      <section className="py-8 sm:py-12 lg:py-20 desktop:py-32 largesceen:py-44 flex  justify-between relative w-full">
        <div className="">
          <h2
            className=" text-gradient uppercase text-[4.5rem] xs:text-[5.25rem] sm:text-[7rem] leading-none lg:text-[8rem] desktop:text-[12.625rem] largesceen:text-[18.75rem] max-sm:absolute"
            data-aos="fade-up"
          >
            <span className="inline-flex gap-4">
              Get in{" "}
              <img
                src={star8}
                alt="star"
                className="animi-1 w-9 sm:w-[4rem] lg:w-[6.25rem] desktop:w-auto  largesceen:h-auto"
              />{" "}
            </span>
            <br />
            <span className="text-secondary relative top-0 sm:top-5 desktop:top-12 fourk:left-[90%] left-[20%] sm:left-[60%] lg:left-[80%]">
              touch
            </span>
          </h2>
        </div>

        <div>
          <img
            src='/jean-philippe-delberghe-T5BF4OyQLwU-unsplash 1.png'
            alt="room image"
            className="max-small:mt-12 w-40 sm:w-[12rem] md:w-[18rem] lg:w-[27.688rem] xl:mr-28 desktop:mr-0"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
        {/* Resort Name and About */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="text-gradient  text-2xl sm:text-3xl py-2 lg:text-4xl font-bold mb-4">
            Sanwariya Resort and Heritage
          </h2>
          <p className="text-[0.95rem] text-primary text-opacity-80 mb-4 max-w-xs">
            A luxury heritage resort in Baran, Rajasthan, offering premium
            rooms, banquet, pool, and fine dining. Experience tradition and
            comfort in a serene setting.
          </p>
        </div>
        {/* Contact Info */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-gradient text-lg font-semibold mb-2">
            Contact Us
          </h3>
          <p className="mb-1 text-primary text-opacity-80">
            NH 27, Near Toll Plaza, Village Bhadawariya,
            <br />
            Tehsil Atru, Baran, Rajasthan 325223
          </p>
          <p className="mb-1 text-primary text-opacity-80">
            Phone:{" "}
            <a href="tel:+911234567890" className="hover:text-secondary">
              +91 12345 67890
            </a>
          </p>
          <p className="mb-1 text-primary text-opacity-80">
            Email:{" "}
            <a
              href="mailto:info@sanwariyaresort.com"
              className="hover:text-secondary"
            >
              info@sanwariyaresort.com
            </a>
          </p>
        </div>
        {/* Social Links */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-gradient text-lg font-semibold mb-2">
            Follow Us
          </h3>
          <div className="flex gap-4 mb-2">
            <a href="#" aria-label="Facebook">
              <FaFacebook
                size={28}
                className="text-[#1B3B36] hover:text-secondary"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram
                size={28}
                className="text-[#1B3B36] hover:text-secondary"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter
                size={28}
                className="text-[#1B3B36] hover:text-secondary"
              />
            </a>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-200 mt-8 pt-4 text-center text-[0.95rem] text-primary text-opacity-70">
        &copy; {date.getFullYear()} Sanwariya Resort and Heritage . All rights
        reserved.
      </div>
    </footer>
  );
};

export default RestaurantFooter;
