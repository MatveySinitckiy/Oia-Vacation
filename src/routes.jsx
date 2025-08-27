import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./Gallery";
import Information from "./Information";

 export function MainRoutes(){
    return <Router> 
        <Routes>
        <Route
        path='/Oia-Vacation/'
        element={<App/>}
        />
        
        <Route
        path='/Oia-Vacation/Gallery'
        element={<Gallery/>}
                />
         <Route
        path='/Oia-Vacation/Information'
        element={<Information/>}
                />
        
        </Routes>
    </Router>
         
}