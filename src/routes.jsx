import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./Gallery";
import Information from "./Information";

export function MainRoutes() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || "/your-repo-name"}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Information" element={<Information />} />
        {/* Опционально: добавьте маршрут для обработки 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}