import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setNavActive } from "../slice/themeSlice";
import axios from "axios";

export const ScrollObserver = (
  ref: HTMLElement,
  name: string,
  action: Dispatch<AnyAction>
) => {
  const Observer = new IntersectionObserver(
    ([entry]) => {
      entry.isIntersecting && action(setNavActive(name));
    },
    { root: null, threshold: 0.5 }
  );
  Observer.observe(ref);
};

export const handleRequest = async (
  method: string,
  data: any = null,
  path: string
) => {
  const url = process.env.REACT_APP_BACKEND_URL + path;
  let result;
  try {
    if (method === "POST") {
      result = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return result;
    } else {
      let result = await axios.get(url + `/${data}`);
      return result;
    }
  } catch (error) {
    result = error;
    return result;
  }
};
