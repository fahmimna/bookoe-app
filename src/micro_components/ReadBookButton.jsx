/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ReadBookButton = ({ idbook }) => {
  return (
    <>
      <NavLink
        to={`/book-detail?id=${idbook}`}
        className="border border-1 border-[#8170F2] hover:bg-white hover:font-semibold hover:text-[#8170F2] transition-all rounded-md py-2 w-full flex justify-center"
      >
        <p>Read Book</p>
      </NavLink>
    </>
  );
};

export default ReadBookButton;
