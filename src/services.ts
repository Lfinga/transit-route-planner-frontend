export async function fetchActiveRoutes(type: string, active: string, sort: string, sortDirection: string, page: number = 1) {
    const typeParam = type ? `&type=${type}` : '';
    const response = await fetch(`http://localhost:3000/api/v1/routes?active=${active}${typeParam}&page=${page}&sort=${sort}:${sortDirection}`);
    const result = await response.json();
    return {
        data: result.data,
        pagination: result.pagination
    };
}

export async function fetchRouteStops(id: Number) {
    const response = await fetch(`http://localhost:3000/api/v1/routes/${id}/stops`);
    const result = await response.json();
    return result.data;
}

export async function fetchStops(name: string) {
    const response = await fetch(`http://localhost:3000/api/v1/stops/search?name=${name}`);
    const result = await response.json();
    return result.data;
}