import React from "react";
import TextInput from "../components/TextInput";
import CustomButton from "../components";

const UserForm: React.FC = () => {
  return (
    <form>
      <TextInput label="First Name" name="firstName" />
      <TextInput label="Last Name" name="lastName" />
      <CustomButton
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
