"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const VideoSearch: React.FC = () => {
  const router = useRouter();
  const [videoName, setVideoName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (videoName.trim()) {
      router.push(`/videos/${videoName}`);
      setVideoName("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="max-w-xl p-8 bg-gray-800 rounded-lg shadow-lg">
        {" "}
        {/* Changed from max-w-lg to max-w-xl */}
        <h1 className="text-2xl mb-4">Video Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter video name: use 'sample' for demo"
            value={videoName}
            onChange={(e) => setVideoName(e.target.value)}
            className="w-full mt-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
          >
            Go to Video
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoSearch;
