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
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { PostSkeleton } from 'src/components/PostSkeleton'

export const DetalleHorario = ({ data, isLoading }) => {

  const horarioData = [
    { id: 'Entrada', dato: data?.entrada_1 },
    { id: 'Salida', dato: data?.salida_1 },
    { id: 'Entrada2', dato: data?.entrada_2 },
    { id: 'Salida2', dato: data?.salida_2 },
    { id: 'Lun', dato: data?.trabaja_lun },
    { id: 'Mar', dato: data?.trabaja_mar },
    { id: 'Mier', dato: data?.trabaja_mie },
    { id: 'Jue', dato: data?.trabaja_jue },
    { id: 'Vier', dato: data?.trabaja_vie },
    { id: 'Sab', dato: data?.trabaja_sab },
    { id: 'Dom', dato: data?.trabaja_dom },
    { id: 'Fest', dato: data?.dias_festivos },
    { id: 'Checa', dato: data?.checa }
  ]
  if (isLoading) {
    return <PostSkeleton altura={140} marginTop={3} />
  }
  return (

    <Card sx={{ mt: 3 }}>
      <CardHeader
        title="Horario de Trabajo"
      />
      <Divider />

      <Box sx={{ minWidth: 300 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table>
            <TableHead>
              <TableRow>
                {
                  horarioData.map(item => (
                    <TableCell key={item.id}>
                      {item.id}
                    </TableCell>
                  ))
                }

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {
                  horarioData.map(item => (
                    <TableCell key={item.id}>

                      {(item.dato === true && <CheckCircleIcon color='success' />)
                        || (item.dato === false && '-')
                        || item.dato}
                    </TableCell>
                  ))
                }

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Divider />

    </Card>
  )
}
