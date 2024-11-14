"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// const YOUR_CHANNEL_ID = "UCkwRYP1J1hjRXwo5lyBRWdQ";

interface VideoItem {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  spanClass: string;
  objectPosition: string;
}

const thumbnailData = {
  thumbnails: [
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault.avif",
      url: "https://www.youtube.com/watch?v=aalwmOo1gxU",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (1).avif",
      url: "https://www.youtube.com/watch?v=bmg3dfPzJoU",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (3).avif",
      url: "https://www.youtube.com/watch?v=cY74Occ0uUo",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (4).avif",
      url: "https://www.youtube.com/watch?v=FAVoM8seLes",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (5).avif",
      url: "https://www.youtube.com/watch?v=g4l57UFFBgk",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (6).avif",
      url: "https://www.youtube.com/watch?v=O6K8HIBAvl0",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (1).avif",
      url: "https://www.youtube.com/watch?v=OxM4UxA-MrE",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (7).avif",
      url: "https://www.youtube.com/watch?v=OxM4UxA-MrE",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (4).avif",
      url: "https://www.youtube.com/watch?v=OxM4UxA-MrE",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (3).avif",
      url: "https://www.youtube.com/watch?v=OxM4UxA-MrE",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (5).avif",
      url: "https://www.youtube.com/watch?v=OxM4UxA-MrE",
    },
    {
      image:
        "public/images/jpeg/static-video-thumbnails/hqdefault (1).avif",
      url: "https://www.youtube.com/watch?v=OxM4UxA-MrE",
    },
  ],
};

const VideoCard: React.FC<VideoItem> = ({
  title,
  imageUrl,
  videoUrl,
  spanClass,
  objectPosition,
}) => (
  <Link
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={`group/bento relative w-full ${spanClass}`}
  >
    <div className="absolute inset-0 h-full w-full rounded-lg bg-black opacity-0 transition-all duration-200 group-hover/bento:opacity-30" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute inset-0 z-10 m-auto h-20 w-20 text-red-500 opacity-0 transition duration-200 group-hover/bento:opacity-100"
    >
      <path
        d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
    <Image
      src={imageUrl}
      alt={title}
      width={500}
      height={500}
      className={`h-full w-full rounded-lg object-cover ${spanClass} ${objectPosition}`}
    />
  </Link>
);

const VideoGrid: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };

    loadVideos();
  }, []);

  return (
    <div className="3xl:max-w-[1440px] group mx-auto grid max-w-[83rem] grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3 lg:max-w-[1100px]">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

const fetchVideos = async (): Promise<VideoItem[]> => {
  return thumbnailData.thumbnails.map((thumbnail, index) => ({
    id: (index + 1).toString(),
    title: `Video ${index + 1}`,
    imageUrl: thumbnail.image.replace("public", ""),
    videoUrl: thumbnail.url,
    spanClass:
      index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "md:col-span-1",
    objectPosition: "object-center",
  }));
};

export default VideoGrid;
