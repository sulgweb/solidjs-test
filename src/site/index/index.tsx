/* @refresh reload */
import { render } from "solid-js/web";
import MainRouter from "@/site/index/router/MainRouter";

render(() => <MainRouter />, document.getElementById("root") as HTMLElement);
