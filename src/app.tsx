import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Pages/Main";
import ReactGA from "react-ga";

export function App() {
  const TRACKING_ID = "UA-217843204-1";
  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
