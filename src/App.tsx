import Home from "@mui/icons-material/Home"
import { Route, Routes } from "react-router-dom"
import RoutesPage from "./pages/routes/routesPage"
import StopsPage from "./pages/stops/stopsPage"
import RouteStopsPage from "./pages/routes/[id]/routeStopsPage"


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/stops/search" element={<StopsPage />} />
        <Route path="/routes/:id/stops" element={<RouteStopsPage />} />
      </Routes>
    </>
  )
}

export default App
