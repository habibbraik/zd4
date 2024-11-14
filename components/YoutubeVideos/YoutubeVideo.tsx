import VideoGrid from "./VideoGrid";
import SectionHeading from "../SectionHeading";

export default function YoutubeVideos() {
  return (
    <div id="videos" className="px-8">
  <SectionHeading
  heading="Appreciated by Thousands of Fans"
  subheading="Weekly Stage: Creation, Sound Engineering, Video Production, Screenwriting, Editing, and Much More."
/>
      <VideoGrid />
    </div>
  );
}
