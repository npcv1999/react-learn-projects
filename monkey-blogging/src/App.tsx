import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "@contexts";
import { Login, SignUp } from "@pages";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
