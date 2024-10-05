import React, { useEffect, useState } from "react";
import { Box, Typography, LinearProgress, Slide, Button } from "@mui/material";
import { styled } from "@mui/system";

// Styles for the full-page container and badge
const FullPageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  backgroundImage: "url('bg3.jpg')", 
  backgroundSize: "cover", 
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
});

// Badge container with flipping and scaling animation
const BadgeContainer = styled(Box)({
  position: "absolute",
  top: "50%", 
  left: "50%",
  transform: "translate(-50%, -50%)", 
  animation: "flipAndScale 1.5s forwards", 
  "@keyframes flipAndScale": {
    "0%": {
      transform: "translate(-50%, -50%) scale(2) rotateY(0deg)", 
    },
    "100%": {
      top: "30%", 
      transform: "translate(-50%, -50%) scale(1) rotateY(1080deg)",
    },
  },
});

// XP bar animation wrapper with brown background color
const XPBarContainer = styled(Box)({
  position: "absolute",
  bottom: "35%",
  width: "60%",
  height: "45px", 
  background: "transparent", 
  border: "6px solid #330b12", 
  borderRadius: 10, 
});

// XP Bar with gradient filling
const GradientXPBar = styled(LinearProgress)(({ theme }) => ({
  height: "100%", 
  borderRadius: 10, 
  "& .MuiLinearProgress-bar": {
    background: "linear-gradient(45deg, #FFD700, #FFDF00, #F9E500)", 
  },
}));

// Close button styles
const CloseButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "20px",
  right: "16px",
  width: "70px", 
  height: "70px", 
  cursor: "pointer",
  "&:hover img": {
    transform: "scale(1.2)", 
    transition: "transform 0.3s ease", 
  },
}));

const XPBarLabel = styled(Typography)({
  marginBottom: "10px",
});

// LEVEL UP Animation styles for golden polished effect
const LevelUpText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%", 
  left: "50%",
  transform: "translate(-50%, -50%)", // Center it
  fontSize: "5rem", 
  background: "linear-gradient(45deg, #f9e97e, #ffed4b, #f9e500, #FFD700)", // Bright yellow gradient
  backgroundClip: "text",
  WebkitBackgroundClip: "text", 
  color: "transparent", 
  textShadow:`
    0 1px 2px rgba(0, 0, 0, 0.4),  /* Deeper shadow for depth */
    0 2px 4px rgba(255, 215, 0, 0.2), /* Soft golden glow */
    0 3px 6px rgba(255, 223, 0, 0.2), /* Another golden glow */
    0 -2px 4px rgba(255, 255, 255, 0.2), /* Highlight on top for shine */
    0 4px 8px rgba(255, 255, 255, 0.2), /* Soft highlight at bottom for polish */
    0 6px 12px rgba(255, 200, 0, 0.3), /* Stronger shine */
    0 8px 16px rgba(255, 215, 0, 0.2), /* Additional reflective glow */
    0 10px 20px rgba(255, 215, 0, 0.3)  /* Final shiny reflection */
  `,
  fontFamily: "'Arial Black', sans-serif", 
  fontWeight: "bold", 
  animation: "moveUp 1.5s forwards", 
  "@keyframes moveUp": {
    "0%": {
      transform: "translate(-50%, -50%) scale(1)", 
    },
    "100%": {
      top: "10%", 
      fontSize: "4rem", 
      transform: "translate(-50%, -50%) scale(1)", 
    },
  },
}));

// Corporal text styles
const CorporalText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "30%", 
  left: "50%",
  transform: "translate(-50%, -50%)", 
  fontSize: "3rem", 
  color: "darkbrown", 
  fontFamily: "'Arial Black', sans-serif", 
  fontWeight: "bold", 
}));

// Claim Badge Button styles with initial scaling animation
const ClaimButton = styled(Button)({
  position: "absolute",
  bottom: "25%", 
  padding: "10px 20px",
  fontSize: "1.3rem", 
  border: "2px solid #330b12", 
  borderRadius: "5px", 
  background: "linear-gradient(to bottom, #ffd0a1, #FFA500, #FF4500)", 
  color: "#2e0b11",
  fontFamily: "'Arial Black', sans-serif", 
  fontWeight: "bold", 
  transform: "scale(0)",
  animation: "scaleUp 0.5s forwards", 
  transition: "transform 0.3s ease", 

  "@keyframes scaleUp": {
    "0%": {
      transform: "scale(0.1)", 
    },
    "100%": {
      transform: "scale(1)", 
    },
  },

  "&:hover": {
    background: "linear-gradient(to bottom, #FF8C00, #FF6347)",
    transform: "scale(1.05)", 
  },
});

