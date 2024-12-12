import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setMetadata } from "../utils/seo";

function Resources() {
  const { profileName } = useParams();
  useEffect(() => {
    setMetadata(
      `Resources | ${profileName?.toUpperCase()}`,
      `Resources ${profileName?.toUpperCase()}`,
      ["Resources", profileName?.toUpperCase() ?? ""]
    );
  });
  return <div>Resources</div>;
}

export default Resources;
