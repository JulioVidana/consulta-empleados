import {
  Card,
  CardHeader,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { format, parseISO } from 'date-fns'
import { PostSkeleton } from 'src/components/PostSkeleton'

export const DatosGenerales = ({ data, isLoading }) => {

  const generales = [
    { id: 'Dirección', dato: `${data?.direccion}, ${data?.colNomb}, ${data?.ciuNomb}` },
    { id: 'Teléfono', dato: data?.celular },
    { id: 'Email', dato: data?.email },
    { id: 'Escolaridad', dato: data?.escolaridad },
    { id: 'Lugar de Nacimiento', dato: data?.lugNac },
    {
      id: 'Fecha de Nacimiento',
      dato: data?.fecNac ? format(parseISO(data?.fecNac), 'dd/MM/yyyy') : ''
    },
    {
      id: 'Fecha de Ingreso',
      dato: data?.fecha_ingreso ? format(parseISO(data?.fecha_ingreso), 'dd/MM/yyyy') : ''
    },
    {
      id: 'Fecha Base',
      dato: data?.fecha_base && data.fecha_base !== '0001-01-01T00:00:00' ? format(parseISO(data?.fecha_base), 'dd/MM/yyyy') : ''
    },
    {
      id: 'Fecha Baja',
      dato: data?.fecha_baja && data?.fecha_baja !== '0001-01-01T00:00:00' ? format(parseISO(data?.fecha_baja), 'dd/MM/yyyy') : ''
    }

  ]

  if (isLoading) {
    return (
      <PostSkeleton
        altura={240}
        marginTop={3} />)
  }

  return (

    <Card sx={{ mt: 3 }}>
      <CardHeader
        title="Información General"
      />
      <Divider />
      <List disablePadding
        sx={{ mb: 4 }}>

        {
          generales.map(item => (
            <ListItem
              key={item.id}
              divider
            >
              <ListItemText
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  mt: 0,
                  mb: 0
                }}
                primary={
                  <Typography variant='subtitle2'
                    minWidth={180}>
                    {item.id}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant='subtitle2'
                    color='textSecondary'
                  >
                    {item.dato}
                  </Typography>
                }
              />

            </ListItem>

          ))
        }

      </List>
      <Divider />

    </Card>
  )
}
