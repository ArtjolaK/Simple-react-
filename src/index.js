import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import { books } from "./books";

function BookList() {
  return (
    <>
      <h1 className="main ">Book List</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </>
  );
}
const Book = (props) => {
  const handleButton = () => {
    return alert("The button is pressed ");
  };
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title} </h4>
      <h1>{author}</h1>
      <button type="button" onClick={() => handleButton(author)}>
        Button
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
