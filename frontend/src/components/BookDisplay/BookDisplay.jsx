import React from "react";
import "./BookDisplay.css";

const FoodDisplay = ({ category, books }) => {
  return (
    <div className="food-display" id="food-display">
      <h2> Select your favourite category</h2>

      <div className="food-display-list">
        {books.length === 0
          ? console.log("no books")
          : books.map((book) => (
              <div key={book.id} className="book-item">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors?.join(", ")}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
