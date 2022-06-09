import { Login, Signup, Home } from "./screens/index";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
