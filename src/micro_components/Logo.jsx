import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex font-poppins">
      <img className="md:h-14 h-10" src={logo} />
      <div className="flex flex-col justify-center pl-2">
        <div className="font-semibold md:text-2xl text-md">Bookoe</div>
        <div className="md:text-md text-sm">Rekomendasi Bukumu</div>
      </div>
    </div>
  );
};

export default Logo;
