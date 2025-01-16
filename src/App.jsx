import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AppLayout from "./pages/AppLayout";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import ProtectRoute from "./components/ProtectRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          element={
            <ProtectRoute>
              <AppLayout />
            </ProtectRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            maxWidth: "500px",
            fontSize: "16px",
            padding: "16px 24px",
            backgroundColor: "#f8fafc",
            color: "#374151",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
