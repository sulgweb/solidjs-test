import { preName } from "@plumeUi/var";
import { ParentProps } from "solid-js";
import "./index.less";

export interface InputProps extends ParentProps {
  value?: string;
  onChange?: (e) => void;
  onInput?: (e) => void;
  placeholder?: string;
}
const Input = (props: InputProps) => {
  const { value = "", onChange, onInput, placeholder = "请输入" } = props;
  return (
    <div class={`${preName}-input`}>
      <span></span>
      <input
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
