const steps = [
  {
    step: "1",
    title: "Research",
    description:
      "Focussed on understanding your business requirements, users and problems",
  },
  {
    step: "2",
    title: "Ideation & design",
    description:
      "In this stage we work closely to come up with lots of solutions and finalize design.",
  },
  {
    step: "3",
    title: "Develop and maintain",
    description:
      "I develop your product in Webflow and help you with maintaining it.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section padding-top-80">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="center-heading mg-bottom-80">
          <h2 className="text-style-h2">Process that works for you</h2>
        </div>

        <div className="master-process-circles">
          {steps.map((item, index) => (
            <div key={index} className="single-process-circle">
              <div className="big-process-circle">{item.step}</div>
              <div className="right-process-circle">
                <h3 className="text-style-h3">{item.title}</h3>
                <p className="text-style-body-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
