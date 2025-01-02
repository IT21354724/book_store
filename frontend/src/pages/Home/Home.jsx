import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import BookDisplay from "../../components/BookDisplay/BookDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [books, setBooks] = useState([]);

  return (
    <div>
      <Header />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
        setBooks={setBooks}
      />
      <BookDisplay category={category} books={books} />

      <AppDownload />
    </div>
  );
};

export default Home;
