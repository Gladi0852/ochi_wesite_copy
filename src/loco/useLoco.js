import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
export function useLoco() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      lerp: 0.1,
    });
  }, []);
}
