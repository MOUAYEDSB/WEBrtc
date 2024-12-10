import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../../assets/herobackground.jpg'; // Adjust the path as necessary
import "./Herosection.css";

const Herosection = () => {
  return (
    <header 
      className="header" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        // backgroundPosition: "center top", 
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        paddingTop: "180px", // Decreased padding top to move content higher
        paddingBottom: "250px", // Decreased padding bottom to balance top padding
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Align content towards the start (top) of the container
        textAlign: "center",
        position: "relative"
      }}
    >
      {/* Background Overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          // backgroundColor: "rgba(255, 255, 255, 0.5)", // Light overlay
          // zIndex: 1
        }}
      />

      <div className="header-inner text-center" style={{ position: "relative", zIndex: 2, maxWidth: "800px", width: "100%", marginLeft: "10%", marginRight: "auto" }}> {/* Moved content slightly right */}
        <div className="container grid a1" style={{ padding: "0px" }}>
          <div className="header-inner-left" style={{ color: "#0050d5", textAlign: "start", marginLeft: "auto", marginRight: "40%", }}> {/* Adjusted margin to move content slightly to the right */}
            <h1 style={{  textTransform: "capitalize", fontSize: "53px",fontWeight: 50}}>
            Your Most Trusted<br /> 
            <span style={{ fontWeight: 600 }}>HEALTH PARTNER</span>
            </h1>
            <p className="lead" style={{ marginBottom: "30px",textTransform: "capitalize" }}>
              the best match services for you
            </p>
            <p className="text text-md" style={{ color: "#728967", marginBottom: "30px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla odit esse necessitatibus corporis voluptatem?
            </p>
           <div className="btn-group" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Link 
                to="/auth/login_patient.php" 
                className="btn btn-primary" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: '#0050d5', 
                  color: 'white', 
                   height: '40px', 
                  borderRadius: '0', 
                  padding: '0 15px', 
                  textDecoration: 'none' 
                }}
              >
                Get Appointment
              </Link>
              <Link 
                to="#" 
                className="btn btn-primary" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  backgroundColor: '#0050d5', 
                  color: 'white', 
                  height: '40px', 
                  borderRadius: '0', 
                  padding: '0 15px', 
                  textDecoration: 'none'
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Herosection;
