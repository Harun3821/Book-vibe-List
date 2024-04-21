import { useEffect, useState } from "react";


import { useLoaderData, useParams } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Books = () => {

   
    
     const books = useLoaderData()
     const {bookId} = useParams()
     const [currentBook, setCurrentBook] = useState({});
 
  

    
  
    
    useEffect(()=>{
        const foundBook = books?.find(book => book.bookId == bookId)
        setCurrentBook(foundBook);
    },[])

     console.log(currentBook)

     
   
  
     const handelClick = () =>toast.success("Books Added to Read List");
     const handewishListlclick = () => toast.error("You have Already this Books !")
   
    
            
    return (
        
     <div>
       <Nav/>



     <div className="flex justify-center items-center mt-10">
     <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-[500px] max-w-[250px]">
  <figure><img src={currentBook.image_url} alt="Album"/></figure>
  <div className="card-body">
  <h1 className="card-title text-[14px]">BookName:{currentBook.bookName}</h1>
    <h2 className="card-title text-[14px]">review: {currentBook.review}</h2>
    <h3 className="font-semibold text-[12px]">tags: {currentBook.tags}</h3>
     <p className="font-semibold text-[12px]"> Number of pages: { currentBook.totalPages}</p>
     <p className="font-semibold text-[12px]">publisher: {currentBook.publisher}</p>
     <p className="font-semibold text-[12px]">YearOfPublishing: {currentBook.yearOfPublishing}</p>
     <h4 className="font-semibold text-[12px]">Rating:  {currentBook.rating}</h4>
     <div className="flex gap-4">
    <button onClick={ handelClick} className="btn border-green-400 border hover:bg-green-400">Read</button>
    <button onClick={handewishListlclick} className="btn bg-cyan-400">Wishlist</button>
   <ToastContainer  position="top-right"/>
    </div>
    </div>
    </div>
    </div>
    </div>

);
};

export default Books;


