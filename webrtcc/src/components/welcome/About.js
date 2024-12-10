import React from 'react';
import aboutImg from '../../assets/about-img.png'; 
import './About.css'; 

const AboutUs = () => {
  return (
    <section id="about" className="about py">
      <div className="about-inner container">
        <div className="about-content flex">
          <div className="about-left">
            <div className="section-head">
              <h2>About Us</h2>
              <div className="border-line"></div>
            </div>
            <p className="text text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias delectus facilis, temporibus eum consectetur, a debitis exercitationem quae distinctio aliquid ea ipsam vitae esse amet soluta maxime dolorem? Inventore ut maiores illo ipsum nisi, nulla eligendi unde reiciendis quod voluptas velit sit voluptate perferendis cum pariatur molestiae tenetur repellat!
            </p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
          <div className="about-right">
            <div className="img">
			<img src={aboutImg} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
