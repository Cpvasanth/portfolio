import React from "react";

export default function VideoSection() {
    return (
        <section className="w-full px-4 py-20 md:px-10 lg:pl-32">
            <div className="w-full max-w-7xl">
                <video
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/ad.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}
