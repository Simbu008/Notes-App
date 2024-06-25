import React, { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]);

  function createNote(card) {
    setNotes((prevNotes) => {
      return [...prevNotes, card];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <Card addCard={createNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
