import {
  Card,
  CardHeader,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  Skeleton
} from '@mui/material'
import { format, parseISO } from 'date-fns'

export const DatosGenerales = ({ data, isLoading }) => {

  const generales = [
    { id: 'Dirección', dato: `${data.direccion}, ${data.colNomb}, ${data.ciuNomb}` },
    { id: 'Teléfono', dato: data.celular },
    { id: 'Escolaridad', dato: data.escolaridad },
    { id: 'Lugar de Nacimiento', dato: data.lugNac },
    { id: 'Fecha de Nacimiento', dato: data.fecNac }
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
