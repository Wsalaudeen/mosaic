import Group from "../assets/Images/Group.png";
import Note from "../assets/Images/Note.png";
import Message from "../assets/Images/Message.png";
import Speech from "../assets/Images/Speech.png";
import Dollar from "../assets/Images/Dollar.png";
import Fluent from "../assets/Images/Fluent.png";

function MakeUnique() {
  return (
    <section className="flex flex-col justify-center align-middle items-center p-40 font-family">
      <div className="relative">
        <img src={Group} alt="people drinking juice by the beach" />
      </div>

      <div className="bg-white border border-[#C6C6C6] p-10 w-[100%] rounded-2xl flex flex-col items-center -mt-10 z-10">
        <p className="text-[#1B1B1B] font-bold mb-8">
          Discover What Makes Us Unique
        </p>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <img src={Note} alt="reminder icon" className="w-10 h-10 mb-4" />
            <p className="text-[#1B1B1B] font-[500] text-xl text-center mb-2">
              Custom Itineraries Made Easy
            </p>
            <p className="text-[#777777] font-[400]">
              Like a mosaic, your trip is built piece by piece—crafted to
              reflect your unique style.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Fluent}
              alt="Fluent design idea"
              className="w-10 h-10 mb-4"
            />
            <p className="text-[#1B1B1B] font-[500] text-xl text-center mb-2">
              Ideas To Inspire Your Journey
            </p>
            <p className="text-[#777777] font-[400]">
              Discover hidden gems and iconic spots that add color to your
              journey.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Speech} alt="speech icon" className="w-10 h-10 mb-4" />
            <p className="text-[#1B1B1B] font-[500] text-xl text-center mb-2">
              Break Language Barriers On The Go
            </p>
            <p className="text-[#777777] font-[400]">
              Travel confidently without language barriers and connect like a
              local.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 px-[150px] gap-20 mt-4">
          <div className="flex flex-col items-center">
            <img src={Dollar} alt="Dollar" className="w-10 h-10 mb-4" />
            <p className="text-[#1B1B1B] font-[500] text-xl text-center mb-2">
              Budget Like A Pro - Anywhere, Anytime
            </p>
            <p className="text-[#777777] font-[400]">
              Stay on top of your spending without sacrificing the fun.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Message}
              alt="Fluent design idea"
              className="w-10 h-10 mb-4"
            />
            <p className="text-[#1B1B1B] font-[500] text-xl text-center mb-2">
              Insider Tips from Real Explorers
            </p>
            <p className="text-[#777777] font-[400]">
              Trusted perspectives to help you choose the best pieces for your
              travel mosaic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakeUnique;
