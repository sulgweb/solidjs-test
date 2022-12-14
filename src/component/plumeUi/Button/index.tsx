import { preName } from "@plumeUi/var";
import { ParentProps } from "solid-js";
import "./index.less";

export interface ButtonProps extends ParentProps {
  onClick: (e) => void;
  type: "primary" | "success" | "warn" | "error";
  isBg: boolean;
}
const Button = (props: ButtonProps) => {
  const { children, onClick, type = "primary", isBg = false } = props;
  return (
    <div class={`${preName}-btn__${type}`} onClick={onClick}>
      <div class={`${isBg ? `${preName}-btn__${type}-bg` : ""}`}>
        <button>{children}</button>
      </div>
    </div>
  );
};

export default Button;
