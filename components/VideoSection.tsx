"use client";

import React from "react";

export default function VideoSection() {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement.play().catch(() => {
                            // Autoplay might be blocked by browser policies
                            console.log("Autoplay blocked");
                        });
                    } else {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(videoElement);

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <section className="w-full px-4 py-20 md:px-10 lg:pl-32">
            <div className="w-full max-w-7xl">
                <video
                    ref={videoRef}
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/og-image.png"
                >
                    <source src="/freelance-web-developer-promo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}

