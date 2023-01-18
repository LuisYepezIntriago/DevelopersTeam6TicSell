import "./App.css";
import HomePage from "./views/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AbstractPage from "./views/AbstractPage";
import InfoClientPage from "./views/InfoClientPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*NO TOCAR*/}
          <Route path="/" element={<HomePage />} />
          <Route path="/abstract/article" element={<AbstractPage />} />
          <Route path="/client-info" element={<InfoClientPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
