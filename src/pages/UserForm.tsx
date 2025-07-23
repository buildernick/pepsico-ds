import React from "react";
import { TextInput, Button } from "pepsico-ds";

const UserForm: React.FC = () => {
  return (
    <form>
      <TextInput label="First Name" name="firstName" />
      <TextInput label="Last Name" name="lastName" />
      <Button
        type="submit"
        text="Submit"
        variant="primary"
        onClick={() => {
          console.log("Form submitted");
        }}
      />
    </form>
  );
};

export default UserForm;
