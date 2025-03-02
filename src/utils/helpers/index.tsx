import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setNavActive } from "../slice/themeSlice";
import axios from "axios";
import { experienceReturnType } from "../../types/returnType";
import { ResumeCardDataType } from "../../types/propsType";

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

type linkList = {
  name: string;
  link: string;
};
type name = string;
type key = "name" | "link";
export const handleSocialLink: (
  linkList: linkList[],
  name: name,
  key: key
) => string | undefined = (linkList, name, key) => {
  if (linkList) {
    let result: linkList | undefined = linkList.find(
      (item) => item.name === name
    );
    return result?.[key];
  }
};

export const sanitizedExperienceData: (
  result: Partial<experienceReturnType>
) => string = (result) => {
  if (!Boolean(result.startDate && result.endDate)) return "";
  const startData = new Date(result.startDate as string);

  const formattedStartDate = startData.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  let formattedEndDate = result.endDate;
  if (result.endDate !== "present") {
    const endData = new Date(result.endDate as string);
    formattedEndDate = endData.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  }
  return formattedStartDate + " - " + formattedEndDate;
};
