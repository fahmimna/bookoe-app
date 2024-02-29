import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";
import Navbar from "../components/Navbar";
import TopPicksTitle from "../components/TopPicksTitle";
import { getBookData } from "../services/api-service";
import TopPicksSmallCardBook from "../micro_components/TopPicksSmallCardBook";

const TopPicks = () => {
  const [topPickBooks, setTopPickBooks] = useState([])

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const getTopPickBooks = async () => {
    const data = await getBookData("books")
    const top_picks = data.filter((item) => item.is_top_pick === true)
    top_picks.sort((a, b) => a.rating - b.rating).reverse()
    setTopPickBooks(top_picks.slice(0, 4))
  }

  useEffect(() => {
    getTopPickBooks()
  }, [])

  return (
    <>
      <div className="md:mx-20 mx-5 mb-8">
        <Navbar />
        <TopPicksTitle />
        <div className="grid grid-cols-4 gap-[4.5rem] relative pb-[4.5rem] pt-16">
          {topPickBooks.map((item, index) => (
            <TopPicksSmallCardBook key={index} index={index} book={item} />
          ))}
        </div>
        <div className="pt-32">
          <FooterCTA />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TopPicks;
