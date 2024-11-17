import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../app/styles/card.css';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // `useEffect` hook to set windowWidth only on the client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth); // Set window width when component mounts on client
    }
  }, []); // Empty dependency array means it runs only once on mount

  // If windowWidth is null, render nothing during SSR
  if (windowWidth === null) {
    return null; // This avoids rendering during SSR (when window is not defined)
  }

  return (
    <div className={`card ${windowWidth >= 640 ? 'card-sm' : ''}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${windowWidth >= 640 ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className="card-container">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

