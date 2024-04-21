import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Nav from "../Navbar/Nav";



const Books = () => {

     const books = useLoaderData()
    const {bookId} = useParams()
    const [currentBook, setCurrentBook] = useState({});
    
    useEffect(()=>{
        const foundBook = books?.find(book => book.bookId == bookId)
        setCurrentBook(foundBook);
    },[])

     console.log(currentBook)
            
    return (
        
 <div>

<Nav/>

<div className="flex justify-center items-center mt-10">
    <div className="card card-side bg-base-100 shadow-xl max-w-[500px]">
  <figure><img src={currentBook.image_url}alt="Movie"/></figure>
  <div className="card-body justify-center">
    <h1 className="card-title text-[14px]">BookName:{currentBook.bookName}</h1>
    <h2 className="card-title text-[14px]">review: {currentBook.review}</h2>
    <h3 className="font-semibold text-[12px]">tags: {currentBook.tags}</h3>
    <p className="font-semibold text-[12px]"> Number of pages: { currentBook.totalPages}</p>
    <p className="font-semibold text-[12px]">publisher: {currentBook.publisher}</p>
    <p className="font-semibold text-[12px]">YearOfPublishing: {currentBook.yearOfPublishing}</p>
    <h4 className="font-semibold text-[12px]">Rating:  {currentBook.rating}</h4>
    <div className="card-actions justify-end flex">
      <div className="flex gap-4">
      <button className="btn btn-primary">Watch</button>
      <button className="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>
</div>
      </div>
 </div>

  
    );
};

export default Books;
