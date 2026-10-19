"use client";

const images = [
  "/gallery-1.webp",
  "/gallery-2.webp",
  "/gallery-3.webp",
  "/gallery-4.webp",
  "/gallery-5.webp",
];

export default function MarqueeGallery() {
  return (
    <section className="section moving-images">
      <div className="master-gallery-marquee">
        <div
          className="gallery-images-wrap"
          style={{
            display: "flex",
            gap: "0px",
            animation: "marquee 35s linear infinite",
            willChange: "transform",
          }}
        >
          {/* Repeat list 3 times for completely seamless, uninterrupted 0-gap continuous scrolling */}
          {[...images, ...images, ...images].map((img, i) => (
            <div
              key={i}
              className="image-wrap-gallery-big"
              style={{
                flex: "0 0 520px",
                width: "520px",
                height: "520px",
                margin: 0,
                padding: 0,
              }}
            >
              <img
                src={img}
                alt=""
                className="image-cover"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-${images.length * 520}px, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
