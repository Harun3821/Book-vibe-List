import PropTypes from 'prop-types';
import { IoIosStarOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BookCard = ({ books }) => {
    const { image_url, author, bookName, bookId} = books;

    return (
        <Link to={`/books/${bookId}`} className="card w-96 bg-base-100 shadow-xl border-2">
            <figure><img src={image_url} alt="Book Cover" /></figure>
            <div className="card-body">
                <div className="badge flex justify-between gap-9">
                    <h2 className="card-title text-green-400 font-semibold">Young Adult</h2>
                    <p className='card-title text-green-400 font-semibold'>Identity</p>
                </div>
                <p className='text-2xl font-semibold'>{author}</p>
                <h5>{bookName}</h5>
                <div className="card-actions">
                    <p>Fiction</p>
                    <div className="flex items-center gap-2">
                        <h6>5.00</h6>
                        <IoIosStarOutline className="font-semibold" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;

BookCard.propTypes={
   books: PropTypes.obj
}
