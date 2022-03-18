import {
  Card,
  CardHeader,
  Divider,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import { format, parseISO } from 'date-fns'
import { PostSkeleton } from 'src/components/PostSkeleton'


export const DetalleFamiliares = ({ familiares, isLoading }) => {

  if (isLoading) {
    return (
      <PostSkeleton
        altura={240}
        marginTop={3} />)
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
