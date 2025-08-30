import "aos/dist/aos.css";
import{ useRef } from "react";


const BookARoom = () => {


  return (
    <div
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400"
    >
      <h1 className="text-6xl sm:text-8xl md:text-[6.25rem] desktop:text-[7.813rem] largesceen:text-[9.375rem] text-center leading-none uppercase text-gradient pt-4 largesceen:pt-12">
        Book a <span className="block sm:inline-flex text-secondary">room</span>
      </h1>

      <section
        id="restaurant"
        className="py-12 sm:py-20 lg:py-28 largesceen:py-36 flex flex-col sm:flex-row justify-between sm:items-center"
      >
        <div className="max-md:hidden w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5">
          <button
            type="button"

            className="label flex items-center justify-center no-underline"
          >
            <object
              type="image/svg+xml"
              data="/Polygon 5.svg"
              className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]"
            >
              Your browser does not support SVGs
            </object>
            <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">
              Book room
            </span>
          </button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
        >
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] ">
            INR 1500 per night
          </h1>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
            Deluxe
            <br />
          </h1>

          <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
            The Deluxe room offers a tranquil retreat with stunning ocean views.
            This spacious room features a king-sized bed, a private balcony, and
            a luxurious bathroom with a soaking tub. The elegant decor and
            modern amenities ensure a comfortable and memorable stay.
          </p>
        </div>

        {/* <div className="relative">
          <img
            src='/roomHero.png'
            alt="azure room"
            className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] desktop:h-[30rem] largesceen:h-[40rem]"
            
          />

          <div className="absolute right-0 bottom-2 sm:-bottom-44 md:-bottom-24 w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label lg:hidden">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center no-underline"
            >
              <object
                type="image/svg+xml"
                data="/Polygon 5.svg"
                className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]"
              >
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">
                Book room
              </span>
            </button>
          </div>
        </div> */}
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        id="restaurant"
        className="py-12 sm:py-20 lg:py-28 largesceen:py-36 flex flex-col sm:flex-row justify-between sm:items-center"
      >
        {/* <div className="max-md:hidden w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center no-underline"
          >
            <object
              type="image/svg+xml"
              data="/Polygon 5.svg"
              className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]"
            >
              Your browser does not support SVGs
            </object>
            <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">
              Book room
            </span>
          </button>
        </div> */}

        <div>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] ">
            INR 2000 per night
          </h1>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
            Super
            <br />
            Deluxe
          </h1>

          <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
            The Super Deluxe is a serene oasis designed for ultimate relaxation.
            It boasts a queen-sized bed, a cozy seating area, and a private
            terrace overlooking lush gardens. The room is adorned with soft,
            earthy tones and natural materials, creating a calming ambiance.
          </p>
        </div>

        <div className="relative">
          <img
            src='/space-copenhagen-the-stratford-architonic-2-ed-reeve-24-arcit18 1.png'
            alt="azure room"
            className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] desktop:h-[30rem] largesceen:h-[40rem]"
            
          />

          {/* <div className="absolute right-0 bottom-2 sm:-bottom-44 md:-bottom-24 w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label lg:hidden">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center no-underline"
            >
              <object
                type="image/svg+xml"
                data="/Polygon 5.svg"
                className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]"
              >
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">
                Book room
              </span>
            </button>
          </div> */}
        </div>
      </section>

      <section
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        id="restaurant"
        className="py-12 sm:py-20 lg:py-28 largesceen:py-36 flex flex-col sm:flex-row justify-between sm:items-center"
      >
        {/* <div className="max-md:hidden w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center justify-center no-underline"
          >
            <object
              type="image/svg+xml"
              data="/Polygon 5.svg"
              className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]"
            >
              Your browser does not support SVGs
            </object>
            <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">
              Book room
            </span>
          </button>
        </div> */}

        <div>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] ">
            INR 3000 per night
          </h1>
          <h1 className="text-4xl sm:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-gradient capitalize leading-[100%] tracking-[2.4px] mt-8 sm:mt-[10%] lg:mt-[20%] desktop:mt-[30%] largesceen:mt-[40%] mb-8 sm:mb-10 ">
            Premium
            <br />
          </h1>

          <p className="text-gradient text-[0.813rem] desktop:text-base 2xl:text-lg leading-[155.556%] w-[83%] sm:w-[70%] lg:w-[250px] desktop:w-[27.625rem] text-opacity-[0.8] mb-8 sm:mb-0">
            The Premium room combines elegance and comfort with its chic design
            and upscale features. It includes a plush king-sized bed, a stylish
            sitting area, and a spacious bathroom with a rain shower. Guests can
            enjoy the vibrant city views from the large windows.
          </p>
        </div>

        <div className="relative">
          <img
            src='/jean-philippe-delberghe-T5BF4OyQLwU-unsplash 1.png'
            alt="azure room"
            className="lg:w-[22.25rem] desktop:w-[28.313rem] largesceen:w-[37.5rem] h-[26.5rem] desktop:h-[30rem] largesceen:h-[40rem]"
            
          />

          {/* <div className="absolute right-0 bottom-2 sm:-bottom-44 md:-bottom-24 w-24 sm:w-48 sm:h-48 lg:h-fit small:m-5 label lg:hidden">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center no-underline"
            >
              <object
                type="image/svg+xml"
                data="/Polygon 5.svg"
                className="max-xs:h-[60px] xs:w-[80px] md:w-[120px]"
              >
                Your browser does not support SVGs
              </object>
              <span className="absolute uppercase text-gradient text-[11px] small:text-xs md:text-sm">
                Book room
              </span>
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default BookARoom;
