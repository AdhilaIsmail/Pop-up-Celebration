import React, { useEffect, useRef } from 'react';
import { Dialog, Typography, Box, IconButton, useMediaQuery, useTheme } from '@mui/material';

const CompactCelebration = ({ onClose }) => {
    const audioRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        audioRef.current = new Audio('audio.mp3');
        audioRef.current.loop = true;
        audioRef.current.play();

        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };
    }, []);

    const handleClose = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        onClose();
    };

    return (
        <Dialog
            open={true}
            onClose={handleClose}
            PaperProps={{
                style: {
                    backgroundImage: 'url(bg3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                    padding: isMobile ? '10px' : '20px',
                    width: isMobile ? '90%' : '80%',
                    maxWidth: '800px',
                    height: isMobile ? '90%' : '80%',
                    maxHeight: '600px',
                    margin: 'auto',
                },
            }}
        >
            <style>
                {`
                    @keyframes congratsAnimation {
                        0% { transform: translateY(0) scale(2); opacity: 0; }
                        50% { opacity: 1; }
                        100% { transform: translateY(-50px) scale(1); opacity: 1; }
                    }
                    @keyframes fadeInRewardsText {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                    @keyframes fadeInImage {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                    .close-button:hover {
                        transform: scale(1.1);
                        transition: transform 0.3s;
                    }
                `}
            </style>

            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start" height="100%">
                <Box display="flex" justifyContent="flex-end" width="100%">
                    <IconButton onClick={handleClose} sx={{ padding: '0' }}>
                        <img src="/close.png" alt="Close" className="close-button" style={{ width: isMobile ? '40px' : '60px', height: isMobile ? '30px' : '50px' }} />
                    </IconButton>
                </Box>

                <Typography
                    variant={isMobile ? "h4" : "h3"}
                    sx={{
                        color: '#FFD700',
                        marginBottom: '0px',
                        marginTop: isMobile ? '10px' : '20px',
                        textAlign: 'center',
                        animation: 'congratsAnimation 1s forwards',
                        fontSize: isMobile ? '1.8rem' : '2.5rem',
                    }}
                >
                    Congratulations!
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: '#FFD700',
                        fontSize: isMobile ? '1rem' : '1.3rem',
                        marginTop: isMobile ? '-20px' : '-35px',
                        textAlign: 'center',
                        animation: 'fadeInRewardsText 0.5s forwards',
                        animationDelay: '1s',
                        opacity: 0,
                    }}
                >
                    Command completed successfully.
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#edda95',
                        marginTop: '10px',
                        textAlign: 'center',
                        padding: isMobile ? '10px' : '15px',
                        fontSize: isMobile ? '0.9rem' : '1.1rem',
                        animation: 'fadeInRewardsText 0.5s forwards',
                        animationDelay: '2s',
                        opacity: 0,
                    }}
                >
                    You have successfully completed a command! Here are your well-earned rewards. 
                    Keep exploring the Command Center for even more exciting missions and bigger rewards!
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: '#edda95',
                        marginTop: isMobile ? '20px' : '45px',
                        textAlign: 'center',
                        padding: '0px',
                        fontSize: isMobile ? '0.9rem' : '1.1rem',
                        animation: 'fadeInRewardsText 0.5s forwards',
                        animationDelay: '2s',
                        opacity: 0,
                    }}
                >
                    You have gained:
                </Typography>

                <Box display="flex" justifyContent="center" alignItems="center" marginTop={isMobile ? "10px" : "20px"}>
                    <Box position="relative" marginRight={isMobile ? "10px" : "20px"}>
                        <img
                            src="/reward1.jpeg"
                            alt="Reward 1"
                            style={{
                                width: isMobile ? '80px' : '100px',
                                height: isMobile ? '80px' : '100px',
                                border: '5px solid #FFD700',
                                borderRadius: '10px',
                                opacity: 0,
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '3s',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '-20px',
                                left: '27%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#FFD700',
                                color: 'brown',
                                padding: '5px 10px',
                                borderRadius: '1px 1px 5px 5px',
                                fontSize: isMobile ? '0.7rem' : '0.8rem',
                                opacity: 0,
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '3s',
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
                                width: isMobile ? '80px' : '100px',
                                height: isMobile ? '80px' : '100px',
                                border: '5px solid #FFD700',
                                borderRadius: '10px',
                                opacity: 0,
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '4s',
                            }}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: '-20px',
                                left: '46%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#FFD700',
                                color: 'brown',
                                padding: '5px 10px',
                                borderRadius: '1px 1px 5px 5px',
                                fontSize: isMobile ? '0.7rem' : '0.8rem',
                                opacity: 0,
                                animation: 'fadeInImage 0.5s forwards',
                                animationDelay: '4s',
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