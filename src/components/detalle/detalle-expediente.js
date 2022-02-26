import {
  Card,
  CardHeader,
  Divider,
  Box,
  Stack,
  Skeleton,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import { useQuery } from 'react-query'
import { getExpediente } from '../../api/apis'
import { format, parseISO } from 'date-fns'


export const DetalleExpediente = ({ data }) => {
  const clave = data?.clave
  const { isLoading, data: expediente = [], error, status, isSuccess } = useQuery(['expediente', clave], () => getExpediente(clave))

  /* const expediente = [
    {
      id: 1,
      descripcion: 'EN VIRTUD AL DECRETO DE AUSTERIDAD CAMBIA DEL NIVEL 11 AL 10 SEGUN OFICIO DG0771 ENVIADO A LA',
      fecha: '16/06/2017'
    }
  ] */

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
        title="Expediente"
      />
      <Divider />

      <Box sx={{ minWidth: 300 }}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  Fecha
                </TableCell>
                <TableCell>
                  Suceso
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expediente.map((item) => (
                <TableRow key={item.id} >
                  <TableCell>
                    {format(parseISO(item.fecha), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell>
                    {item.suceso}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Divider />

    </Card>
  )
}
