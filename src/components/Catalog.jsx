/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import BigCardBook from "../micro_components/BigCardBook"
import SmallCardBook from "../micro_components/SmallCardBook"
import { getBookData } from "../services/api-service"

const Catalog = () => { 
  const [bigBooks, setBigBooks] = useState([])
  const [smallBooks, setSmallBooks] = useState([])

  const getBook = async () => {
    const collectionBooks = []
    const data = await getBookData("books")

    for (let i = 0; i < 8; i++) {
      const index = Math.floor(Math.random() * data.length)
      collectionBooks.push(data.slice(index, index+1)[0])
    }

    console.log(collectionBooks)
    setBigBooks(collectionBooks.slice(0, 4))
    setSmallBooks(collectionBooks.slice(4, 8))
  }

  useEffect(() => {
    getBook()
  }, [])
  
  return (
    <div className="px-20">
      <div className="grid grid-cols-2 gap-[4.5rem] pt-[4.5rem]">
        {bigBooks.map((item, index) => (
          <BigCardBook key={index} book={item} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-[4.5rem] pt-[5rem] pb-[4.5rem]">
        {smallBooks.map((item, index) => (
          <SmallCardBook key={index} book={item} />
        ))}
      </div>
    </div>
  )
}

export default Catalog