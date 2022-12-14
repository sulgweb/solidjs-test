import { onCleanup } from "solid-js";
declare module "solid-js" {
    namespace JSX {
        interface Directives {
            clickOutside?: () => void;
        }
    }
}
export const clickOutside = function (el: Element, accessor: () => Function) {
    console.log("active");
    const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
    window.addEventListener("click", onClick);

    onCleanup(() => document.body.removeEventListener("click", onClick));
};

export const useClickOutside = (fn: (el: HTMLElement, accessor: () => Function) => void) => {};