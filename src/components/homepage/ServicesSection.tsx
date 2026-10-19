import Link from "next/link";

const services = [
  { number: "1", title: "UX Design", href: "/services" },
  { number: "2", title: "Webflow", href: "/services" },
  { number: "3", title: "App design", href: "/services" },
];

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="flex-right">
          <div className="master-services">
            <div className="heading-left mg-bottom-80">
              <h2 className="text-style-h2">Things we can do for you</h2>
            </div>

            <div className="master-services-list">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={`single-service-list${index === services.length - 1 ? " list-item" : ""}`}
                >
                  <div className="text-number-list">{service.number}</div>
                  <div className="wrap-text-list">
                    <div className="text-list-big">{service.title}</div>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-style-subtitle">
              Quisque rutrum. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. In hac habitasse platea dictumst. Proin magna.
              Nullam dictum felis eu pede mollis pretium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
