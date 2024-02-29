/* eslint-disable react/prop-types */
import TextTruncate from "react-text-truncate"
import CreateRating from "./CreateRating"
import { format } from "date-fns"
import ReadBookButton from "./ReadBookButton"

const LatestSmallCardBook = ({ book }) => {
  const getDate = new Date(book.created_at)
  const date = format(getDate, 'dd/MM/yyyy')

  return (
    <div className="flex flex-col items-center relative font-poppins">
      <img
        src={book.image_url}
        className="w-full h-64 object-fill rounded-lg"
      />
      <p className="font-bold pt-2">
        <TextTruncate 
          line={1}
          truncateText="..."
          text={book.title}
        />
      </p>
      <p className="pt-1">{book.author.name.length > 0 ? book.author.name : "not defined"}</p>
      <div className="pb-8 pt-3">
        <CreateRating rate={book.rating}/>
      </div>
      <ReadBookButton idbook={book.id}/>
      <div className="absolute top-5 left-0 bg-violet-500 rounded-r-full px-5 py-1 text-white">{date}</div>
    </div>
  )
}

export default LatestSmallCardBook