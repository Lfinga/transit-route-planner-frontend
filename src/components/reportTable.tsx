import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme, useMediaQuery } from "@mui/material";
import type { Report } from "../types";

interface ReportTableProps {
    report: Report;
}

export default function ReportTable({ report }: ReportTableProps) {
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
                aria-label="route popularity report table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell sx={{
                            width: { xs: '60%', sm: '70%' },
                            minWidth: { xs: 120, sm: 200 }
                        }}>
                            Route Name
                        </TableCell>
                        <TableCell sx={{
                            width: { xs: '40%', sm: '30%' }
                        }}>
                            Total Trips
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {report.map((row, index) => (
                        <TableRow
                            hover
                            key={index}
                        >
                            <TableCell sx={{
                                fontSize: { xs: '0.875rem', sm: '1rem' },
                                fontWeight: 'medium'
                            }}>
                                {row.route_name}
                            </TableCell>
                            <TableCell sx={{
                                fontSize: { xs: '0.875rem', sm: '1rem' }
                            }}>
                                {row.total_trips}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
} 