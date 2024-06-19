import React, { useEffect, useRef } from "react";

interface Caption {
  text: string;
  start: string;
  end: string;
}

interface VideoPlaybackProps {
  fileName: string;
  captions: Caption[];
  setVideoDuration: (duration: number) => void;
}

const VideoPlayback: React.FC<VideoPlaybackProps> = ({
  fileName,
  captions,
  setVideoDuration,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [captions]);

  const handleVideoLoaded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setVideoDuration(e.currentTarget.duration);
    console.log("Video duration:", e.currentTarget.duration);
  };

  const formatTime = (time: string) => {
    const seconds = parseFloat(time);
    const hh = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const ss = String((seconds % 60).toFixed(3)).padStart(6, "0");
    return `${hh}:${mm}:${ss}`;
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 text-white mt-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg shadow-2xl">
        <video
          ref={videoRef}
          controls
          src={`/videos/${fileName}`}
          width="600"
          className="max-w-full"
          onLoadedMetadata={handleVideoLoaded}
          key={captions.length} // Ensure re-mounting when captions change
        >
          {captions.map((caption, index) => (
            <track
              key={index}
              kind="subtitles"
              srcLang="en"
              src={`data:text/vtt,WEBVTT\n\n${formatTime(
                caption.start
              )} --> ${formatTime(caption.end)}\n${caption.text}`}
              default={index === 0}
            />
          ))}
        </video>
      </div>
    </div>
  );
};

export default VideoPlayback;
