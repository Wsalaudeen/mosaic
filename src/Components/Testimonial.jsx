import Aeroplane from "../assets/Images/Aeroplane.jpeg";
import Wave from "../assets/Images/Wave.png";

const Reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum commodo quam eget sed hendrerit quis semper. Tincidunt egestas phasellus mauris tristi.",
    image: "./Adam.jpeg",
    name: "Adam Davis",
    rating: 5,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum commodo quam eget sed hendrerit quis semper. Tincidunt egestas phasellus mauris tristi.",
    image: "./Adam.jpeg",
    name: "Adam Davis",
    rating: 5,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Fermentum commodo quam eget sed hendrerit quis semper. Tincidunt egestas phasellus mauris tristi.",
    image: "./Adam.jpeg",
    name: "Adam Davis",
    rating: 5,
  },
];

function Testimonial() {
  return (
    <section className="font-montserrat">
      <div>
        <img src={Aeroplane} alt="Aeroplane" className="rounded-t-[5%]" />
      </div>

      <div className="flex flex-col justify-center items-center py-8 lg:px-20 px-10">
        <p className="text-3xl text-text-black font-bold mb-8">
          Hear From Others
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mb-8">
          {Reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#F9F9FA] border-[0.5px]  rounded-2xl text-center p-8"
            >
              <p className="text-[#474747] font-[400] text-sm">{review.text}</p>
              <div className="flex justify-center mb-4 gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <span key={index} className="text-[#FFD387] text-2xl">
                    ★
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center gap-2">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <p className="text-[#0C1E23] font-bold">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <img src={Wave} alt="" />
        <div className=" bg-blue-200">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="lg:text-3xl text-xl font-bold text-text-black mb-5 mt-10">
              Join Thousand Of Travellers, Start Your <br />
              Journey Today
            </p>
            <button className="mt-4 py-4 px-8  bg-custom-gradient rounded-full text-white shadow-lg mb-[100px]">
              Start Planning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
