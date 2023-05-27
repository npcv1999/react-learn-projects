import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "@contexts";
import { Login, SignUp, Home, NotFoundPage } from "@pages";
import { PATHS_ROUTE } from "@utils";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={PATHS_ROUTE.home} element={<Home />} />
        <Route path={PATHS_ROUTE.login} element={<Login />} />
        <Route path={PATHS_ROUTE.register} element={<SignUp />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
