import Head from 'next/head';
import {
  Box,
  Container,
  Grid,
} from '@mui/material'
import { TotalActivos } from '../components/dashboard/total-activos'
import { TotalMujeres } from '../components/dashboard/total-mujeres'
import { TotalHombres } from '../components/dashboard/total-hombres'
import { DashboardLayout } from '../components/dashboard-layout'
import { ChartEdades } from '../components/dashboard/ChartEdades'
import { getTotales, getEdades } from 'src/services/apis'
import { useQuery } from 'react-query'
import { useError } from 'src/hooks/useError'
import { PostSkeleton } from '../components/PostSkeleton'

const Dashboard = () => {
  const { addError } = useError()

  const { isLoading, data: totales = [] } = useQuery(['totales'], () => getTotales(), {
    onError: (error) =>
      addError(`Ups!: ${error.message}`)
  })

  const { isLoading: cargando, data: edades = [] } = useQuery(['edades'], () => getEdades(), {
    onError: (error) =>
      addError(`Ups!: ${error.message}`)
  })

  return (
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
              {
                isLoading ?
                  <PostSkeleton altura={124} />
                  :
                  <TotalActivos data={totales[0]} />
              }
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xl={4}
              xs={12}
            >
              {
                isLoading ?
                  <PostSkeleton altura={124} />
                  :
                  <TotalMujeres data={totales[0]} />
              }
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xl={4}
              xs={12}
            >
              {
                isLoading ?
                  <PostSkeleton altura={124} />
                  :
                  <TotalHombres data={totales[0]} />
              }
            </Grid>

            <Grid
              item
              lg={12}
              md={6}
              xl={8}
              xs={12}
            >
              {
                cargando ?
                  <PostSkeleton altura={424} />
                  :
                  <ChartEdades rangoEdades={edades} />
              }
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>
  )
}

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
