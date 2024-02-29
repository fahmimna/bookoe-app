import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

const FooterCTA = () => {
  return (
    <div className="font-poppins">
      <div className="flex flex-col items-center bg-[#8170F2] w-full h-[300px] rounded-lg">
        <h1 className="pt-[44px] text-[42px] font-semibold w-4/6 text-center text-white">
          Join our newsletter to get our latest recommendation!
        </h1>
        <form className="flex gap-3">
          <div className="flex items-center">
            <label htmlFor="email" className="bg-white py-3 px-3 rounded-l-md"><EnvelopeSimple size={32} weight="bold" className="text-[#8170F2]"/></label>
            <input id="email" type="email" placeholder="Enter your email" required className="bg-white text-[#8170F2] py-4 w-56 rounded-r-md"/>
          </div>
          <input type="submit" value={"Submit"} className="bg-white rounded-md p-3 text-[#8170F2] cursor-pointer"/>
        </form>
      </div>
    </div>
  );
};

export default FooterCTA;
