import Arrow from "../../../assets/Images/Arrow.png";
import map from "../../../assets/Images/map.png";
import Phone from "../../../assets/Images/Phone.png";
import Mail from "../../../assets/Images/Mail.png";

function Footer() {
  return (
    <footer className="bg-[#34495B] lg:p-20 p-10">
      <div className="flex lg:flex-row flex-col justify-between text-[#FFF] font-montserrat gap-6">
        <div className="">
          <h1 className="font-bold text-2xl mb-5">Logo</h1>
          <p className="text-sm mb-10">
            Lorem ipsum dolor sit amet consectetur. Eget <br /> morbi leo tellus
            purus facilisis turpis. Dui mauris <br />
            ultricies sagittis placerat.
          </p>
          <div className="flex rounded-full justify-between items-center bg-[#ffffff] p-1">
            <input
              type="text"
              placeholder="Your Email@gmail.com"
              className="py-2 px-4 border-none outline-none bg-transparent text-black"
            />
            <div className="bg-[#161C23] p-2 rounded-full">
              <img src={Arrow} alt="Forward-button" />
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li className="font-bold mb-5">Menu</li>
            <li className="text-sm mb-3">Home</li>
            <li className="text-sm mb-3">About</li>
            <li className="text-sm mb-3">Services</li>
            <li className="text-sm mb-3">Explore</li>
            <li className="text-sm">Reviews</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold mb-5">Terms And Conditions</li>
            <li className="text-sm mb-3">Privacy Policy</li>
            <li className="text-sm">Cookies Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="font-bold mb-5">Socials</li>
            <li className="flex gap-2 items-center mb-3 text-sm">
              <img src={map} alt="map coordinate icon" />
              Address: N0. 6, Travel Made Easy, Toronto, Canada
            </li>
            <li className="flex gap-2 items-center mb-3 text-sm">
              <img src={Phone} alt="phone call icon" /> Phone: +1234567890
            </li>
            <li className="flex gap-2 items-center mb-3 text-sm">
              <img src={Mail} alt="mail icon" />
              Email: travelmadeeasy.org
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
