"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import VideoPlayback from "@/components/VideoPlayback";
import VideoForm from "@/components/VideoForm";

interface Caption {
  text: string;
  start: string;
  end: string;
}

const VideoPage: React.FC = () => {
  const params = useParams();
  const id = params ? params.id : undefined;
  const [captions, setCaptions] = useState<Caption[]>([]);
  const [videoDuration, setVideoDuration] = useState<number | null>(null);

  const handleAddCaption = (caption: Caption) => {
    setCaptions([caption]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-2xl w-full max-w-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">Video Caption App</h1>

        {id && (
          <VideoPlayback
            fileName={`${id}.webm`}
            captions={captions}
            setVideoDuration={setVideoDuration}
          />
        )}
        <VideoForm
          onAddCaption={handleAddCaption}
          videoDuration={videoDuration}
        />
      </div>
    </div>
  );
};

export default VideoPage;
