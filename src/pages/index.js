import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material'
import { TotalActivos } from '../components/dashboard/total-activos'
import { TotalMujeres } from '../components/dashboard/total-mujeres'
import { TotalHombres } from '../components/dashboard/total-hombres'
import { LatestOrders } from '../components/dashboard/latest-orders'
import { LatestProducts } from '../components/dashboard/latest-products'
import { Edades } from '../components/dashboard/edades'
import { DashboardLayout } from '../components/dashboard-layout'
import { Adscripciones } from '../components/dashboard/adscripciones'

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Consulta Empleados
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <TotalActivos />
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <TotalMujeres />
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <TotalHombres />
          </Grid>

          <Grid
            item
            lg={8}
            md={6}
            xl={9}
            xs={12}
          >
            <Adscripciones />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Edades sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
