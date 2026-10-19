const socials = [
  { name: "Twitter", href: "https://www.twitter.com", icon: "/icon-twitter.svg" },
  { name: "Linked in", href: "https://www.linkedin.com", icon: "/icon-linkedin.svg" },
  { name: "Instagram", href: "https://www.instagram.com", icon: "/icon-instagram.svg" },
];

export default function ContactSection() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="wrap-contact-heading">
          <div className="single-contact-heading">
            <h2 className="h2-contact text-style-h2">Let&apos;s talk</h2>
          </div>
          <div className="single-contact-heading">
            <h2 className="h2-contact text-style-h2">Design &amp; Business.</h2>
          </div>
          <div className="single-contact-heading">
            <h2 className="h2-contact text-style-h2">Let&apos;s make impact.</h2>
          </div>
        </div>

        <div className="divider-contact" />

        <div className="bottom-contact">
          <div className="left-contact">
            {socials.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="single-contact-link"
              >
                <div className="circle-contact">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="icon-social" src={item.icon} alt={item.name} />
                </div>
                <div>{item.name}</div>
              </a>
            ))}
          </div>

          <div className="right-contact">
            <a href="mailto:hi@impact.com" className="single-contact-link">
              <div>hi@impact.com</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
