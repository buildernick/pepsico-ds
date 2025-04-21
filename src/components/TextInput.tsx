import { TextInput } from "pepsico-ds";

export default TextInput;

const CustomTextInput: React.FC<any> = (props) => {
  return <TextInput {...props} />;
};

export { CustomTextInput };
