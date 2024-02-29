import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchBookData } from "../services/api-service";
import Navbar from "../components/Navbar";
import SearchTitle from "../components/SearchTitle";
import SmallCardBook from "../micro_components/SmallCardBook";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";

const Search = () => {
  const [bookFinded, setBookFinded] = useState([]);
  const [searchParams] = useSearchParams();

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const getKeyword = searchParams.get("keyword");

  useEffect(() => {
    const getData = async () => {
      const data = await getSearchBookData("books", getKeyword);
      setBookFinded(data);
    };

    if (getKeyword.length > 0) {
      getData();
    }
  }, [searchParams, getKeyword]);

  console.log(bookFinded);

  return (
    <div className="md:mx-20 mx-5 mb-8 font-poppins">
      <Navbar />
      <SearchTitle keyword={getKeyword} />
      {bookFinded.length > 0 ? (
        <div className="grid grid-cols-4 gap-[4.5rem] relative pb-[4.5rem] pt-16">
          {bookFinded.map((item, index) => (
            <SmallCardBook key={index} book={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center w-auto bg-[#20262e] mt-[2rem] rounded-md">
          <h2 className="py-28 text-[#8170F2] font-semibold text-4xl">Book Not Found.</h2>
        </div>
      )}
      <div className="pt-32">
        <FooterCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
