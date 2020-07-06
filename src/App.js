import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am clicked");
    setAddItem((oldItem) => {
      return [...oldItem, note];
    });
  };

  const DeleteNote = (id) => {
    setAddItem((oldItem) => {
      return oldItem.filter((val, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            passDelete={DeleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
