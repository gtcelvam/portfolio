import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setNavActive } from "../slice/themeSlice";

export const ScrollObserver = (ref:HTMLElement,name:string,action:Dispatch<AnyAction>) => {
    const Observer = new IntersectionObserver(([entry]) => {
        entry.isIntersecting && action(setNavActive(name));
   }, { root: null, threshold: 0.5 });
    Observer.observe(ref);
}  