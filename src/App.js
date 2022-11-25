import { Route, Routes } from "react-router-dom";
import Login from "./Components.js/Login";
import Result from "./Components.js/Result";
import SpinWheeltwo from "./Components.js/SpinWheeltwo";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/spinWheel" element={<SpinWheeltwo />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
