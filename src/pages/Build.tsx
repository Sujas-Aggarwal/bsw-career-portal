import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { setMetadata } from "../utils/seo";
import Hero from "../components/explore/Hero";
import profileData from "../assets/profiles.json";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FAQs } from "../components/explore/Main";
import { MainResource } from "./Resources";

function Build() {
  const { profileName } = useParams();
  useEffect(() => {
    setMetadata(
      `Build | ${profileName?.toUpperCase()}`,
      `Build ${profileName?.toUpperCase()}`,
      ["Build", profileName?.toUpperCase() ?? ""]
    );
  });
  return (
    <div>
      <Hero profileName={profileName} />
      <Main profileName={profileName} />
    </div>
  );
}
function Main({ profileName }: { profileName: string | undefined }) {
  const profile = profileData[profileName as keyof typeof profileData];
  return (
    <div>
      <Timeline profile={profile} />
      <FAQs profile={profile} />
      <MainResource profileName={profileName} />
    </div>
  );
}

function Timeline({ profile }: { profile: any }): JSX.Element {
  function testTimeline(profile: any): any {
    profile.timeline = [
      {
        heading: "Throughout the journey",
        content:
          "Maintain a high GPA, and regularly give contests on Codeforces.",
      },
      {
        heading: "Post 3rd sem",
        content:
          "Build your CV. Do projects in areas you like, find an internship/project for the summer. Participate in tech competitions to build schols.",
      },
      {
        heading: "Post 4th sem",
        content:
          "Follow the resources mentioned for brainteasers, probability and programming problems.",
      },
      {
        heading: "1 month before interviews",
        content:
          "Begin company-specific test preparation in shortlisted companies.",
      },
      {
        heading: "2 weeks before interviews",
        content: "HR prep, Mock interviews, Market Making.",
      },
    ];
    return profile;
  }
  //remove this function in production, only for testing purposes - 
  profile = testTimeline(profile);
  function TimelineItem({
    heading,
    content,
    index,
  }: {
    heading: string;
    content: string;
    index: number;
  }): JSX.Element {
    const isTop = index % 2 !== 0;
    return (
      <div
        style={{
          marginBottom:
            window.innerWidth > 700 ? (isTop ? "200px" : "-140px") : "0px",
        }}
        className={`text-center w-[200px] z-[8] flex flex-col items-center gap-2 ${
          window.innerWidth > 700
            ? isTop
              ? "translate-y-[-50%]"
              : "translate-y-[50%]"
            : ""
        }`}
      >
        {!isTop ? (
          <FaArrowDown className="text-xl mb-2 md:flex hidden" />
        ) : null}
        <div
          className="bg-white  p-4 shadow-md rounded-lg flex flex-col items-center"
          style={{ border: "1px solid #ccc" }}
        >
          <h2 className="font-bold text-lg">{heading}</h2>
          <p className="text-sm text-gray-700">{content}</p>
        </div>
        {isTop ? <FaArrowUp className="text-xl mt-2 md:flex hidden" /> : null}
      </div>
    );
  }
  if (!profile.timeline || profile.timeline.length==0) return <></>;
  return (
    <section className="py-10 relative">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Timeline
      </h1>
      <div className="relative bg-white py-40 md:px-10   w-full gap-10 flex md:flex-row flex-col  md:justify-evenly items-center">
        <img
          src="/assets/landing/squiggly_line.svg"
          alt="Line"
          className="w-full absolute top-[50%] md:rotate-0 rotate-90 h-full object-center translate-y-[-50%]"
        />
        {profile.timeline.map((item: any, index: number) => (
          <TimelineItem
            key={index}
            heading={item.heading}
            content={item.content}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Build;
