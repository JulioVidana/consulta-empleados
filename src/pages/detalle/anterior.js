import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container, Grid, Typography } from '@mui/material'
import { DashboardLayout } from '../../components/dashboard-layout'
import DetalleProfile from 'src/components/detalle/detalle-profile'
import DetalleGenerales from 'src/components/detalle/detalle-generales'
import SkeletonProfile from 'src/components/detalle/Skeleton-Profile'
import SkeletonGenerales from 'src/components/detalle/Skeleton-Generales'
import { getOneEmpleado } from '../../api/apis'
import { useQuery } from 'react-query'
export default function EmpleadoDetalle() {
  const { query: { clave } } = useRouter()
  const { isLoading, data: detalle = [], error, status } = useQuery(['empleado', clave], () => getOneEmpleado(clave))

  if (error) {
    console.log("error: " + error)
  }

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
              {
                isLoading ?
                  <SkeletonProfile />
                  :
                  <DetalleProfile data={detalle} />
              }
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              {
                isLoading ?
                  <SkeletonGenerales />
                  :
                  <DetalleGenerales data={detalle} />
              }
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

