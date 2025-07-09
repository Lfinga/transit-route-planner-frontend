import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, useMediaQuery, IconButton, Tooltip } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

interface Stop {
    id?: number;
    stop_id?: number;
    name?: string;
    stop_name?: string;
    location?: string;
    latitude?: number;
    longitude?: number;
    stop_sequence?: number;
}

interface StopsTableProps {
    stops: Stop[];
    showSequence?: boolean;
}

export default function StopsTable({ stops, showSequence = false }: StopsTableProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                aria-label="stops table"
            >
                <TableHead>
                    <TableRow>
                        {showSequence && (
                            <TableCell sx={{ width: { xs: '15%', sm: '10%' } }}>
                                Sequence
                            </TableCell>
                        )}
                        <TableCell sx={{ width: { xs: '60%', sm: '70%' } }}>
                            Name
                        </TableCell>
                        <TableCell sx={{ width: { xs: '25%', sm: '20%' } }}>
                            Location
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stops.map((stop) => (
                        <TableRow
                            key={stop.id || stop.stop_id}
                            hover
                            sx={{ cursor: 'pointer' }}
                        >
                            {showSequence && (
                                <TableCell sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                                    {stop.stop_sequence}
                                </TableCell>
                            )}
                            <TableCell sx={{
                                fontSize: { xs: '0.875rem', sm: '1rem' },
                                fontWeight: 'medium'
                            }}>
                                {stop.name || stop.stop_name}
                            </TableCell>
                            <TableCell>
                                <Tooltip title={stop.location || `${stop.latitude}, ${stop.longitude}`}>
                                    <IconButton
                                        size={isMobile ? "small" : "medium"}
                                        color="primary"
                                    >
                                        <LocationOn />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
} 