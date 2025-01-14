import {
  Box,
  Paper,
  IconButton,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React, { useRef, useState } from "react";
import {
  CalanderIcon,
  CheckedInIcon,
  CheckIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../../assets/Icones";
import ViewButton from "../../../../public/icons/viewButton.png";
import moment from "moment";

function createData(name, play, win, claim, unclaim, end, ntp) {
  return { name, play, win, claim, unclaim, end, ntp };
}

const rows = [
  createData("HB70", 100000.0, 90000.0, 90000.0, 0.0, 10000.0, 10000.0),
];

function Report() {
  const dateRefFrom = useRef(null);
  const dateRefTo = useRef(null);
  const [date, setDate] = useState({
    from: moment(),
    to: moment(),
  });

  const handleIconClickFrom = () => {
    if (dateRefFrom.current) {
      // dateRef.current.click(); // Programmatically trigger the click on the hidden input
      dateRefFrom.current.showPicker();
    }
  };

  const handleIconClickTo = () => {
    if (dateRefTo.current) {
      // dateRef.current.click(); // Programmatically trigger the click on the hidden input
      dateRefTo.current.showPicker();
    }
  };

  const handleDateChangeFrom = (event) => {
    const selectedDate = event.target.value; // Get the selected date as a string
    setDate({ ...date, from: moment(selectedDate) }); // Update the state with the new date
  };

  const handleDateChangeTo = (event) => {
    const selectedDate = event.target.value; // Get the selected date as a string
    setDate({ ...date, to: moment(selectedDate) }); // Update the state with the new date
  };
  return (
    <>
      {/* <Box sx={{ height: "20rem"}}></Box> */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          backgroundColor: "#FFE5C6",
          border: "1px solid #9E3F1B",
          borderRadius: "16px",
          mx: 1,
          height: "90%",
          width: "auto !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            p: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              FROM : {date.from.format("DD/MM/YYYY")}
            </Typography>
            <IconButton onClick={handleIconClickFrom}>
              <input
                ref={dateRefFrom}
                type="date"
                style={{ visibility: "hidden", width: "0px" }}
                onChange={handleDateChangeFrom}
              />
              <CalanderIcon />
            </IconButton>

            <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              TO : {date.to.format("DD/MM/YYYY")}
            </Typography>
            <IconButton onClick={handleIconClickTo}>
              <input
                ref={dateRefTo}
                type="date"
                style={{ visibility: "hidden", width: "0px" }}
                onChange={handleDateChangeTo}
              />
              <CalanderIcon />
            </IconButton>
            <FormControlLabel
              value="all"
              control={
                <Checkbox
                  checkedIcon={<CheckedInIcon />}
                  icon={<CheckIcon />}
                />
              }
              label="ALL"
              labelPlacement="end" // 'end' is the correct value for label placement; 'all' is invalid
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                },
              }}
            />

            <Button
              value="result"
              aria-label="left aligned"
              sx={{
                width: "124px",
                borderRadius: 3,
                p: 0,
                "& .MuiTypography-root": {
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#042655",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                },
              }}
            >
              <img
                src={ViewButton}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <Typography>VIEW</Typography>
            </Button>
          </Box>
        </Box>
        <Table sx={{ borderSpacing: "0 20px" }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                th: {
                  mb: 1,
                  border: 0,
                  bgcolor: "rgba(255,180,193,39)",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  borderBottom: "6px solid #FFE5C6",
                },
              }}
            >
              <TableCell>NAME</TableCell>
              <TableCell>PLAY</TableCell>
              <TableCell>WIN </TableCell>
              <TableCell>CLAIM</TableCell>
              <TableCell>UNCLAIM</TableCell>
              <TableCell>End</TableCell>
              <TableCell>NTP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ticketId}
                sx={{
                  "td,th": {
                    mb: 10,
                    bgcolor: "#FFFFFF",
                    borderBottom: "6px solid #FFE5C6",
                  },
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.play}</TableCell>
                <TableCell>{row.win}</TableCell>
                <TableCell>{row.claim}</TableCell>
                <TableCell>{row.unclaim}</TableCell>
                <TableCell>{row.end}</TableCell>
                <TableCell>{row.ntp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", mt:1 }}>
        <Button
          value="result"
          aria-label="left aligned"
          sx={{
            width: "124px",
            borderRadius: 3,
            p: 0,
            "& .MuiTypography-root": {
              fontSize: "14px",
              fontWeight: "600",
              color: "#042655",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
            },
          }}
        >
          <img
            src={ViewButton}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <Typography>PRINT</Typography>
        </Button>
      </Box>
    </>
  );
}

export default Report;
