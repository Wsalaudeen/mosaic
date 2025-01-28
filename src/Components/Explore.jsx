import { IoMdArrowForward } from "react-icons/io";
import Macbook from "../assets/Images/Macbook-Pro.png";

const Places = [
  {
    id: 1,
    image: "./New-York.jpeg",
    city: "Times Square, New york",
    rating: "1,234",
    flagIcon: "./Flag.png",
    loveIcon: "./Love.png",
    review: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    image: "./Paris.jpg",
    city: "Eiffel Tower, Paris",
    rating: "1,234",
    flagIcon: "./Flag.png",
    loveIcon: "./Love.png",
    review: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    image: "./Bahia.jpg",
    city: "Bahia Palace, Marrakesh",
    rating: "1,234",
    flagIcon: "./Flag.png",
    loveIcon: "./Love.png",
    review: "Lorem ipsum dolor sit amet consectetur.",
  },
];

function Explore() {
  return (
    <section className="my-40 font-montserrat">
      <div className="flex bg-[#34495B] rounded-t-2xl py-10 px-20">
        <div className="relative bottom-[100px]">
          <img src={Macbook} alt="Macbook-pro" />
        </div>
        <div>
          <p className="text-[#DCE4EC] font-bold ">
            Ask Away, AI’s Got You Covered
          </p>
          <p className="text-[#C6C6C6] font-[500]">
            Lorem ipsum dolor sit amet consectetur. Nunc duis vulputate sit. Dui
            gravida sed tempor pulvinar.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center lg:px-20 px-10">
        <p className="font-bold text-xl mb-6">More To Explore</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mb-6 w-[100%]">
          {Places.map((place) => (
            <div key={place.id} className="relative">
              <div className="bg-white absolute px-5  flex py-4 rounded-full -right-[1px] ">
                <img src={place.flagIcon} alt="flag" />
              </div>
              <img
                src={place.image}
                alt={place.city}
                className="lg:h-[240px] rounded-[10%]"
              />
              <div className="flex justify-between mt-4">
                <p className="text-[#1B1B1E] font-bold text-xl">{place.city}</p>
                <div className="flex items-center gap-1">
                  <img src={place.loveIcon} alt="love icon" />
                  <p className="text-[#777777] font-[400]">{place.rating}</p>
                </div>
              </div>
              <p className="text-[#777777] font-[400]">{place.review}</p>
            </div>
          ))}
        </div>
        <div className=" gap-1 flex justify-center items-center">
          <p className="text-[#1B1B1E] font-semibold text-xl">see more</p>

          <div>
            <IoMdArrowForward size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
