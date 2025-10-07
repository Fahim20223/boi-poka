import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../Utility/addToDB_temp";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookId = parseInt(id);
  console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  const { image } = singleBook;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };
  //   console.log(details);
  //   const { image } = details;
  return (
    <div className="max-w-7xl mx-auto m-8">
      <img className="w-45 mb-3" src={image}></img>
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-success mr-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-primary">Add to Wishlist</button>
    </div>
  );
};

export default BookDetails;
