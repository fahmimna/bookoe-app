/* eslint-disable react/prop-types */
import TextTruncate from "react-text-truncate";
import CreateRating from "./CreateRating";
import ReadBookButton from "./ReadBookButton";

const BigCardBook = ({ book }) => {
  return (
    <div className="flex items-center gap-2 w-[27rem] h-full font-poppins">
      <img
        src={book.image_url}
        className="max-w-[13rem] h-64 flex-1 object-fill rounded-lg"
      />
      <div className="flex flex-col h-full justify-between flex-1">
        <p className="font-semibold">
          <TextTruncate line={1} truncateText="..." text={book.title} />
        </p>
        <p>
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
        <div className="py-2">
          <CreateRating rate={book.rating} />
        </div>
        <p className="pb-2 text-sm">
          <TextTruncate line={3} truncateText="..." text={book.synopsis} />
        </p>
        <ReadBookButton idbook={book.id} />
      </div>
    </div>
  );
};

export default BigCardBook;
