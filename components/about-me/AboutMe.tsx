import React from "react";
import Letter from "./Letter";
import SectionHeading from "../SectionHeading";

export default function AboutMe() {
  return (
    <div id="about" className="mx-auto max-w-[1000px] px-4">
      <SectionHeading
        heading="Who is zd4?"
        subheading="Artiste de rap sous le nom de ZD4, alliant talents musicaux et visuels"
      />
      <Letter />
    </div>
  );
}
