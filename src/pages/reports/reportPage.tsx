import { useEffect, useState } from "react";
import { getReport } from "../../services";
import type { Report } from "../../types";
import { Paper, Typography, Box, CircularProgress } from "@mui/material";
import ReportTable from "../../components/reportTable";

export default function ReportPage() {
    const [report, setReport] = useState<Report | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const reportData = await getReport();
                setReport(reportData);
            } catch (err) {
                setError("Failed to load report data");
            } finally {
                setLoading(false);
            }
        };
        fetchReport();
    }, []);

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
                Most popular routes
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
                {loading ? (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        p: 3
                    }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        p: 3,
                        color: 'error.main'
                    }}>
                        {error}
                    </Box>
                ) : !report || report.length === 0 ? (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        p: 3
                    }}>
                        No report data available
                    </Box>
                ) : (
                    <Box sx={{ flex: 1, overflow: 'auto' }}>
                        <ReportTable report={report} />
                    </Box>
                )}
            </Paper>
        </Box>
    );
}