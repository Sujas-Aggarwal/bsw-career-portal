import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setMetadata } from "../utils/seo";
import Hero from "../components/explore/Hero";
import profileData from "../assets/profiles.json";

function Resources() {
  const { profileName } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [profileName]);
  useEffect(() => {
    setMetadata(
      `Resources | ${profileName?.toUpperCase()}`,
      `Resources ${profileName?.toUpperCase()}`,
      ["Resources", profileName?.toUpperCase() ?? ""]
    );
  });
  return (
    <div>
      <Hero profileName={profileName} />
      <MainResource profileName={profileName} />
    </div>
  );
}
export function MainResource({ profileName }: { profileName: string | undefined }) {
  const profile = profileData[profileName as keyof typeof profileData];
  return (
    <div className="w-full flex flex-col justify-center items-center px-10 py-20">
      <h1 className="text-xl md:text-4xl font-bold font-[Poppins] pb-10">
        A Guide to {profileName?.toUpperCase()} Preparation
      </h1>
      <p dangerouslySetInnerHTML={{ __html: profile?.resources ?? "Will be updated soon" }}></p>
    </div>
  );
}
export default Resources;
