import React, { useEffect, useRef } from 'react';
import { Dialog, Typography, Box, IconButton } from '@mui/material';

const CompactCelebration = ({ onClose }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Play the background music when the component mounts
        audioRef.current = new Audio('audio.mp3'); // Replace with your music file path
        audioRef.current.loop = true; // Loop the music
        audioRef.current.play();

        // Cleanup function to stop the music when the component unmounts
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset music to the beginning
        };
    }, []);

    const handleClose = () => {
        audioRef.current.pause(); // Stop the music
        audioRef.current.currentTime = 0; // Reset music to the beginning
        onClose(); // Call the onClose prop function
    };

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            PaperProps={{
                style: {
                    backgroundImage: 'url(bg3.jpg)', // Replace with your image URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '80%', // Increased width for the compact pop-up
                    maxWidth: '800px', // Ensure it doesn't overflow the viewport
                    height: '80%', // Increased height for the pop-up
                    maxHeight: '600px', // Set a maximum height for better display
                    margin: 'auto', // Center the pop-up
                },
            }}
        >
            <style>
                {`
                    @keyframes congratsAnimation {
                        0% {
                            transform: translateY(0) scale(2);
                            opacity: 0;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            transform: translateY(-50px) scale(1);
                            opacity: 1;
                        }
                    }
                    @keyframes fadeInRewardsText {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                    @keyframes fadeInImage {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                    .close-button:hover {
                        transform: scale(1.1); /* Scale up on hover */
                        transition: transform 0.3s; /* Smooth transition */
                    }
                `}
            </style>

            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" height="100%">
                {/* Close Image at the top right corner */}
                <Box display="flex" justifyContent="flex-end" width="100%">
                    <IconButton onClick={handleClose} sx={{ padding: '0' }}>
                        <img src="/close.png" alt="Close" className="close-button" style={{ width: '60px', height: '50px' }} />
                    </IconButton>
                </Box>

                {/* Congratulations Text with animation */}
                <Typography
                    variant="h3"
                    sx={{
                        color: '#FFD700',
                        marginBottom: '0px',
                        marginTop: '20px', // Move text closer to the top of the popup
                        textAlign: 'center',
                        animation: 'congratsAnimation 1s forwards',
                    }}
                >
                    Congratulations!
                </Typography>

                {/* Command completed text with delayed appearance and fade-in animation */}
                <Typography
                    variant="body1"
                    sx={{
                        color: '#FFD700',
                        fontSize: '1.3rem',
                        marginTop: '-35px', // Reduced gap between "CONGRATULATIONS!" and this text
                        textAlign: 'center',
                        animation: 'fadeInRewardsText 0.5s forwards',
                        animationDelay: '1s', // Delay to appear after "Congratulations!" has animated
                        opacity: 0, // Initially hidden
                    }}
                >
                    Command completed successfully.
                </Typography>

                {/* New line for rewards explanation with the same fade-in animation */}
                <Typography
                    variant="body2"
                    sx={{
                        color: '#edda95',
                        marginTop: '10px', // Spacing below the previous line
                        textAlign: 'center',
                        padding: '15px',
                        fontSize: '1.1rem',
                        animation: 'fadeInRewardsText 0.5s forwards',
                        animationDelay: '2s', // Delay to appear after the previous line
                        opacity: 0, // Initially hidden
                    }}
                >
                    You have successfully completed a command! Here are your well-earned rewards. 
                    Keep exploring the Command Center for even more exciting missions and bigger rewards!
                </Typography>

                {/* New line for rewards explanation with the same fade-in animation */}
                <Typography
                    variant="body2"
                    sx={{
                        color: '#edda95',
                        marginTop: '45px', // Spacing below the previous line
                        textAlign: 'center',
                        padding: '0px',
                        fontSize: '1.1rem',
                        animation: 'fadeInRewardsText 0.5s forwards',
                        animationDelay: '2s', // Delay to appear after the previous line
                        opacity: 0, // Initially hidden
                    }}
                >
                    You have gained:
                </Typography>

                {/* Container for images */}
                <Box display="flex" justifyContent="center" alignItems="center" marginTop="20px">
                    {/* First Image with Label */}
                    <Box position="relative" marginRight="20px">
                        <img
                            src="/reward1.jpeg"
                            alt="Reward 1"
                            style={{
                                width: '100px',
                                height: '100px',
                                border: '5px solid #FFD700', // Golden border
                                borderRadius: '10px', // Rounded corners for the border
                                opacity: 0, // Initially hidden
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '3s', // Delay to appear after the "You have gained:" line
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '-20px', // Positioning the label below the image
                                left: '27%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#FFD700', // Golden background
                                color: 'brown', // Brown text color
                                padding: '5px 10px',
                                borderRadius: '1px 1px 5px 5px', // Rounded corners for the label
                                fontSize: '0.8rem',
                                opacity: 0, // Initially hidden
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '3s', // No delay for label to sync with image
                            }}
                        >
                            20XP
                        </Box>
                    </Box>

                    <Box position="relative">
                        <img
                            src="/reward2.jpeg"
                            alt="Reward 2"
                            style={{
                                width: '100px',
                                height: '100px',
                                border: '5px solid #FFD700', // Golden border
                                borderRadius: '10px', // Rounded corners for the border
                                opacity: 0, // Initially hidden
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '4s', // Delay to appear after the "You have gained:" line
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '-20px', // Positioning the label below the image
                                left: '46%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#FFD700', // Golden background
                                color: 'brown', // Brown text color
                                padding: '5px 10px',
                                borderRadius: '1px 1px 5px 5px', // Rounded corners for the label
                                fontSize: '0.8rem',
                                opacity: 0, // Initially hidden
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '4s', // No delay for label to sync with image
                            }}
                        >
                            250,000,000
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

export default CompactCelebration;
