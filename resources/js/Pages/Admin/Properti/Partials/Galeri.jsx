import React, { useState, useEffect } from 'react';
import Image from './Image';

const Galeri = ({ galeri }) => {
    const [imageActive, setImageActive] = useState(true);
    const [videoActive, setVideoActive] = useState(false);
    const [image, setImage] = useState([]);
    const [video, setVideo] = useState([]);
    useEffect(() => {
        if (galeri) {
            const image = galeri.filter((item) => {
                return item.jenis_file === "image";
            });
            const video = galeri.filter((item) => {
                return item.jenis_file === "video";
            });
            setImage(image);
            setVideo(video);
        }
    }, [galeri]);

    const toggleImage = () => {
        setImageActive(true);
        setVideoActive(false);
    }
    const toggleVideo = () => {
        setVideoActive(true);
        setImageActive(false);
    }

    return (
        <div>
            <div className="flex justify-between">
                <ul className="p-3 w-full h-auto flex gap-3">
                    <li
                        className={`hover:border-b-2 hover:border-secondary px-3 w-full md:w-auto text-center cursor-pointer ${
                            imageActive
                                ? "border-b-2 border-secondary font-extrabold text-secondary"
                                : ""
                        }`}
                        onClick={toggleImage}
                    >
                        Image
                    </li>
                    <li
                        className={`hover:border-b-2 hover:border-secondary px-3 w-full md:w-auto text-center cursor-pointer ${
                            videoActive
                                ? "border-b-2 border-secondary font-extrabold text-secondary"
                                : ""
                        }`}
                        onClick={toggleVideo}
                    >
                        Video
                    </li>
                </ul>
            </div>

            {imageActive && <Image image={image} />}
        
        </div>
    );
}

export default Galeri;
