import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import FooterCTA from "../components/FooterCTA";
import Navbar from "../components/Navbar";
import CreateRating from "../micro_components/CreateRating";
import { useEffect, useState } from "react";
import { getBookDetailData } from "../services/api-service";
import { format } from "date-fns";

const BookDetail = () => {
  const [bookId, setBookId] = useState(0)
  const [bookData, setBookData] = useState([])
  const [published, setPublished] = useState("")
  const [searchParams] = useSearchParams()

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  useEffect(() => {
    const getId = searchParams.get('id')
    setBookId(getId)
    
    const getBook = async () => {
      const data = await getBookDetailData("books", bookId)
      setBookData(data)
    }

    const getDate = async () => {
      const publishedDate = await bookData.created_at
      const published = format(publishedDate, 'MMMM d, yyyy')
      setPublished(published)
    }

    getBook()
    getDate()
  }, [searchParams, bookId, bookData.created_at])

  return (
    <div className="md:mx-20 mx-5 mb-8 font-poppins">
      <Navbar />
      <div className="flex gap-10 pb-[90px]">
        <img
          src={bookData.image_url}
          className="w-[250px] h-[350px] rounded-lg"
        />
        <div className="flex flex-col justify-start gap-4">
          <div className="font-semibold text-4xl">{bookData.title}</div>
          <div className="text-xl">by {bookData.author?.name.length > 0 ? (bookData.author?.name) : ("[author not defined]")}</div>
          <CreateRating rate={bookData.rating}/>
          <div className="py-5">
            {bookData.synopsis}
          </div>
          <>First published {published}</>
        </div>
      </div>
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default BookDetail;
