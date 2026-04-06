// YouTubeCarousel.jsx
import { useState } from 'react';
import './YouTubeCarousel.css';

const videos = [
  'nC6us3Oz7RA',
  'AUkmvnU7z14',
  'Cp5gNgRBsYc'
];

export const YouTubeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button onClick={handlePrev} className="nav-button left">{'<'}</button>

        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>

        <button onClick={handleNext} className="nav-button right">{'>'}</button>
      </div>
    </div>
  );
};

export default YouTubeCarousel;
