# Video Caption App

This web application allows users to add captions to a video by specifying timestamps. It provides a simple interface for entering captions and synchronizing them with the video playback.

## Documentation

- https://drive.google.com/file/d/1GKAszR5wLqyK4F8p2Tc42hYj6TJLcI9x/view?usp=sharing

## Features

- **Video Playback**: Users can enter a URL to a hosted video or use a preloaded sample video.
- **Caption Management**: Users can add captions with specified start and end times.
- **Interactive UI**: The video player allows pausing and resuming playback, synchronized with the entered captions.

## Sample Video

The application includes a sample video named "sample" which is stored in the public folder and _please only use this name in the search field_. To view this sample, navigate to `/video/sample` in the deployed application. If you are running the application locally, ensure that the sample video is accessible at `http://localhost:3000/video/sample`.

## Deployment

The application is deployed on Vercel and can be accessed [here](https://video-caption-rho.vercel.app/).

## Technologies Used

- React.js
- Next.js
- TypeScript
- MongoDB (for video storage)
- Tailwind CSS (for styling)
- React Hot Toast (for notifications)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/megicula27/Video_caption.git
   cd Video_caption

   ```

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open http://localhost:3000 in your browser to view the application. To view the sample  
   video, navigate to http://localhost:3000/video/sample.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.
