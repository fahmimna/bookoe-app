import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import CreateRating from '../micro_components/CreateRating';
import { getBookData } from '../services/api-service';
import { useEffect, useState } from 'react';
import TextTruncate from 'react-text-truncate';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const [book1, setBook1] = useState([])
  const [book2, setBook2] = useState([])
  const [book3, setBook3] = useState([])

  
  const getBook = async () => {
    const bookIndexArray = []
    const data = await getBookData("books")

    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * data.length)
      if(!(bookIndexArray.includes(index)) && bookIndexArray.length < 3) {
        bookIndexArray.push(index)
      }
    }

    setBook1(data[bookIndexArray[0]])
    setBook2(data[bookIndexArray[1]])
    setBook3(data[bookIndexArray[2]])
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <div className="flex md:flex-row flex-col-reverse bg-[#20262e] w-full max-h-max md:p-14 p-6 rounded-lg md:gap-10">
      <div className="flex flex-col md:w-[60%] w-full">
        <div className="text-[#8170F2] font-poppins font-semibold pb-3">MUST READ</div>
        {
          book1.length === 0 ?
          <div className='skeleton pb-5 h-[120px]'></div> :
          <div className="font-bold font-poppins md:text-6xl text-2xl pb-5">
            <TextTruncate
              line={2}
              truncateText='...'
              text={book1.title} 
            />
          </div>
        }
        <div className="flex gap-3 items-center pb-7">
          <p className='font-poppins font-semibold'>{book1.author?.name}</p>
          {
            book1.length === 0 ?
            null :
            <CreateRating rate={book1.rating}/>
          }
        </div>
        <div className='font-poppins pb-3'>
          {
            book1.length === 0 ?
            null :
            <TextTruncate 
              line={4}
              truncateText='...'
              text={book1.synopsis}
            />
          }
        </div>
        <div className="flex gap-3">
          <NavLink to={`/book-detail?id=${book1.id}`} className='bg-[#8170F2] text-white py-2 px-4 rounded-md flex items-center gap-2'>
            <p>Read Book</p>
            <ArrowUpRight size={18} weight="fill" />
          </NavLink>
          <button className='border border-1 rounded-md border-[#8170F2] text-[#8170F2] py-2 px-6'>
            See All Recommendations
          </button>
        </div>
      </div>
      <div className='w-[40%] md:h-96 h-60 relative'>
        {
          book3.length === 0 ?
          <div className='skeleton md:w-48 w-96 md:h-64 h-36 absolute md:left-[212.39px] left-[103px] md:top-[63.59px] top-[34px] rounded-lg'></div> :
          <img className='md:w-48 w-96 md:h-64 h-36 absolute md:left-[212.39px] left-[103px] md:top-[63.59px] top-[34px] rounded-lg' src={book3.image_url}/>
        }
        {
          book2.length === 0 ?
          <div className='skeleton md:w-56 w-96 md:h-80 h-44 absolute md:left-[124.51px] left-[50px] md:top-[31.13px] top-[17px] rounded-lg'></div> :
          <img className='md:w-56 w-96 md:h-80 h-44 absolute md:left-[124.51px] left-[50px] md:top-[31.13px] top-[17px] rounded-lg' src={book2.image_url}/>
        }
        {
          book1.length === 0 ?
          <div className='skeleton md:w-72 w-96 md:h-96 h-52 absolute md:left-0 left-[px] top-0 rounded-lg'></div> :
          <img className='md:w-72 w-96 md:h-96 h-52 absolute md:left-0 left-[px] top-0 rounded-lg' src={book1.image_url}/>
        }
      </div>
    </div>
  );
};

export default Hero;