const LevelUpMessage = styled(Typography)({
  position: "absolute",
  bottom: "17%", 
  left: "50%",
  transform: "translate(-50%, -50%)", // Center it
  fontSize: "1rem", 
  color: "#2e0b11", 
  fontFamily: "'Arial Black', sans-serif", 
  fontWeight: "bold", 
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // Adding a slight shadow for emphasis
  textAlign: "center",
});

const FullPageCelebration = ({ onClose }) => {
  const [xpProgress, setXPProgress] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [showClaimButton, setShowClaimButton] = useState(false); 

  // Simulate XP bar filling up
  useEffect(() => {
    const xpInterval = setInterval(() => {
      setXPProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(xpInterval);
          setTimeout(() => setShowClaimButton(true), 300); 
          return 100;
        }
        return oldProgress + 5; 
      });
    }, 100); 

    return () => {
      clearInterval(xpInterval); 
    };
  }, []);

  // Trigger the badge animation slightly after the "LEVEL UP" text starts moving
  useEffect(() => {
    const badgeDelay = setTimeout(() => {
      setShowBadge(true); 
    }, 500); 

    return () => {
      clearTimeout(badgeDelay); 
    };
  }, []);

  return (
    <FullPageContainer>
      {/* Close Button */}
      <CloseButton onClick={onClose}>
        <img
          src="close.png"
          alt="Close"
          style={{ width: "100%", height: "100%" }}
        />
      </CloseButton>

      {/* LEVEL UP Text */}
      <LevelUpText>LEVEL UP</LevelUpText>

      {/* Badge Animation */}
      {showBadge && (
        <Slide direction="up" in={showBadge} mountOnEnter unmountOnExit>
          <BadgeContainer>
            <img
              src="badge2.png" 
              alt="Badge"
              style={{ width: "180px", height: "165px" }} 
            />
            <Typography variant="h4" sx={{ color: "#2e0b11", fontFamily: "'Arial Black', sans-serif", fontWeight: "bold" }}>
              Corporal
            </Typography>
          </BadgeContainer>
        </Slide>
      )}
      {/* XP Bar */}
      {/* <XPBarLabel variant="h5">XP: {xpProgress}%</XPBarLabel> */}
      <XPBarContainer>
        <GradientXPBar variant="determinate" value={xpProgress} />
      </XPBarContainer>

      {/* Claim NFT Badge Button and Leveled Up Message */}
      {/* Claim Button */}
      {showClaimButton && (
      <>
        <ClaimButton variant="contained">Claim NFT Badge</ClaimButton>
        <LevelUpMessage>
          You've leveled up and earned a new badge!
        </LevelUpMessage>
        <Typography variant="body1" sx={{
          position: "absolute",
          bottom: "14%", 
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1rem", 
          color: "#2e0b11", 
          fontFamily: "'Arial Black', sans-serif", 
          fontWeight: "bold", 
          textAlign: "center",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        }}>
          Claim your <span style={{ color: "#f5f0b0" }}>NFT badge</span> now, or retrieve it later from your Inventory.
        </Typography>

        {/* New lines added here */}
        <Typography variant="body1" sx={{
          position: "absolute",
          bottom: "5%", // Adjust as needed for spacing
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%", // Increase the width as needed
          fontSize: ".8rem", 
          color: "#f5f0b0", 
          fontFamily: "'Arial Black', sans-serif", 
          fontWeight: "normal", 
          textAlign: "center",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        }}>
          To claim your new badge, you need to transfer your previous badge from your wallet for it to be burned in exchange for the new one.
        </Typography>

        <Typography variant="body1" sx={{
          position: "absolute",
          bottom: "2%", // Adjust as needed for spacing
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%", // Increase the width as needed
          fontSize: ".8rem", 
          color: "#f5f0b0", 
          fontFamily: "'Arial Black', sans-serif", 
          fontWeight: "normal", 
          textAlign: "center",
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
        }}>
          If there's insufficient gas in your wallet, the transaction will be canceled. You can always visit your inventory and claim your badge at any time.
        </Typography>
      </>
    )}
    </FullPageContainer>
  );
};
export default FullPageCelebration;