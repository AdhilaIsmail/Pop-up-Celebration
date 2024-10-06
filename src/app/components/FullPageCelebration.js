import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, LinearProgress, Slide, Button } from "@mui/material";
import { styled } from "@mui/system";

const FullPageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  backgroundImage: "url('bg3.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
  boxSizing: "border-box",
}));

const BadgeContainer = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: "120px",
      height: "110px",
    },
  },
}));

const XPBarContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "35%",
  width: "60%",
  height: "45px",
  background: "transparent",
  border: "6px solid #330b12",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    height: "30px",
    bottom: "40%",
  },
}));

const GradientXPBar = styled(LinearProgress)(({ theme }) => ({
  height: "100%",
  borderRadius: 10,
  "& .MuiLinearProgress-bar": {
    background: "linear-gradient(45deg, #FFD700, #FFDF00, #F9E500)",
  },
}));

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
  [theme.breakpoints.down("sm")]: {
    width: "50px",
    height: "50px",
    top: "10px",
    right: "10px",
  },
}));

const LevelUpText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "5rem",
  background: "linear-gradient(45deg, #f9e97e, #ffed4b, #f9e500, #FFD700)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  textShadow: `
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(255, 215, 0, 0.2),
    0 3px 6px rgba(255, 223, 0, 0.2),
    0 -2px 4px rgba(255, 255, 255, 0.2),
    0 4px 8px rgba(255, 255, 255, 0.2),
    0 6px 12px rgba(255, 200, 0, 0.3),
    0 8px 16px rgba(255, 215, 0, 0.2),
    0 10px 20px rgba(255, 215, 0, 0.3)
  `,
  fontFamily: "'Arial Black', sans-serif",
  fontWeight: "bold",
  whiteSpace: "nowrap", // Ensure text stays on one line
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem", // Reduced font size for mobile
    "@keyframes moveUp": {
      "100%": {
        top: "10%",
        fontSize: "2.5rem",
        transform: "translate(-50%, -50%) scale(1)",
      },
    },
  },
}));


const ClaimButton = styled(Button)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    padding: "8px 16px",
    bottom: "35%", // Moved higher for mobile view
  },
}));

const LevelUpMessage = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "17%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "1rem",
  color: "#2e0b11",
  fontFamily: "'Arial Black', sans-serif",
  fontWeight: "bold",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    bottom: "15%",
    width: "90%",
  },
}));

const FullPageCelebration = ({ onClose }) => {
  const [xpProgress, setXPProgress] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const [showClaimButton, setShowClaimButton] = useState(false);
  const audioRef = useRef(null);

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

  useEffect(() => {
    const badgeDelay = setTimeout(() => {
      setShowBadge(true);
    }, 500);

    return () => {
      clearTimeout(badgeDelay);
    };
  }, []);

  useEffect(() => {
    audioRef.current = new Audio('audio.mp3');
    audioRef.current.play();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleOnClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onClose();
  };

  return (
    <FullPageContainer>
      <CloseButton onClick={handleOnClose}>
        <img
          src="close.png"
          alt="Close"
          style={{ width: "100%", height: "100%" }}
        />
      </CloseButton>

      <LevelUpText>LEVEL UP</LevelUpText>

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

      <XPBarContainer>
        <GradientXPBar variant="determinate" value={xpProgress} />
      </XPBarContainer>

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
            width: "80%",
          }}>
            Claim your <span style={{ color: "#f5f0b0" }}>NFT badge</span> now, or retrieve it later from your Inventory.
          </Typography>

          <Typography variant="body1" sx={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
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
            bottom: "2%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
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