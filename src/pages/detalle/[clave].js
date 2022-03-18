import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container, Tab, useMediaQuery, useTheme, Slide } from '@mui/material'
import { TabPanel, TabList, TabContext } from '@mui/lab'
import { DashboardLayout } from '../../components/dashboard-layout'
import DetalleTopBar from 'src/components/detalle/detalle-topbar'
import { DatosGenerales } from 'src/components/detalle/datos-generales'
import { DetalleFamiliares } from 'src/components/detalle/detalle-familiares'
import { DetallePuesto } from 'src/components/detalle/detalle-puesto'
import { DetalleSueldo } from 'src/components/detalle/detalle-sueldo'
import { DetalleHorario } from 'src/components/detalle/detalle-horario'
import { DetalleExpediente } from 'src/components/detalle/detalle-expediente'
import { getOneEmpleado, getFamilia, getExpediente } from 'src/services/apis'
import { useQuery } from 'react-query'
import { useSession } from 'next-auth/react'
import Controls from '../../components/controls/Controls'
import { useError } from 'src/hooks/useError'
import PopUp from 'src/components/PopUp'
import Imagen from 'src/components/detalle/Imagen'
import ReporteEmpleado from 'src/components/reports/reporteEmpleado'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up"
    ref={ref}
    {...props} />;
})

export default function EmpleadoDetalle() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const { addError } = useError()
  const { data: session } = useSession()
  const { user } = session
  const { query: { clave } } = useRouter()

  const { isLoading, data: detalle = [] } = useQuery(['empleado', clave], () => getOneEmpleado(clave, user.token), {
    onError: (error) =>
      addError(`Ups!: ${error.message}`)
  })

  const { isLoading: isLoadingFam, data: familiares = [] } = useQuery(['familiares', clave], () => getFamilia(clave), {
    onError: (error) =>
      addError(`Ups!: ${error.message}`)
  })

  const { isLoading: isLoadingExp, data: expediente = [] } = useQuery(['expediente', clave], () => getExpediente(clave), {
    onError: (error) =>
      addError(`Ups!: ${error.message}`)
  })

  //const detalle = datos[0]
  const [value, setValue] = useState('2')
  const [openPopupImg, setOpenPopupImg] = useState(false)
  const [openPopUpPrint, setOpenPopUpPrint] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
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
          <DetalleTopBar data={detalle[0]}
            isLoading={isLoading}
            setOpenPopUp={setOpenPopupImg}
            setOpenPopUpPrint={setOpenPopUpPrint}
          />

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
                <DatosGenerales data={detalle[0]}
                  isLoading={isLoading} />
                <DetalleFamiliares
                  familiares={familiares}
                  isLoading={isLoadingFam}
                />
              </TabPanel>
              <TabPanel value="2"
                sx={{ p: 0 }}>
                <DetallePuesto data={detalle[0]}
                  isLoading={isLoading} />
                <DetalleSueldo data={detalle[0]}
                  isLoading={isLoading} />
                <DetalleHorario data={detalle[0]}
                  isLoading={isLoading} />
              </TabPanel>
              <TabPanel value="3"
                sx={{ p: 0 }}>
                <DetalleExpediente
                  expediente={expediente}
                  isLoading={isLoadingExp}
                />
              </TabPanel>
            </TabContext>
          </Box>


        </Container>
      </Box>
      <PopUp
        openPopup={openPopupImg}
        setOpenPopup={setOpenPopupImg}
      >
        <Imagen
          imagenSrc={`/static/images/avatars/E${detalle[0]?.clave}.jpg`}
          mediaQuery={matches}
        />
      </PopUp>

      <PopUp
        tieneTitle={true}
        title='Vista Previa'
        openPopup={openPopUpPrint}
        setOpenPopup={setOpenPopUpPrint}
        fullScreen={true}
        maxWidth={'sm'}
        Transition={Transition}
      >
        <ReporteEmpleado
          imagenSrc={`/static/images/avatars/E${detalle[0]?.clave}.jpg`}
          empleadoData={detalle[0]}
          famsData={familiares}
          expData={expediente}
        />
      </PopUp>

    </>
  )
}
EmpleadoDetalle.getLayout = (page) => (

  <DashboardLayout>
    {page}
  </DashboardLayout>
)

