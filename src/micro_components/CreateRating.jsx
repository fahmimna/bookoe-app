/* eslint-disable react/prop-types */
const CreateRating = ({ rate }) => {
  let value1 = false;
  let value2 = false;
  let value3 = false;
  let value4 = false;
  let value5 = false;

  let ratingValue = Math.round(rate);

  if (ratingValue > 0 && ratingValue <= 1) {
    value1 = true;
  } else if (ratingValue > 1 && ratingValue <= 2) {
    value1 = true;
    value2 = true;
  } else if (ratingValue > 2 && ratingValue <= 3) {
    value1 = true;
    value2 = true;
    value3 = true;
  } else if (ratingValue > 3 && ratingValue <= 4) {
    value1 = true;
    value2 = true;
    value3 = true;
    value4 = true;
  } else if (ratingValue > 4 && ratingValue <= 5) {
    value1 = true;
    value2 = true;
    value3 = true;
    value4 = true;
    value5 = true;
  } else {
    value1 = false;
    value2 = false;
    value3 = false;
    value4 = false;
    value5 = false;
  }

  const items = [
    { rate: value1 },
    { rate: value2 },
    { rate: value3 },
    { rate: value4 },
    { rate: value5 },
  ];

  return (
    <>
      <div className="rating rating-md">
        {items.map((item, index) => {
          return (
            <input
              disabled
              key={index}
              type="radio"
              name="rating-2"
              className={`mask mask-star-2 cursor-default ${
                item.rate === true ? "bg-violet-500" : "bg-[#332E53]"
              }`}
            />
          );
        })}
      </div>
    </>
  );
};

export default CreateRating;
