import React from "react";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    image,
    bookName,
    rating,
    tags,
    category,
    totalPages,
    publisher,
    bookId,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100  shadow-sm p-8 border rounded-xl border-gray-200 h-full w-96">
        <figure className="bg-gray-100 w-80 p-8 mx-auto  rounded-xl shadow">
          <img className="w-36" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center gap-9">
            {tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{totalPages} </div>
          </h2>
          <p className="font-semibold">Book by : {publisher}</p>
          <div className="card-actions justify-between border-t-2 border-dashed">
            <div className="badge badge-outline mt-3">{category}</div>
            <div className="badge badge-outline mt-3">
              {rating} <IoIosStarHalf />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
