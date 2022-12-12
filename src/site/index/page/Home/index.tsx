import {
  Component,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Show,
} from "solid-js";
import { useNavigate } from "@solidjs/router";
import Button from "@plumeUi/Button";
import { getUrlParam } from "@/utils/getUrlParams";
import Loading from "@plumeUi/Loading";
import axios from "axios";

const Home: Component = () => {
  const navigate = useNavigate();
  const [data, setData] = createSignal("");
  const [loading, setLoading] = createSignal(true);

  const updateData = () => {
    setLoading(true);
    axios
      .get("https://api.uomg.com/api/comments.163?format=text")
      .then((res: any) => {
        setLoading(false);
        setData(res.data);
      });
  };

  const gotoAbout = () => {
    navigate("/about?name=1");
  };

  onMount(() => {
    console.log(getUrlParam("name"));
  });

  createEffect(() => {
    console.log(data());
  });

  onCleanup(() => {});

  return (
    <div>
      <div>home</div>
      <Button onClick={gotoAbout}>to about</Button>
      <Button onClick={updateData}>updateData</Button>
      <Show when={!loading()} fallback={<Loading />}>
        <div>{data()}</div>
      </Show>
    </div>
  );
};

export default Home;
