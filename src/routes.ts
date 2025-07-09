import {
    type RouteConfig,
    route,
} from "@react-router/dev/routes";

export default [
    route("/routes", "./pages/routes/routesPage.tsx"),
    route("/routes/:id/stops", "./pages/routes/[id]/routeStopsPage.tsx"),
    route("/stops/search", "./pages/stops/stopsPage.tsx"),

] satisfies RouteConfig;