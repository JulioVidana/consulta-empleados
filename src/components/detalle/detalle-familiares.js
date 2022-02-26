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
import { getFamilia } from '../../api/apis'
import { format, parseISO } from 'date-fns'

export const DetalleFamiliares = ({ data }) => {
  const clave = data?.clave
  const { isLoading, data: familiares = [], error, status, isSuccess } = useQuery(['familiares', clave], () => getFamilia(clave))

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

      <Box sx={{ minWidth: 300 }}>
        <TableContainer>
          <Table size='small'>
            <TableHead>
              <TableRow>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Parentesco
                </TableCell>
                <TableCell>
                  Fecha Nacimiento
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {familiares.map((item) => (
                <TableRow key={item.id} >
                  <TableCell>
                    {item.nombre}
                  </TableCell>
                  <TableCell>
                    {item.parentesco}
                  </TableCell>
                  <TableCell>
                    {format(parseISO(item.fecha_naci), 'dd/MM/yyyy')}
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
