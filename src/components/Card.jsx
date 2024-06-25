import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Card(props) {
  const [isExpanded, setExpand] = useState(false);

  const [card, setCard] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCard((prevCard) => {
      return {
        ...prevCard,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    props.addCard(card);
    setCard({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            onChange={handleChange}
            value={card.title}
            type="text"
            name="title"
            placeholder="Title of the Content"
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          value={card.content}
          placeholder="Content of the Note "
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Card;
