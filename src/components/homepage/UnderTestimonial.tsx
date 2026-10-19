import Image from "next/image";

export default function UnderTestimonial() {
  return (
    <section className="section under-testimonial-section">
      <div className="color-fill-under-testimonial" />

      <div className="w-layout-blockcontainer main-container w-container">
        <div className="flex-right">
          <div className="wrap-under-testimonial">
            <Image
              src="/under-testimonial.webp"
              alt="Impact Studio Work"
              width={1020}
              height={637}
              className="image-under-testimonial"
            />

            <div className="wrap-quote-under-testimonial">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="icon-quote-under-testimonial"
                src="/icon-quote-red.svg"
                alt="Quote"
              />
              <p className="text-quote-big">
                It&apos;s hard to explain how much of a help Impact Studio was
                for our business and impact goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
