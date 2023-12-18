import { Route, Routes } from "react-router-dom";
import "./App.css";
import BaseContainer from "./test/container/BaseContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="test" element={<BaseContainer />} />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
