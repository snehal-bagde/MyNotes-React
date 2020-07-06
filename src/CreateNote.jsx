import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const expandIt = () => {
    setExpand(true);
  };

  const shrinkIt = () => {
    setExpand(false);
  };

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="main_note" onDoubleClick={shrinkIt}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              onChange={InputEvent}
              value={note.title}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}

          <textarea
            cols=""
            rows=""
            name="content"
            onChange={InputEvent}
            value={note.content}
            placeholder="Write a Note......"
            onClick={expandIt}
          />
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateNote;
