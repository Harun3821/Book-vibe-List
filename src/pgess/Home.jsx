
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Hero from "../componte/Hero";
import BookCard from "../componte/Bookcard";






const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/Book.json');
      const data = await response.json();
      setBooks(data);
    };
    fetchData();
  }, []);

  return (
   <div>
  
 <Nav/>
 <Hero/>

<div className="grid lg:grid-cols-3 gap-6 lg:mt-10 mt-4">
   

          {
            books.map(book => <BookCard key={book.id} books={book}></BookCard>)
          }
    </div>
   </div>
  );
};

export default Home;
