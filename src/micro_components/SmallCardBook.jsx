/* eslint-disable react/prop-types */
import TextTruncate from "react-text-truncate";
import CreateRating from "./CreateRating";
import ReadBookButton from "./ReadBookButton";

const SmallCardBook = ({ book }) => {
  return (
    <div className="flex flex-col items-center font-poppins">
      <img src={book.image_url} className="w-full object-fill h-64 rounded-lg" />
      <p className="font-bold pt-2">
        <TextTruncate line={1} truncateText="..." text={book.title} />
      </p>
      <p className="pt-1">
        {book.author.name.length > 0 ? (
          <TextTruncate
            line={1}
            truncateText="..."
            text={book.author.name}
          ></TextTruncate>
        ) : (
          "[author not defined]"
        )}
      </p>
      <div className="pb-8 pt-3">
        <CreateRating rate={book.rating} />
      </div>
      <ReadBookButton idbook={book?.id} />
    </div>
  );
};

export default SmallCardBook;
