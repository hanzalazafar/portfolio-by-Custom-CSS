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

    // Yeh code client-side pe run hoga jab component mount hoga
    useEffect(() => {
        if (typeof window !== 'undefined') { // Ye check karta hai ke code sirf browser mein chale
            setWindowWidth(window.innerWidth); // Window ka width set karte hain
        }
    }, []); // Yeh sirf initial render ke baad chalega

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

