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

export const DetallePuesto = ({ data, isLoading }) => {

  const generales = [
    { id: 'Adscrito A', dato: data?.adscripcion },
    { id: 'Plaza', dato: data?.plaza },
    { id: 'Nvel', dato: data?.nivel },
    { id: 'Homo', dato: data?.nivel_homo },
    { id: 'Con Funciones De', dato: data?.funciones },
    { id: 'Tipo de Nómina', dato: data?.tpoNom },
    { id: 'Condición Laboral', dato: data?.condLabo }
  ]

  if (isLoading) {
    return (

      <Stack sx={{ mt: 3 }}>
        <Skeleton variant="rectangular"
          width='100%'
          height={340} />
      </Stack>

    )
  }
  return (

    <Card sx={{ mt: 3 }}>
      <CardHeader
        title="Datos de Puesto"
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
