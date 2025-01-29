import { IoMdArrowForward } from "react-icons/io";
import Macbook from "../assets/Images/Macbook-Pro.png";
import Pen from "../assets/Images/pen.png";
import Outline from "../assets/Images/outline.png";
import Robot from "../assets/Images/robot.png";
import Brain from "../assets/Images/brain.png";

const Places = [
  {
    id: 1,
    image: "./New-York.jpeg",
    city: "Times Square, New york",
    rating: "1,234",
    flagIcon: "./Flag.png",
    loveIcon: "./Love.png",
    review: "A major tourist destination, entertainment hub in New York City.",
  },
  {
    id: 2,
    image: "./Paris.jpg",
    city: "Eiffel Tower, Paris",
    rating: "1,234",
    flagIcon: "./Flag.png",
    loveIcon: "./Love.png",
    review:
      "The symbol of Paris and all of France is the elegant and unique Eiffel tower.",
  },
  {
    id: 3,
    image: "./Bahia.jpg",
    city: "Bahia Palace, Marrakesh",
    rating: "1,234",
    flagIcon: "./Flag.png",
    loveIcon: "./Love.png",
    review: "Rooms decorated with stunning stucco, paintings and mosaics.",
  },
];

function Explore() {
  return (
    <section className="my-40 font-family">
      <div className="flex bg-[#34495B] rounded-t-2xl  px-20 py-10 mb-40">
        <div className="relative w-[100%] ml-20">
          <div className="relative bottom-[80px] ml-8 w-[100%]">
            <img src={Macbook} alt="Macbook-pro" />
          </div>
          <img src={Robot} alt="robot" className="absolute -top-8" />
          <img
            src={Pen}
            alt="broken pen"
            className="absolute -top-[70%] left-[20%]"
          />
          <img
            src={Outline}
            alt="outine"
            className="absolute -top-[60%] right-[30%]"
          />
          <img
            src={Brain}
            alt="thinking-brain"
            className="absolute left-[83%] top-[10%]"
          />
        </div>
        <div>
          <p className="text-[#DCE4EC] font-bold text-4xl leading-10 mb-5">
            Ask Away, AI’s Got You Covered
          </p>
          <p className="text-[#C6C6C6] font-[500] pr-20">
            Let AI plan your perfect trip! Enter your destination and interests,
            and get a personalized itinerary in seconds—stress-free travel
            starts here!{" "}
          </p>
          <button className="mt-10 py-4 px-8  bg-custom-gradient rounded-full text-white font-[500]">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center lg:px-20 px-10">
        <p className="font-bold text-xl my-10">More To Explore</p>
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
              <p className="text-[#777777] font-[400] lg:pr-20">
                {place.review}
              </p>
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
