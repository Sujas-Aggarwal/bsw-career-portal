import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setMetadata } from "../utils/seo";
import Hero from "../components/explore/Hero";

function Build() {
  const { profileName } = useParams();
  useEffect(() => {
    setMetadata(
      `Build | ${profileName?.toUpperCase()}`,
      `Build ${profileName?.toUpperCase()}`,
      ["Build", profileName?.toUpperCase() ?? ""]
    );
  });
  return <div>
    <Hero profileName={profileName} />
    <Main profileName={profileName} />
  </div>;
}
function Main({profileName}: {profileName: string | undefined}) {
  return (
    <div>
      <h1>Build</h1>
    </div>
  );
}
export default Build;
