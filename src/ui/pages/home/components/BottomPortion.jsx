import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import gsap from "gsap";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import bottom from "../../../public/backgrounds/bottom.png";
import treasury from "../../../public/backgrounds/treasury.png";
import playButton from "../../../public/icons/playButton.png";
import winButton from "../../../public/icons/winButton.png";
import Chip10 from "../../../public/icons/Chip10.png";
import Chip20 from "../../../public/icons/Chip20.png";
import Chip25 from "../../../public/icons/Chip25.png";
import Chip50 from "../../../public/icons/Chip50.png";
import Chip100 from "../../../public/icons/Chip100.png";
import Chip500 from "../../../public/icons/Chip500.png";

import ButtonIcon from "../../../public/icons/Button.png";
import SmallButton from "../../../public/icons/SmallButton.png";
import { GameButton } from "../../../components/Utils/StyledComponents";

const chipList = [
  { num: 10, img: Chip10 },
  { num: 20, img: Chip20 },
  { num: 25, img: Chip25 },
  { num: 50, img: Chip50 },
  { num: 100, img: Chip100 },
  { num: 500, img: Chip500 },
];

function BottomPortion({
  handlePlay,
  chipNum,
  setChipNum,
  betFunction,
  chipSound,
}) {
  // const [chipNum, setChipNum] = useState(null);
  const progressRef = useRef(null);
  const [time, setTime] = useState(moment().format("h:mm A"));
  const initialTime = moment.duration(3, "minutes"); // 3 minutes
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isCounting, setIsCounting] = useState(false);

  const handleShrink = () => {
    if (!isCounting) {
      setIsCounting(true); // Start countdown
      gsap.to(progressRef.current, {
        width: 0, // Shrink to 0 width
        duration: 180, // Total duration in seconds (180 seconds)
        ease: "linear", // Linear easing for consistent speed
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("h:mm A"));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (remainingTime.asSeconds() > 0 && isCounting === true) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) =>
          moment.duration(prevTime.asSeconds() - 1, "seconds")
        );
      }, 1000);

      return () => clearInterval(timer); // Cleanup timer
    }
  }, [remainingTime, isCounting]);

  return (
    <Box sx={{ position: "relative", height: "182px" }}>
      <img
        src={bottom}
        alt=""
        style={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}
      />

      <img
        src={treasury}
        alt=""
        style={{ position: "absolute", top: -174, left: 28, width: "599px" }}
      />

      <Box
        sx={{
          position: "absolute",
          top: -215,
          right: 20,
          // zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {chipList.map((e, i) => (
          <IconButton
            key={i + 1}
            sx={{ position: "relative", width: "110px", height: "110px" }}
            onClick={() => {
              setChipNum((prev) => prev !== e.num && e.num);
              chipSound.play();
            }}
          >
            <img
              src={e.img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                border: chipNum === e.num ? "3px solid #3BF435" : "none",
                borderRadius: "999px",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "19px",
                fontWeight: "600",
                color: "#042655",
              }}
            >
              {e.num}
            </Typography>
          </IconButton>
        ))}
      </Box>

      <Box sx={{ position: "absolute", top: 16, left: 104, zIndex: 5 }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box>
            <Button sx={{ p: 0, mb: 1 }} onClick={() => handlePlay()}>
              <img src={playButton} alt="Play" />
            </Button>
            <Typography
              sx={{
                color: "white",
                py: 1,
                backgroundImage:
                  "linear-gradient(180deg, rgba(4,38,85,1) 0%, rgba(9,84,187,1) 100%)",
                border: "1px solid #FFEDBA",
                fontSize: "38.72px",
                fontWeight: "600",
                textAlign: "center",
                borderRadius: "8.61px",
              }}
            >
              500
            </Typography>
          </Box>
          <Box>
            <Button sx={{ p: 0, mb: 1 }}>
              <img src={winButton} alt="Win" />
            </Button>
            <Typography
              sx={{
                color: "white",
                py: 1,
                backgroundImage:
                  "linear-gradient(180deg, rgba(4,38,85,1) 0%, rgba(9,84,187,1) 100%)",
                border: "1px solid #FFEDBA",
                fontSize: "38.72px",
                fontWeight: "600",
                textAlign: "center",
                borderRadius: "8.61px",
              }}
            >
              0.00
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: -66,
          right: 20,
          display: "flex",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <GameButton
              variant="contained"
              sx={{
                width: "220px",
                // color: "white",
                // fontSize: "24px",
                // fontWeight: "600",
                // textTransform: "uppercase",
                // background: "rgb(237,33,33)",
                // backgroundImage:
                //   "linear-gradient(180deg, rgba(237,33,33,1) 0%, rgba(255,183,183,1) 13%, rgba(227,42,42,1) 23%)",
                // borderRadius: "8px",
                // boxShadow: 4,
                // ":hover": {
                //   backgroundImage: "linear-gradient(180deg, rgba(122,3,3,1) 0%, rgba(255,183,183,1) 13%, rgba(122,3,3,1) 23%)"
                // }
                // backgroundImage: `url('${ButtonIcon}')`,
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
              }}
              onClick={() => betFunction("upperLine")}
            >
              UPPER LINE
            </GameButton>
            <GameButton
              variant="contained"
              sx={{
                width: "220px",
                // color: "white",
                // fontSize: "24px",
                // fontWeight: "600",
                // textTransform: "uppercase",
                // backgroundImage: `url('${ButtonIcon}')`,
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
              }}
              onClick={() => betFunction("lowerLine")}
            >
              Lower LINE
            </GameButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <GameButton
              disabled
              // isActive={true}
              variant="contained"
              sx={{
                width: "140px",
                // color: "white",
                // fontSize: "24px",
                // fontWeight: "600",
                // textTransform: "uppercase",
                // backgroundImage: `url('${SmallButton}')`,
                // backgroundPosition: "center",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
              }}
              onClick={() => betFunction("odd")}
            >
              ODDS
            </GameButton>
            <Button
              sx={{
                width: "140px",
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                textTransform: "uppercase",
                backgroundImage: `url('${SmallButton}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => betFunction("even")}
            >
              EVENS
            </Button>
            <Button
              sx={{
                width: "140px",
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                textTransform: "uppercase",
                backgroundImage: `url('${SmallButton}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              DOUBLE
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              sx={{
                width: "140px",
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                textTransform: "uppercase",
                backgroundImage: `url('${SmallButton}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              REPEAT
            </Button>
            <Button
              sx={{
                width: "140px",
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                textTransform: "uppercase",
                backgroundImage: `url('${SmallButton}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => betFunction("clear")}
            >
              CLEAR
            </Button>
            <Button
              sx={{
                width: "140px",
                color: "white",
                fontSize: "24px",
                fontWeight: "600",
                textTransform: "uppercase",
                backgroundImage: `url('${SmallButton}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={handleShrink}
            >
              BET
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              color: "#fff",
              textAlign: "center",
              mb: 1,
            }}
          >
            Next Draw : {time}
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: "16px",
              width: "272px",
              borderRadius: "16px",
              backgroundImage:
                "linear-gradient(180deg, rgba(251,221,138,1) 0%, rgba(255,132,0,1) 49%, rgba(255,187,0,1) 100%)",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                color: "white",
                fontSize: "52px",
                fontWeight: "600",
                "-webkit-text-stroke": "2px #042655",
              }}
            >
              {/* 03:00 */}
              {moment.utc(remainingTime.asMilliseconds()).format("mm:ss")}
            </Typography>
            <Box
              sx={{
                overflow: "hidden",
                border: "2px solid #042655",
                height: "37px",
                width: "100%",
                borderRadius: "30px",
                backgroundImage:
                  "linear-gradient(180deg, rgba(4,38,85,1) 0%, rgba(9,84,187,1) 100%)",
              }}
            >
              <Box
                ref={progressRef}
                sx={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(220,0,0,1) 0%, rgba(255,195,0,1) 100%)",
                  width: "100%",
                  height: "100%",
                  transition: "width 0.3s ease-in-out",
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomPortion;
