import {
  Card,
  CardHeader,
  Divider,
  Box,
  Stack,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import PerfectScrollbar from 'react-perfect-scrollbar';


export const DetalleFamiliares = ({ data, isLoading }) => {

  const familiares = [
    {
      id: 1,
      nombre: 'VALENZUELA GUTIERREZ JUANITA',
      tipo: 'Esposo(a)',
      FecNac: '16/06/1977'
    }
  ]

  if (isLoading) {
    return (

      <Stack sx={{ mt: 3 }}>
        <Skeleton variant="rectangular"
          width='100%'
          height={240} />
      </Stack>

    )
  }
  return (

    <Card sx={{ mt: 3 }}>
      <CardHeader
        title="Familiares"
      />
      <Divider />

      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Tipo
                </TableCell>
                <TableCell>
                  Fecha Nacimiento
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {familiares.map((item) => (
                <TableRow
                  hover
                  key={item.id}
                >
                  <TableCell>
                    {item.nombre}
                  </TableCell>
                  <TableCell>
                    {item.tipo}
                  </TableCell>
                  <TableCell>
                    {item.FecNac}
                  </TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      <Divider />

    </Card>
  )
}
