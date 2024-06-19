"use client";
import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";

interface VideoFormProps {
  onAddCaption: (caption: { text: string; start: string; end: string }) => void;
  videoDuration: number | null;
}

const VideoForm: React.FC<VideoFormProps> = ({
  onAddCaption,
  videoDuration,
}) => {
  const [text, setText] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (Number(start) >= Number(end)) {
      toast.error("Start time must be less than end time");
      return;
    }

    if (
      Number(start) < 0 ||
      Number(end) < 0 ||
      (videoDuration !== null &&
        (Number(start) >= videoDuration || Number(end) > videoDuration))
    ) {
      toast.error("Timestamp values must be within the video duration");
      return;
    }

    onAddCaption({ text, start, end });
    toast.success("Caption added!");
    setText("");
    setStart("");
    setEnd("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg w-full shadow-2xl"
    >
      <div className="mb-4">
        <label className="block text-white mb-1">Caption Text:</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1">Start Time (seconds):</label>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
          className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1">End Time (seconds):</label>
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
          className="block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        Add Caption
      </button>
    </form>
  );
};

export default VideoForm;
