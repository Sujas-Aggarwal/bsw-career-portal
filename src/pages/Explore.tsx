import Main from "../components/explore/Main";
import Hero from "../components/explore/Hero";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setMetadata } from "../utils/seo";

export default function ExplorePage() {
  const { profileName } = useParams();
  useEffect(() => {
    setMetadata(
      `Explore | ${profileName?.toUpperCase()}`,
      `Explore ${profileName?.toUpperCase()}`,
      ["Explore", profileName?.toUpperCase() ?? ""]
    );
  });
  return (
    <div>
      <Hero profileName={profileName} />
      <Main profileName={profileName} />
    </div>
  );
}
