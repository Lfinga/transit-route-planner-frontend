import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Paper, TablePagination, Typography, Box } from "@mui/material";
import RoutesTable from "../../components/routesTable";
import { fetchActiveRoutes } from "../../services";
import type { Route } from "../../types";

type Pagination = {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export default function RoutesPage() {
    const [routes, setRoutes] = useState<Route[]>([]);
    const [pagination, setPagination] = useState<Pagination>({
        total: 0,
        page: 1,
        pageSize: 10,
        totalPages: 1
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const type = searchParams.get('type') || '';
    const active = searchParams.get('active') || 'true';
    const sort = searchParams.get('sort') || 'created_at';
    const sortDirection = searchParams.get('sortDirection') || 'desc';
    const currentPage = Number(searchParams.get('page')) || 1;

    useEffect(() => {
        async function getPaginatedRoutes() {
            const result = await fetchActiveRoutes(type, active, sort, sortDirection, currentPage);
            setRoutes(result.data);
            setPagination(result.pagination);
        }
        getPaginatedRoutes();
    }, [type, active, sort, sortDirection, currentPage]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setSearchParams(prev => {
            prev.set('page', (newPage + 1).toString());
            return prev;
        });
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: 3
        }}>
            <Typography
                variant="h5"
                component="h1"
                color="primary.main"
                align="center"
            >
                Routes
                <br />
                <span style={{ fontSize: '16px' }}>
                    Click on a route to view its stops
                </span>
            </Typography>

            <Paper
                elevation={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    overflow: 'hidden'
                }}
            >
                <Box sx={{ flex: 1, overflow: 'auto' }}>
                    <RoutesTable routes={routes} />
                </Box>
                <TablePagination
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={pagination.total}
                    rowsPerPage={pagination.pageSize}
                    page={pagination.page - 1}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    );
}