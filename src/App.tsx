import { Route, Routes, Navigate } from "react-router-dom"
import RoutesPage from "./pages/routes/routesPage"
import StopsPage from "./pages/stops/stopsPage"
import RouteStopsPage from "./pages/routes/[id]/routeStopsPage"
import Layout from "./components/layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/routes" replace />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/stops/search" element={<StopsPage />} />
        <Route path="/routes/:id/stops" element={<RouteStopsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
