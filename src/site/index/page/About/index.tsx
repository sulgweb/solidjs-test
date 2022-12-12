import { useNavigate } from "@solidjs/router";
import { Component, onMount } from "solid-js";
import Button from "@plumeUi/Button";
import { getUrlParam } from "@/utils/getUrlParams";

const About: Component = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/home?name=666");
  };

  onMount(() => {
    console.log(getUrlParam("name"));
  });
  return (
    <div>
      <div>About</div>
      <Button onClick={gotoHome}>gotoHome</Button>
    </div>
  );
};

export default About;
