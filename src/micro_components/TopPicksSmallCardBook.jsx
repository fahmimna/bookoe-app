/* eslint-disable react/prop-types */
import TextTruncate from "react-text-truncate"
import CreateRating from "./CreateRating"
import ReadBookButton from "./ReadBookButton"

const TopPicksSmallCardBook = ({ index, book }) => {

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
      <div className="absolute top-5 left-0 bg-violet-500 rounded-r-full px-5 py-1"><span className="invisible">{index + 1}</span></div>
      <div className={`absolute top-6 bg-white text-violet-500 rounded-full ${index === 0 ? 'px-[0.6rem] left-4' : index === 1 || index === 2 ? 'px-2 left-5' : 'px-[0.4rem] left-6'}`}>{index + 1}</div>
    </div>
  )
}

export default TopPicksSmallCardBook