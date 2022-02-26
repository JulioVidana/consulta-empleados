import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import { EmpleadosToolbar } from '../components/empleados/empleados-toolbar'
import { EmpleadosLista } from '../components/empleados/empleados-list-results'
import { DashboardLayout } from '../components/dashboard-layout'
import { getEmpleados, getAdscripciones } from '../api/apis'
import { useQuery } from 'react-query'
import { PostSkeleton } from 'src/components/empleados/PostSkeleton'

export default function Empleados({ adscripciones }) {
  const [tipo, setTipo] = useState({ queryllave: 'empleados', tipo: '' })
  const { isLoading, isFetching, data: empleados = [], refetch, error } = useQuery([tipo.queryllave], () => getEmpleados(tipo.tipo))

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
          <EmpleadosToolbar />
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
