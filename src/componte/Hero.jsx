import { Link } from "react-router-dom";
import bookimg from "../assets/pngwing 1.png"


const Hero = () => {


    return (
        <div className="hero lg:h-[500px] max-w-[1200px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bookimg} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Books to freshen up<br/> your bookshelf</h1>
            <button className="btn  bg-green-400"> <Link to={`/books/`}>View The List</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Hero;