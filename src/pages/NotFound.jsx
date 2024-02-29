import { NavLink } from "react-router-dom";
import BooksHang1 from "../assets/BooksHang1.svg";
import BooksHang2 from "../assets/BooksHang2.svg";
import BooksHang3 from "../assets/BooksHang3.svg";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between font-poppins h-screen pb-16">
        <div className="flex">
          <img src={BooksHang1} alt="books" />
          <img src={BooksHang2} alt="books" />
          <img src={BooksHang3} alt="books" />
        </div>
        <div className="text-[#8170F2] text-8xl font-bold">404</div>
        <div className="text-center">
          <p className="text-xl font-semibold">
            Looks like you&apos;ve got lost...
          </p>
          <p className="">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>
        <NavLink
          to={"/"}
          className="border-2 rounded-md py-2 px-6 border-white hover:border-[#8170F2] text-white hover:text-[#8170F2] bg-transparent hover:bg-white hover:font-semibold transition-all"
        >
          Back Home
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
