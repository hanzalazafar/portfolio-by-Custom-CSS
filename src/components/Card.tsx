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
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // Ye effect client-side pe hi chalega
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth); // Window ka width client-side par update karenge
        }
    }, []); // Ye effect sirf initial render ke baad chalega

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
