export type Route = {
    id: number;
    name: string;
    type: string;
    active: boolean;
}

export type RouteReport = {
    route_name: string;
    total_trips: string;
}

export type Report = RouteReport[];