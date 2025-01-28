import { IoMdArrowForward } from "react-icons/io";

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
  {
    id: 3,
    image: "./Beach.jpg",
    city: "Landmark Beach, Lagos",
    rating: "1,234",
    flagIcon: "./Flag.png",
    loveIcon: "./Love.png",
    review:
      "A beach with restaurants, bars, and other entertainment facilities.",
  },
];

function TopRated() {
  return (
    <div className="flex justify-center flex-col items-center lg:px-20 px-10 my-40">
      <p className="font-bold text-2xl">Get Inspired</p>
      <p className="text-[#777777] font-[500] mb-6">
        Pick From Top-rated Tourist Attractions Based On User’s Experiences
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 mb-6 w-[100%]">
        {Places.map((place) => (
          <div key={place.id} className="relative">
            <div className="bg-white absolute px-5 flex py-4 rounded-full -right-[3px] -top-[2px] ">
              <img src={place.flagIcon} alt="flag" />
            </div>
            <img
              src={place.image}
              alt={place.city}
              className="h-[180px] rounded-[10%]"
            />
            <div className="flex justify-between mt-4">
              <p className="text-[#1B1B1E] font-bold">{place.city}</p>
              <div className="flex items-center gap-1">
                <img src={place.loveIcon} alt="love icon" />
                <p className="text-[#777777] font-[400]">{place.rating}</p>
              </div>
            </div>
            <p className="text-[#777777] font-[400] ">{place.review}</p>
          </div>
        ))}
      </div>
      <div className=" gap-1 flex justify-center items-center mb-40">
        <p className="text-[#1B1B1E] font-semibold text-xl">see more</p>

        <div>
          <IoMdArrowForward size={24} />
        </div>
      </div>
    </div>
  );
}

export default TopRated;
