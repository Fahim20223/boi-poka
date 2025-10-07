import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto p-11">
      <div className="card card-side  flex bg-gray-100 p-12 rounded-xl">
        <div className="card-body">
          <h2 className="card-title md:text-4xl">
            Books to freshen up <br className="hidden lg:block" /> your
            bookshelf
          </h2>

          <div className="card-actions mt-5">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
        <figure className="w-[250px]">
          <img className="rounded-xl" src={bookImg} alt="books photo" />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
