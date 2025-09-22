import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
// import Main from "./pages/main";
// import Detail from "./pages/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<Login />} />
        {/* <Route path="/main" element={<Main />} /> */}
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
