import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import { EmpleadosToolbar } from '../components/empleados/empleados-toolbar'
import { EmpleadosLista } from '../components/empleados/empleados-list-results'
import { DashboardLayout } from '../components/dashboard-layout'
import { getEmpleados, getAdscripciones } from 'src/services/apis'
import { useQuery } from 'react-query'
import { PostSkeleton } from 'src/components/empleados/PostSkeleton'
import { useSession } from 'next-auth/react'
import { useError } from 'src/hooks/useError'


export default function Empleados({ adscripciones }) {
  const { addError } = useError()

  const { data: session } = useSession()
  const { user } = session

  const [tipo, setTipo] = useState({ queryllave: 'empleados', tipo: '' })
  const { isLoading, data: empleados = [] } = useQuery([tipo.queryllave], () => getEmpleados(tipo.tipo, user.token), {
    onError: (error) =>
      addError(`Ups!: ${error.message}`)
  })


  return (
    <>
      <Head>
        <title>
          Empleados | Consulta Empleados
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
          <EmpleadosToolbar empleadosData={empleados} />
          <Box sx={{ mt: 3 }}>
            {
              isLoading ?
                <PostSkeleton />
                :
                <EmpleadosLista
                  empleados={empleados}
                  setTipo={setTipo}
                  adscripciones={adscripciones}
                />
            }

          </Box>

        </Container>
      </Box>
    </>
  )
}
Empleados.getLayout = (page) => (

  <DashboardLayout>
    {page}
  </DashboardLayout>
)


export async function getServerSideProps() {

  const adscripcionesData = await getAdscripciones()

  return {
    props: {
      adscripciones: adscripcionesData
    }, // will be passed to the page component as props
  }
}
