import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const taskInputChangeHandler = (event) => {
    if(event.target.value.trim().length){
      setIsInputValid(true);
    }
    setinputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!inputText.trim().length){
      setIsInputValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isInputValid ? 'invalid' : ''}`}>
        <label >Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
