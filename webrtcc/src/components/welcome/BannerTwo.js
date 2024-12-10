import React from 'react';
import './BannerTwo.css'; // Import your CSS file

const BannerTwo = () => {
  return (
    <section id="banner-two" className="banner-two">
      <div className="container">
        <div className="row">
          <div className=" text-center">
            <p className="lead text-white">
              <i className="fas fa-quote-left"></i> When You Are Young And Healthy, It Never Occurs To You That In A Single Second
			  Your Whole Life Could Change <br />
              your whole life could change. <i className="fas fa-quote-left"></i>
            </p>
            <div className="btn-container">
              <div className="btn-group">
                <a href="#" className="btn btn-primary">Learn More</a>
                <a href="#" className="btn btn-primary">Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
