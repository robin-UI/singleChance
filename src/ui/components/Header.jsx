// import React from 'react'
import { Howler } from "howler";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  CheckedInIcon,
  CheckIcon,
  CloseIcon,
  HomeIcon,
  MinimizeIcon,
  SoundOnIcon,
} from "../assets/Icones";
import { useState } from "react";

function Header({ balance }) {
  const [toggle, setToggle] = useState(false)

  const muteFun = function() {
    Howler.mute(!toggle);
    setToggle(!toggle);
  }
  const handleMinimize = () => {
    window.electronAPI.minimize();
  };

  const handleClose = () => {
    window.electronAPI.close();
  };

  return (
    <Box
      sx={{
        background: "#444670",
        fontSize: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          textTransform: "none",
          color: "white",
          height: "84px",
          width: "100px",
          borderRadius: "0px",
          backgroundColor: "rgba(225, 225, 225, 8%)",
        }}
        startIcon={<HomeIcon />}
      >
        Lobby
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          p: 2,
        }}
      >
        <FormGroup>
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": { color: "#EEDE01", fontSize: "20px" },
            }}
            control={
              <Checkbox
                size="large"
                checkedIcon={<CheckedInIcon />}
                icon={<CheckIcon />}
              />
            }
            label="P"
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": { color: "#EEDE01", fontSize: "20px" },
            }}
            control={
              <Checkbox
                size="large"
                checkedIcon={<CheckedInIcon />}
                icon={<CheckIcon />}
              />
            }
            label="AC"
          />
        </FormGroup>

        <InputBase
          sx={{
            px: 1,
            backgroundColor: "white",
            fontSize: "16px",
            height: "35px",
            borderRadius: "6px",
          }}
        />

        <Button
          size="small"
          sx={{
            px: 2,
            backgroundColor: "#0BCC05",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "6px",
          }}
        >
          Clame
        </Button>

        <Typography sx={{ color: "#EEDE01", fontSize: "20px" }}>
          Welcome, Classic302
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: "4px",
            background:
              "linear-gradient(180deg, rgba(255,237,189,1) 0%, rgba(198,146,2,1) 100%)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            width: 160,
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#042655",
              color: "white",
              px: 1,
              py: "3px",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          >
            Balance
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            {balance + ".00"}
          </Typography>
        </Paper>

        <Stack direction={"row"}>
          <IconButton size="small" onClick={() => muteFun() }>
            <SoundOnIcon sx={{ fontSize: "36px" }} />
          </IconButton>
          <IconButton size="small" onClick={() => handleMinimize()}>
            <MinimizeIcon sx={{ fontSize: "36px" }} />
          </IconButton>
          <IconButton size="small" onClick={() => handleClose()}>
            <CloseIcon sx={{ fontSize: "36px" }} />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default Header;
