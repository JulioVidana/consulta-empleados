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


export const DetalleExpediente = ({ expediente, isLoading }) => {

  if (isLoading) {
    return (
      <PostSkeleton
        altura={240}
        marginTop={3} />)
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
