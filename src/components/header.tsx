import { DirectionsBus, LocationOn } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <AppBar position="static" sx={{ mb: 3 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Transit Route Planner
                </Typography>
                <IconButton
                    component={Link}
                    to="/routes"
                    color={location.pathname.includes('/routes') ? 'secondary' : 'inherit'}
                    sx={{ mr: 1 }}
                >
                    <DirectionsBus />
                </IconButton>
                <IconButton
                    component={Link}
                    to="/stops/search"
                    color={location.pathname.includes('/stops') ? 'secondary' : 'inherit'}
                >
                    <LocationOn />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}