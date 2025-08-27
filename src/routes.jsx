import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./Gallery";
import Information from "./Information";

export function MainRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || "/your-repo-name"}>
      <Routes>
        <Route path="/Oia-Vacation/" element={<App />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
}