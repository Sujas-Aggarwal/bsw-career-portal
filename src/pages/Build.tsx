import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setMetadata } from "../utils/seo";

function Build() {
  const { profileName } = useParams();
  useEffect(() => {
    setMetadata(
      `Build | ${profileName?.toUpperCase()}`,
      `Build ${profileName?.toUpperCase()}`,
      ["Build", profileName?.toUpperCase() ?? ""]
    );
  });
  return <div>Build</div>;
}

export default Build;
