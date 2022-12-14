import { useNavigate } from "@solidjs/router";
import { Component, createSignal, onMount } from "solid-js";
import Button from "@plumeUi/Button";
import Input from "@plumeUi/Input";
import Select from "@plumeUi/Select";
import { getUrlParam } from "@/utils/getUrlParams";

const About: Component = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = createSignal("");
  const gotoHome = () => {
    navigate("/home?name=666");
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  onMount(() => {
    console.log(getUrlParam("name"));
  });
  return (
    <div>
      <div>About</div>
      <Button onClick={gotoHome} isBg type="success">
        gotoHome
      </Button>
      <Input value={inputValue()} onInput={onInputChange} />
      <Select />
    </div>
  );
};

export default About;
