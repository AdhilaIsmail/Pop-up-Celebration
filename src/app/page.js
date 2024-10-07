"use client";

import React, { useState } from "react";
import FullPageCelebration from "./components/FullPageCelebration";
import CompactCelebration from "./components/CompactCelebration";
import { Dialog } from "@mui/material";
import Head from "next/head"; 

const HomePage = () => {
  const [showFullPage, setShowFullPage] = useState(false);
  const [showCompact, setShowCompact] = useState(false);

  const triggerFullPageCelebration = () => {
    setShowFullPage(true);
    setTimeout(() => {
      setShowFullPage(false);
    },30000); // Automatically close after 30 seconds
  };

  const triggerCompactCelebration = () => {
    setShowCompact(true);
    setTimeout(() => {
      setShowCompact(false);
    }, 30000); // Automatically close after 3 seconds
  };

  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      fontFamily: "'Bungee', cursive",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundImage: "url('bg6.jpeg')", // Replace with your image path
      backgroundSize: "cover", // Makes the image cover the entire area
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      backgroundPosition: "center", // Centers the image
    }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 style={{ color: "white", fontSize: "2rem", marginBottom: "50px" }}>
        Welcome to Celebration Pop-ups!
      </h1>

      {/* Full Page Celebration Button */}
      <div
        style={{
          position: "relative",
          width: "690px", // Adjust width as needed
          height: "100px", // Adjust height as needed
          backgroundImage: "url('button.png')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.3s ease, filter 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.filter = "brightness(1.1)";
          const textElement = e.currentTarget.querySelector('.button-text');
          if (textElement) {
            textElement.style.color = "#FFD700"; // Change text color on hover
            textElement.style.textShadow = "1px 1px 3px black"; // Adjust shadow on hover
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.filter = "brightness(1)";
          const textElement = e.currentTarget.querySelector('.button-text');
          if (textElement) {
            textElement.style.color = "white"; // Reset text color
            textElement.style.textShadow = "1px 1px 2px black"; // Reset shadow
          }
        }}
        onClick={triggerFullPageCelebration}
      >
        <span
          className="button-text"
          style={{
            color: "white",
            fontSize: "1.2rem",
            fontFamily: "'Bungee', cursive", // Change font family
            fontWeight: "bold", // Change font weight
            letterSpacing: "2px", // Adjust letter spacing
            lineHeight: "1", // Adjust line height
            textShadow: "1px 1px 2px black",
            transition: "color 0.3s ease, text-shadow 0.3s ease",
          }}
        >
          Full Page Celebration with XP Bar
        </span>
      </div>

      {/* Compact Celebration Button */}
      <div
        style={{
          position: "relative",
          width: "690px", // Adjust width as needed
          height: "100px", // Adjust height as needed
          backgroundImage: "url('button.png')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.3s ease, filter 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.filter = "brightness(1.1)";
          const textElement = e.currentTarget.querySelector('.button-text');
          if (textElement) {
            textElement.style.color = "#FFD700"; // Change text color on hover
            textElement.style.textShadow = "1px 1px 3px black"; // Adjust shadow on hover
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.filter = "brightness(1)";
          const textElement = e.currentTarget.querySelector('.button-text');
          if (textElement) {
            textElement.style.color = "white"; // Reset text color
            textElement.style.textShadow = "1px 1px 2px black"; // Reset shadow
          }
        }}
        onClick={triggerCompactCelebration}
      >
        <span
          className="button-text"
          style={{
            color: "white",
            fontSize: "1.2rem",
            fontFamily: "'Bungee', cursive", // Change font family
            fontWeight: "bold", // Change font weight
            letterSpacing: "2px", // Adjust letter spacing
            lineHeight: "1", // Adjust line height
            textShadow: "1px 1px 2px black",
            transition: "color 0.3s ease, text-shadow 0.3s ease",
          }}
        >
          Compact Celebration for Rewards
        </span>
      </div>

      {/* Full-page pop-up as Material UI Dialog */}
      <Dialog
        open={showFullPage}
        onClose={() => setShowFullPage(false)}
        fullScreen // Make the dialog full screen
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark background for the full-screen dialog
            color: "white", // Text color
          },
          backdrop: {
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay
          },
        }}
      >
        <FullPageCelebration onClose={() => setShowFullPage(false)} />
      </Dialog>

      {/* Compact pop-up */}
      {showCompact && <CompactCelebration onClose={() => setShowCompact(false)} />}
    </div>
  );
};

export default HomePage;
