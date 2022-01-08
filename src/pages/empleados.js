import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Box, Container } from '@mui/material'
import { EmpleadosToolbar } from '../components/empleados/empleados-toolbar'
import { EmpleadosLista } from '../components/empleados/empleados-list-results'
import { DashboardLayout } from '../components/dashboard-layout'
import { empleadosData } from '../__mocks__/Empleados'

export default function Empleados() {
    const [empleados, setEmpleados] = useState([])

    useEffect(() => {
        fetch('http://pruebas.difson.gob.mx:1004/Empleados')
            .then((response) => response.json())
            .then(data => {
                setEmpleados(data)
            })
    }, [])

    return (
        <>
            <Head>
                <title>
                    Empleados | Sistemas DIF Sonora
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
                        <EmpleadosLista empleados={empleados} />
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

