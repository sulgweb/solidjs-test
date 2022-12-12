import { preName } from "@plumeUi/var";
import "./index.less";
const Button = (props) => {
  const { children, onClick, type = "primary" } = props;
  return (
    <div class={`${preName}-btn__${type}`}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
