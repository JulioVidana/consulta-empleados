import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../../components/account/account-profile';
import { AccountProfileDetails } from '../../components/account/account-profile-details';
import { DashboardLayout } from '../../components/dashboard-layout';
import DetalleProfile from 'src/components/detalle/detalle-profile';
import DetalleGenerales from 'src/components/detalle/detalle-generales';

export default function EmpleadoDetalle() {
    const { query: { clave } } = useRouter()

    return (
        <>
            <Head>
                <title>
                    Detalle Empleado | Sistemas DIF Sonora
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h4"
                    >
                        Datos del Empleado
                    </Typography>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <DetalleProfile />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <DetalleGenerales />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
EmpleadoDetalle.getLayout = (page) => (

    <DashboardLayout>
        {page}
    </DashboardLayout>
)

