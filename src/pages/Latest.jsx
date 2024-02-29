import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import FooterCTA from "../components/FooterCTA"
import LatestTitle from "../components/LatestTitle"
import Navbar from "../components/Navbar"
import { getBookData } from "../services/api-service"
import LatestSmallCardBook from "../micro_components/LatestSmallCardBook"

const Latest = () => {
  const [books, setBooks] = useState([])

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const getBook = async () => {
    const data = await getBookData("books")
    data.sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at)
    }).reverse()
    setBooks(data.slice(0, 4))
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <>
      <div className="md:mx-20 mx-5 mb-8">
        <Navbar />
        <LatestTitle />
        <div className="grid grid-cols-4 gap-[4.5rem] relative pt-[5rem] pb-[4.5rem]">
          {books.map((item, index) => (
            <LatestSmallCardBook key={index} book={item} />
          ))}
        </div>
        <div className="pt-32">
          <FooterCTA />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Latest