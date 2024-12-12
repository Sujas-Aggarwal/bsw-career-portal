import Hero from "../components/landing/Hero";
import Explore from "../components/landing/Explore";
import BuildProfile from "../components/landing/BuildProfile";
import HandsOnExposure from "../components/landing/HandsOnExposure";
import Prepare from "../components/landing/Prepare";
import { setMetadata } from "../utils/seo";
import { useEffect } from "react";

export default function Landing() {
  useEffect(
    () =>
      setMetadata("Career Portal | BSW", "Career Portal | BSW", [
        "Landing",
        "Home",
      ]),
    []
  );
  return (
    <div>
      <Hero />
      <Explore />
      <BuildProfile />
      <HandsOnExposure />
      <Prepare />
    </div>
  );
}
