import React from "react";
import "./Services.css";
import dots from "../../assets/4-dots.png";
import icon1 from "../../assets/service-icon-1.png";
import icon2 from "../../assets/service-icon-2.png";
import icon3 from "../../assets/service-icon-3.png";
import icon4 from "../../assets/service-icon-4.png";

const Services = () => {
  return (
    <section id="services" className="services py">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="lead">The Best Doctor gives the least medicines</h2>
          <p className="text text-lg">
            A perfect way to show your hospital services
          </p>
          <div className="line-art flex ">
            <div></div>
            <img src={dots} alt="line art" />
            <div></div>
          </div>
        </div>
        <div className="services-inner text-center grid">
          <article className="service-item grid">
            <div className="icon">
              <img src={icon1} alt="Cardio Monitoring icon" />
            </div>
            <div className="text-inline">
              <h3>Cardio Monitoring</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </div>
          </article>

          <article className="service-item">
            <div className="icon">
              <img src={icon2} alt="Medical Treatment icon" />
            </div>
            <div className="text-inline">
              <h3>Medical Treatment</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </div>
          </article>

          <article className="service-item">
            <div className="icon">
              <img src={icon3} alt="Emergency Help icon" />
            </div>
            <div className="text-inline">
              <h3>Emergency Help</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </div>
          </article>

          <article className="service-item">
            <div className="icon">
              <img src={icon4} alt="First Aid icon" />
            </div>
            <div className="text-inline">
              <h3>First Aid</h3>
              <p className="text text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis possimus doloribus facilis velit, assumenda tempora
                quas mollitia quos voluptatibus consequatur!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
