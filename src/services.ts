export async function fetchActiveRoutes(type: string, active: string, sort: string, sortDirection: string, page: number = 1) {
    const typeParam = type ? `&type=${type}` : '';
    try {
        const response = await fetch(`http://localhost:3000/api/v1/routes?active=${active}${typeParam}&page=${page}&sort=${sort}:${sortDirection}`);
        const result = await response.json();
        return {
            data: result.data,
            pagination: result.pagination
        };
    } catch (error) {
        console.error('Error fetching active routes:', error);
        return {
            data: [],
            pagination: {
                currentPage: 1,
                totalPages: 0,
                totalItems: 0
            }
        };
    }
}

export async function fetchRouteStops(id: Number) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/routes/${id}/stops`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching route stops:', error);
        return [];
    }
}

export async function fetchStops(name: string) {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/stops/search?name=${name}`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching stops:', error);
        return [];
    }
}

export async function getReport() {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/report/routes/popularity`);
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching report:', error);
        return null;
    }
}