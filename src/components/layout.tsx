import { Box, Container } from '@mui/material';
import Header from './header';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            minWidth: '100vw',
            bgcolor: 'grey.100'
        }}>
            <Header />
            <Container
                maxWidth="lg"
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    py: { xs: 2, sm: 3 },
                    height: '100%'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    height: '100%'
                }}>
                    {children}
                </Box>
            </Container>
        </Box>
    );
} 