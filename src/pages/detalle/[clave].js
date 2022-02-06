import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container, Tab, Divider } from '@mui/material'
import { TabPanel, TabList, TabContext } from '@mui/lab'
import { DashboardLayout } from '../../components/dashboard-layout'
import DetalleTopBar from 'src/components/detalle/detalle-topbar'
import { DatosGenerales } from 'src/components/detalle/datos-generales'
import { DetalleFamiliares } from 'src/components/detalle/detalle-familiares'
import { getOneEmpleado } from '../../api/apis'
import { useQuery } from 'react-query'
import Controls from '../../components/controls/Controls'

export default function EmpleadoDetalle() {
  const { query: { clave } } = useRouter()
  const { isLoading, data: detalle = [], error, status } = useQuery(['empleado', clave], () => getOneEmpleado(clave))


  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (error) {
    console.log("error: " + error)
  }

  return (
    <>
      <Head>
        <title>
          Detalle | Consulta de Empleados
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
          <Controls.RegresaLink
            href='/empleados'
            texto='Empleados' />
          <DetalleTopBar data={detalle}
            isLoading={isLoading} />

          <Box sx={{ width: '100%', typography: 'body1', mt: 3 }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: '#d4d5d7' }}>
                <TabList onChange={handleChange} >
                  <Tab label="General"
                    value="1"
                    sx={{ textTransform: 'none', fontSize: 14 }} />
                  <Tab label="Nómina"
                    value="2"
                    sx={{ textTransform: 'none', fontSize: 14 }} />
                  <Tab label="Expediente"
                    value="3"
                    sx={{ textTransform: 'none', fontSize: 14 }} />
                </TabList>
              </Box>
              {/* <Divider /> */}
              <TabPanel value="1"
                sx={{ p: 0 }}>
                <DatosGenerales data={detalle}
                  isLoading={isLoading} />
                <DetalleFamiliares data={detalle}
                  isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="2"
                sx={{ p: 0 }}>
                Nómina
              </TabPanel>
              <TabPanel value="3"
                sx={{ p: 0 }}>
                Expediente
              </TabPanel>
            </TabContext>
          </Box>


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

