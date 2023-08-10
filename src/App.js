import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./App.scss";

import { isMobile } from "react-device-detect";
import Cursor from "./Utilities/Cursor";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavbarExtended from "./components/NavbarExtended";
import Welcome from "./components/Welcome";
import Work from "./components/Work";
import WorkDetail from "./components/WorkDetail";
import BgText from "./subcomponents/BgText";

function App() {

  return (
    <div className="App">
        <AnimatePresence>
      {isMobile ? 
        console.log("hello mobile")
        :
        <Cursor />
      }
          <BgText />
          <BrowserRouter>
            <Routes>
              <Route exact path="/" title="Home" element={<><NavbarExtended title="Home"/><Welcome /><Footer /></>} />
              <Route exact path="/work" title="Home" element={<><NavbarExtended /><Work /><Footer /></>} />
              <Route exact path="/about" element={<><NavbarExtended /><About /><Footer /></>} />
              <Route exact path="/contact" element={<><NavbarExtended /><Contact /><Footer /></>} />
              <Route exact path="/work/:workname" element={<><NavbarExtended /><WorkDetail /><Footer /></>}/>
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
    </div>
  );
}

export default App;
