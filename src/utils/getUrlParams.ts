import { useLocation } from "@solidjs/router";

export const getUrlParam = (key) => {
  const params = getAllParams();
  return params[key];
};

export const getAllParams = () => {
  const location = useLocation();
  let str = location.search.substr(1).split("&");
  let obj = {};
  str.forEach((e) => {
    let list = e.split("=");
    obj[list[0]] = list[1];
  });
  return obj;
};
