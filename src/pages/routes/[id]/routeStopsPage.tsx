import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRouteStops } from "../../../services";
import { Paper, Typography, Box } from "@mui/material";
import StopsTable from "../../../components/stopsTable";

type Stop = {
    stop_id: number;
    stop_name: string;
    location: string;
    stop_sequence: number;
}

export default function RouteStopsPage() {
    const [stops, setStops] = useState<Stop[]>([]);
    const { id } = useParams();

    useEffect(() => {
        async function viewRouteDetails() {
            const stops = await fetchRouteStops(Number(id));
            setStops(stops);
        }
        viewRouteDetails();
    }, [id]);

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
                Route Stops
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
                    <StopsTable stops={stops} showSequence={true} />
                </Box>
            </Paper>
        </Box>
    );
}