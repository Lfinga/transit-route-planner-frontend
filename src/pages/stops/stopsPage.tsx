import { useEffect, useState } from "react";
import { fetchStops } from "../../services";
import { useSearchParams } from "react-router-dom";
import { Paper, TextField, Typography, Box } from "@mui/material";
import StopsTable from "../../components/stopsTable";

type Stop = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
}

export default function StopsPage() {
    const [stops, setStops] = useState<Stop[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name') || '';

    useEffect(() => {
        async function searchStops() {
            const stops = await fetchStops(name);
            setStops(stops);
        }
        searchStops();
    }, [name]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: add debounce
        const value = event.target.value;
        setSearchParams(prev => {
            if (value) {
                prev.set('name', value);
            } else {
                prev.delete('name');
            }
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
                Stops
            </Typography>

            <Paper
                elevation={2}
                sx={{
                    p: 3,
                    borderRadius: 2
                }}
            >
                <TextField
                    fullWidth
                    label="Search stops"
                    variant="outlined"
                    value={name}
                    onChange={handleSearch}
                    placeholder="Enter stop name..."
                />
            </Paper>

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
                    <StopsTable stops={stops} />
                </Box>
            </Paper>
        </Box>
    );
}