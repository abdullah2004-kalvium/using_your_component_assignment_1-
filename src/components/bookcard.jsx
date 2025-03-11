import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 text-center">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{book.name}</h2>
      <p className="text-black text-sm">{book.genre}</p>
      <p className="text-gray-600 text-sm">Author: {book.author}</p>
    </div>
  );
};

export default BookCard;