const features = [
  {
    icon: "⭐",
    title: "Quality Products",
    text: "Carefully selected products for your pets.",
  },
  {
    icon: "💰",
    title: "Great Value",
    text: "Quality pet essentials at reasonable prices.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    text: "Convenient delivery directly to your doorstep.",
  },
  {
    icon: "❤️",
    title: "Pet Friendly",
    text: "Everything we do starts with your pet's wellbeing.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section features-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">WHY PET HAVEN</span>
          <h2>Pet Care Made Simple</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;