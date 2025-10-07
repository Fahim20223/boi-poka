import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookId = parseInt(id);
  console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  const { image } = singleBook;
  //   console.log(details);
  //   const { image } = details;
  return (
    <div className="max-w-7xl mx-auto m-8">
      <img src={image}></img>
      <button className="btn btn-success">Read</button>
      <button className="btn btn-primary">Wishlist</button>
    </div>
  );
};

export default BookDetails;
