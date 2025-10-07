import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div>
      <h1 className="text-center mb-10 text-2xl font-semibold">Book</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5 mb-15 ">
          {books.map((book, index) => (
            <Book key={index} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
