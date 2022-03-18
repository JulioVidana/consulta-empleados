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
import { PostSkeleton } from 'src/components/PostSkeleton'


export const DetalleSueldo = ({ data, isLoading }) => {

  const sueldoBruto = data?.sueldo + data?.compensacion + data?.prestac_ley + data?.prestaciones

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  if (isLoading) {
    return (
      <PostSkeleton
        altura={140}
        marginTop={3} />)
  }
  return (

    <Card sx={{ mt: 3 }}>
      <CardHeader
        title="Detalle de Sueldo"
      />
      <Divider />

      <Box sx={{ minWidth: 300 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Sueldo
                </TableCell>
                <TableCell>
                  Compensación
                </TableCell>
                <TableCell>
                  Prest. Ley
                </TableCell>
                <TableCell>
                  Prestac.
                </TableCell>
                <TableCell>
                  Sdo. Bruto
                </TableCell>
                <TableCell>
                  Deducc.
                </TableCell>
                <TableCell>
                  Sdo. Neto
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {dollarUS.format(data?.sueldo)}
                </TableCell>
                <TableCell>
                  {dollarUS.format(data?.compensacion)}
                </TableCell>
                <TableCell>
                  {dollarUS.format(data?.prestac_ley)}
                </TableCell>
                <TableCell>
                  {dollarUS.format(data?.prestaciones)}
                </TableCell>
                <TableCell>
                  {dollarUS.format(sueldoBruto)}
                </TableCell>
                <TableCell>
                  {dollarUS.format(data?.deducciones)}
                </TableCell>
                <TableCell>
                  {dollarUS.format(sueldoBruto - data?.deducciones)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Divider />

    </Card>
  )
}
