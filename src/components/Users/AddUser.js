import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrappers from "../Helpers/Wrappers";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegenameInputRef = useRef();
  // const [eneteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const AddUserhandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegenameInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name,age and collegename (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid  age (>0).",
      });
      return;
    }
    props.onAdd(enteredName, enteredUserAge, enteredCollegeName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegenameInputRef.current.value = "";
  };
  // if (
  //   eneteredUsername.trim().length === 0 ||
  //   enteredAge.trim().length === 0
  // ) {
  //   setError({
  //     title: "Invalid Input",
  //     message: "Please enter a valid name and age (non-empty values).",
  //   });
  //   return;
  // }
  // if (+enteredAge < 1) {
  //   setError({
  //     title: "Invalid age",
  //     message: "Please enter a valid  age (>0).",
  //   });
  //   return;
  // }
  // props.onAdd(eneteredUsername, enteredAge);
  // setEnteredUsername("");
  // setEnteredAge("");
  // };
  // const eneteredUsernameHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const eneteredAgeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrappers>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={AddUserhandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Name"
            // value={eneteredUsername}
            // onChange={eneteredUsernameHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Age"
            // value={enteredAge}
            // onChange={eneteredAgeHandler}
            ref={ageInputRef}
          />
          <label htmlFor="collegename">College Name</label>
          <input
            id="collegename"
            type="text"
            placeholder="college name"
            // value={eneteredUsername}
            // onChange={eneteredUsernameHandler}
            ref={collegenameInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrappers>
  );
};
export default AddUser;
