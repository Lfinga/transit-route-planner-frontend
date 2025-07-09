import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, useMediaQuery, IconButton, Tooltip } from "@mui/material";
import { DirectionsBus, Train } from "@mui/icons-material";
import type { Route } from "../types";
import { useNavigate } from "react-router-dom";

interface RoutesTableProps {
    routes: Route[];
}

export default function RoutesTable({ routes }: RoutesTableProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    return (
        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table
                sx={{
                    minWidth: { xs: '100%', sm: 750 },
                    '& .MuiTableCell-root': {
                        px: { xs: 1, sm: 2 },
                        py: { xs: 1.5, sm: 2 },
                        '&:last-child': {
                            pr: { xs: 1, sm: 2 }
                        }
                    }
                }}
                aria-label="routes table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            width: { xs: '20%', sm: '15%' },
                            minWidth: { xs: 60, sm: 100 }
                        }}>
                            Type
                        </TableCell>
                        <TableCell sx={{
                            width: { xs: '50%', sm: '60%' }
                        }}>
                            Name
                        </TableCell>
                        <TableCell sx={{
                            width: { xs: '30%', sm: '25%' }
                        }}>
                            Status
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {routes.map((route) => (
                        <TableRow
                            hover
                            key={route.id}
                            sx={{ cursor: 'pointer' }}
                            onClick={() => {
                                navigate(`/routes/${route.id}/stops`);
                            }}
                        >
                            <TableCell>
                                <Tooltip title={`${route.type === 'train' ? 'Train' : 'Bus'} Route`}>
                                    <IconButton
                                        size={isMobile ? "small" : "medium"}
                                        color={route.type === 'train' ? 'primary' : 'secondary'}
                                    >
                                        {route.type === 'train' ? <Train /> : <DirectionsBus />}
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell sx={{
                                fontSize: { xs: '0.875rem', sm: '1rem' },
                                fontWeight: 'medium'
                            }}>
                                {route.name}
                            </TableCell>
                            <TableCell>
                                <span className={`
                                    inline-block px-2 py-1 rounded-full text-xs
                                    ${isMobile ? 'text-[10px]' : 'text-xs'}
                                    ${route.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                                `}>
                                    {route.active ? 'Active' : 'Inactive'}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}