import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import { EmpleadosToolbar } from '../components/empleados/empleados-toolbar'
import { EmpleadosLista } from '../components/empleados/empleados-list-results'
import { DashboardLayout } from '../components/dashboard-layout'
import { empleadosData } from '../__mocks__/Empleados'
import { API_URL } from '../services/settings'
import { getEmpleados } from '../api/apis'
import { useQuery } from 'react-query'
import { PostSkeleton } from 'src/components/empleados/PostSkeleton'
/* export async function getStaticProps() {

  const res = await fetch(API_URL)
  const empleadosData = await res.json()

  return {
    props: {
      empleadosData
    }
  }
} */

export default function Empleados() {
  //const [empleados, setEmpleados] = useState([])
  //console.log(empleadosData)
  const { isLoading, isFetching, data: empleados = [], refetch, error } = useQuery(['empleados'], getEmpleados)

  /*  useEffect(() => {

     fetch(API_URL)
       .then((response) => response.json())
       .then(data => {
         setEmpleados(data)
       })
   }, []) */

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
                <EmpleadosLista empleados={empleados} />
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

