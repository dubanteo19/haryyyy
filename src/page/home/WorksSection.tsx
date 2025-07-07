import { VideoCard } from "@/components/ui/VideoCard";
import React from "react";
import { workVideos } from "../data/videos";

const WorksSection: React.FC = () => {
  return (
    <section id="works" className="bg-pink-50 py-16 px-6 mt-10 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          My Works 📦
        </h2>
        <p className="text-center text-gray-700 mb-10 text-[15px]">
          A collection of my favorite product unboxings, honest reviews, and
          aesthetic setup showcases.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {workVideos.map((video) => (
            <VideoCard {...video} key={video.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
