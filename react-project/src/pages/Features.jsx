import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Experience a fast and smooth application with optimized performance.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description:
        "Your data is protected with secure and reliable technologies.",
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description:
        "Enjoy a seamless experience on mobile, tablet, and desktop devices.",
    },
    {
      icon: "⚡",
      title: "Easy to Use",
      description:
        "A simple and intuitive interface designed for everyone.",
    },
    {
      icon: "🎯",
      title: "Powerful Features",
      description:
        "Get everything you need with powerful and useful features.",
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our dedicated support.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">

        {/* Section Header */}
        <div className="features-header">
          <span className="features-subtitle">OUR FEATURES</span>

          <h2>
            Everything You Need
            <span> In One Place</span>
          </h2>

          <p>
            Discover powerful features designed to make your experience
            simple, fast, secure, and enjoyable.
          </p>
        </div>

        {/* Features Cards */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <a href="#learn-more" className="feature-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;