import Home from "./pages/home/Home";
import "./App.css";
import Login from "./pages/credintials/Login";
import { useEffect, useState } from "react";
import "./api/axiosmain"
import Router from "./router/Router";

function App() {
  const time = 2; // Interval time in minutes
  const [isDisabled, setIsDisabled] = useState(false); // State to manage button disable state

  // Function to simulate spinning the wheel
  // const spinWheel = () => {
  //   console.log("Wheel is spinning!");
  //   // Add your actual wheel spinning logic here, e.g., using GSAP
  // };

  // Task to execute when the interval ends
  // const executeTask = () => {
  //   console.log(`Task executed at ${new Date().toLocaleTimeString()}`);
  //   spinWheel(); // Call the spinWheel function
  // };

  // useEffect(() => {
  //   const startTask = () => {
  //     const now = new Date();
  //     const midnight = new Date();
  //     midnight.setHours(0, 0, 0, 0); // Set to 12:00 AM

  //     const elapsedTime = now.getTime() - midnight.getTime();
  //     const intervalMs = time * 60 * 1000; // Interval in milliseconds
  //     const timeUntilNextInterval = intervalMs - (elapsedTime % intervalMs); // Time until next interval

  //     // Disable buttons 15 seconds before the interval ends
  //     const disableTimeout = setTimeout(() => {
  //       setIsDisabled(true); // Disable buttons
  //       console.log("Buttons disabled.");
  //     }, timeUntilNextInterval - 15000); // Last 15 seconds of the interval

  //     // Run the task on the next interval
  //     const timeout = setTimeout(() => {
  //       setIsDisabled(false); // Enable buttons again
  //       console.log("Buttons enabled.");
  //       executeTask(); // Execute the task
  //       setInterval(() => {
  //         executeTask();
  //       }, intervalMs);
  //     }, timeUntilNextInterval);

  //     return () => {
  //       clearTimeout(timeout);
  //       clearTimeout(disableTimeout);
  //     };
  //   };

  //   startTask();
  // }, []);

  return (
    <>
      {/* <Home /> */}
      {/* <Login /> */}
      <Router />
    </>
  );
}

export default App;