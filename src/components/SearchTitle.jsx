/* eslint-disable react/prop-types */

const SearchTitle = ({ keyword }) => {
  return (
    <div className="font-poppins flex bg-[#20262e] w-[100%] max-h-max p-14 rounded-lg gap-10 z-0">
      <div className="text-white text-4xl font-semibold">
        <span className="text-[#8170F2]">Search For </span> {keyword}
      </div>
    </div>
  )
}

export default SearchTitle