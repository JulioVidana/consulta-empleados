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


export const DetalleSueldo = ({ data, isLoading }) => {

  const sueldoBruto = data?.sueldo + data?.compensacion + data?.prestac_ley + data?.prestaciones

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  if (isLoading) {
    return (

      <Stack sx={{ mt: 3 }}>
        <Skeleton variant="rectangular"
          width='100%'
          height={140} />
      </Stack>

    )
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
