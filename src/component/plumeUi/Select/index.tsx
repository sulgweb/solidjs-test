import { preName } from "@plumeUi/var";
import { ParentProps, For, Show, createSignal } from "solid-js";
import { clickOutside, useClickOutside } from "@/directives/clickOutside";
useClickOutside(clickOutside);
import "./index.less";

export interface SelectProps extends ParentProps {
  value?: string;
  onChange?: (e) => void;
  onInput?: (e) => void;
  placeholder?: string;
}
function Select(props: SelectProps) {
  const [visable, setVisable] = createSignal(false);
  return (
    <div
      class={`${preName}-select`}
      use:clickOutside={() => {
        console.log("outside");
        setVisable(false);
      }}
    >
      <div onClick={(e) => setVisable(!visable())}>111</div>
      <Show when={visable()}>
        <div class={`${preName}-select-modal`}>
          <For each={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}>
            {(item) => <div>{item}</div>}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default Select;
