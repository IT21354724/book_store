import React, { useState, useEffect } from "react";
import "./ExploreMenu.css";
import axios from "axios";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory, setBooks }) => {
  // Fetch books when category changes
  useEffect(() => {
    if (category === "All") {
      setBooks([]); // Clear books when "All" category is selected
      return;
    }

    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=20`
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]); // Handle error by clearing books
      }
    };
    fetchBooks();
  }, [category, setBooks]);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse collection featuring an enchanting array of books.
        Our mission is to ignite your imagination and elevate your reading
        experience, one captivating story at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
